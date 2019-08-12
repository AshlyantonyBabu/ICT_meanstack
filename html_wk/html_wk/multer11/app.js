var exp=require('express')
const app=exp()
var mul=require('multer')//module to upload files
var upload=mul({dest:'uploads/'})
var type=upload.single('file1')
app.set("view engine","ejs")
app.set("views","./example/src/view")
app.get("/",function(req,res){
res.render("index")
})
app.post("/upload",type,function(req,res){
    res.send("file uploaded sucessfully.......")
})
app.listen(8900,function(req,res){
    console.log("server started.....")
})
