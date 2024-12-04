const db=require("./db");

const registeruser=async(name,email,password)=>{
    try {
        const query="insert into users(name,email,password) values($1,$2,$3) returning *";
        return (await db.query(query,[name,email,password])).rows[0];
    } catch (error) {
        console.log(error);
        
    }
}

const getAlluser=async()=>{
    const query="select id ,name,email from users ";
    return (await db.query(query));

}

module.exports={registeruser,getAlluser};
