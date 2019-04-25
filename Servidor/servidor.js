var express = require('express');
var cors = require('cors');
var bodyparser=require("body-parser");
var app = express();
app.use(cors());
app.use(bodyparser.json());


var lista=[];
lista.push({"titulo":"java3","autor":"pepe","paginas":200});
lista.push({"titulo":"java4","autor":"pepe2","paginas":300});
lista.push({"titulo":"java5","autor":"pepe3","paginas":400});
lista.push({"titulo":"java6","autor":"pepe4","paginas":500});

app.get('/libros', function (req, res) {
  res.send(lista);
});

app.post("/libros",function(req,res){
    lista.push(req.body);
    res.send(req.body);
})

app.delete("/libros",function(req,res){
    lista.splice(req.body,1);
    res.send(req.body);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
