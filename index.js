// let fs=require('fs')
// console.log(fs);
// console.log("maa");
// let os = require('os')
// console.log(os.homedir());
// let arr=['cat','dog','cat','dog']
// app.get('/:ani',(req,res)=>{
//     let{ani}=req.params
//     let data=arr.filter((a)=>{
//         return a==ani
//     })
//     res.send(data)
// })
let express=require('express')
let app=express()
app.get('/',(req,res)=>{
    res.send("jai shree ram bhai ")
})
app.listen(4000,()=>{
    console.log("server running  port no 4000")
})