const {Client}=require("pg");

const client=new Client({
    user:'postgres',
    host:'localhost',
    database:'ecomm',
    password:'prasad',
    post:5432

})
client.connect()
.then(()=>console.log("connected succefully"))
.catch((err)=>console.log(err))

module.exports=client;
