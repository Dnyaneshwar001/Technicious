const express=require("express");
const app=express();
const cors=require("cors");
const {registeruser,getAlluser}=require("./userModel")
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/register",async(req,res)=>{
    try {
        
        const {name,email,password}=req.body;
        const newUser1=await registeruser(name,email,password);
        res.status(200).json({message:"user register success",user:newUser1})
    } catch (error) {
        console.log(error);
        
    }

})

app.get("/get",async(req,res)=>{
    try {
        const getuser=await getAlluser();
        res.status(201).json({user:getuser})
    } catch (error) {
        console.log(error);
        
    }
})

app.listen(9000,()=>{
    console.log("app running on 9000");
    
});