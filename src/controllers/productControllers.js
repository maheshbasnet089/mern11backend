import Product from "../models/Product.js"


const sayHello = (req,res)=>{
    res.send("i am from controller page get")
}

const newName = async (req,res)=>{


    
    const {ram,rom,productName,description,price}= req.body

        // console.log(ram,rom,productName,description,price)



    const data =  await Product.create({
        productName : productName,
        ram : ram,
        rom : rom,
        price : price,
        description : description

    })
    console.log(data)

   
    res.send(data)
}

export {sayHello,newName}




git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/RameshAdhikari860/back11ecom.git
git push -u origin main