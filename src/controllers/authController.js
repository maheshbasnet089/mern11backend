import User from "../models/User"



const register = async(req,res)=>{

    try {
        
   

     const  {userName,email,password,confirmPassword} = req.body

     if(!userName || !email || !password || !confirmPassword){
        throw new Error('User Credientials Missing')
     }
     if(password !== confirmPassword){
        throw new Error("Password don't match")
     }

   const userFound =  await User.find({email: email})

    //  userFound = [ {}]

   if(userFound.length > 0)
   {
     throw new Error("user already exists")
   }

  const data = User.create({
    userName,
    password,
    phone,
    email
  })


  res.status(200).json({message : "user registered successful",data})


 } catch (error) {
        
    console.log(error.message)
    res.status(400).send(error.message)
    }



}

export {register}