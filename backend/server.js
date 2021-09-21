const express =require("express");
const cors=require("cors")
const mongoose=require("mongoose")
require("dotenv").config();
const User = require("./models/users");
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

// app.get("/display",(req,res)=>{
//     res.send([
//         {"name":"siva",
//         "email":"siva@gmail.com",
//         "password":"1234"},
//         {"name":"siva1",
//         "email":"siva1@gmail.com",
//         "password":"12345"}
//     ])
// });

app.get("/display",(req,res)=>{
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

// User.create({name})
console.log(User.create(()=>{

}))

app.post("/register", async (req, res)=>{
    const {name, email , password} = req.body;

    try{
        const user = await User.create({
            name: name, 
            email: email,
            password: password
        });

        // const user_data = await User.findOne({
        //     email : email
        // });

        // console.log(user_data);
        // console.log(user);

        res.send("User added successfully..");
    }catch(error){
        res.send({message: error.message});
    }
})

app.listen(5000,()=>{
    console.log("server is running...port no:5000")
})
