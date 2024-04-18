const expres= require("express");

const app = expres();

app.get("/contato", function(req, res){

  res.send("Pagina de Conato");  

})

app.listen(8000)