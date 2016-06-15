var express   =     require("express");
var bodyParser  =    require("body-parser");
var app       =     express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
  res.sendfile("note.html");
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})