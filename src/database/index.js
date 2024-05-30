import mongoose from "mongoose";

const connetToDB= async function(){
    mongoose.connect(
        "mongodb+srv://sunilkumarup91:suneelkumar@cluster0.oswphtl.mongodb.net/"
        )
.then(()=>console.log('Databse connected succesfully'))
.catch((e)=>console.log(e));
}

export default connetToDB;