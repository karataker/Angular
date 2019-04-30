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

app.get("/libros/:titulo",function(req,res){
  var seleccion=lista.filter(function(e){
    return e.titulo==req.params.titulo;
  })[0];
  res.send(seleccion);

});

app.put('/libros/:titulo', function(req,res){
  var seleccion= lista.filter(function(e){
    return e.titulo==req.params.titulo;
  })[0];
  var indice=lista.indexOf(seleccion);
  lista.splice(indice,1);
  lista.push(req.body);
  res.send(seleccion);
})

app.delete("/libros/:titulo",function(req,res){
    var seleccion=lista.filter(function(e){
      return e.titulo==req.params.titulo;
    });
    var indice=lista.indexOf(seleccion);
    lista.splice(indice,1);

    res.send({"titulo":req.param.titulo});
})

app.get('librosdto',function(req,res){
  var objeto1={"titulo":"java","paginas":200};
  var objeto2={"titulo":"php","paginas":300};
  var listaNueva=[];
  listaNueva.push(objeto1);
  listaNueva.push(objeto2);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
