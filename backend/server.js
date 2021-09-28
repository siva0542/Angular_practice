const express =require("express");
const cors=require("cors")
const mongoose=require("mongoose")
require("dotenv").config();
const User = require("./models/users");
const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken');
const JWT_SERECTKEY="siva"
// User.create
const app=express();
// const User = require("./models/users");
// const uriLink="mongodb+srv://demo:demo@cluster0.ijfex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const uriLink=process.env.uriLink;

mongoose.connect(uriLink,{useNewUrlParser: true,
    useUnifiedTopology:true})

mongoose.connection.once("open",()=>{
    console.log("Mongoose db connection successfull...")
})

mongoose.connection.on("error",(error)=>{
    console.log(error.message);
    //console.log("Mongoose db connection unsuccessfull...")
})


app.use(express.json());
app.use(cors());



// app.get("/display",loginmiddleware,(req,res)=>{
//     User.find((error, result)=>{
//         try{
//             if (error){
//                 console.log(error.message);
//             }else{
//                 res.send(result);
//             }
//         }catch(error){
//             console.log(error.message);
//         }

//     })
// });

// User.create({name})
console.log(User.create(()=>{

}))


app.post('/register',(req,res)=>{
    const {name,email,password}=req.body
    if (!email  || !password ||!name){
        return res.status(422).json({error:"please enter all the fields"})
    }
    User.findOne({email:email})
    .then((user)=>{
        if(user){
            //res.send({message:`${email} is registered`})
            return res.status(422).json({error:"user already exists"})
        }
        bcrypt.hash(password,13)
        .then(hashedpassword=>{
            const user = new User(  {
                name:name,
                email:email,
                password:hashedpassword
            })
            user.save()
            .then(()=>{
                //res.redirect('/signin')
                //res.send({message:`${email} is registered`})
                return res.json({message:"successfully Signup"})
                
            })
            .catch(error=>{
                console.log(error)
            })
        })
        
    })
    .catch(error=>{
        console.log(error)
    })
})

app.post("/login",(req,res,next)=>{
    const {email,password}=req.body;
    console.log(email+password)
    User.findOne({email:email})
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"Invalid mail or password"})
        }
        bcrypt.compare(password,user.password)
        .then(doMatch=>{
            if(doMatch){
                const token=jwt.sign({_id:user._id},JWT_SERECTKEY);
                const {_id,name,email}=user
                res.json({token:token,user:{_id,name,email}});
                //res.send({message:"signin successful"})
                
            }
            else{
                next()
            }  
        })
        .catch(err=>{
            console.log(err)
        })
    })
},(req,res)=>{
    return res.status(422).json({error:"Invalid mail or password"})
})

function loginmiddleware(req,res,next){
    console.log(req.headers)
    const {authorization} =req.headers
   console.log(authorization,"dfs")
    if(!authorization){
        return res.status(401).json({error:"you must be logged in to access the delete and display functions"})
    }
    const token=authorization.replace("Bearer ","")
//  console.log(token,"fadgfs")
    jwt.verify(token,JWT_SERECTKEY,(err,payload)=>{
        if(err){
            return res.status(401).json({error:"you must be logged in to access the delete and display functions"})
        }
       console.log(payload,token)
        const {_id}=payload
        User.findById(_id).then(userdata=>{
            req.user=userdata
            console.log(userdata)
            next()
        })  
    })
}

app.get("/display",loginmiddleware,(req,res)=>{
    User.find((error, result)=>{
        try{
            if (error){
                console.log(error.message);
            }else{
                res.send(result);
            }
        }catch(error){
            console.log(error.message);
        }

    })
});

app.delete("/delete/:name", async (req, res)=>{
    try{
        await User.deleteOne({name:req.params.name})
        res.send("User deleted from database.")
    }catch(error){
        res.send({message: error.message})
    }
})




app.listen(5000,()=>{
    console.log("server is running...port no:5000")
})
