const express = require("express");

// inicializando una app de express
const app = express();

app.get("/", function(req, res){
    return res.json({mensaje: "Saludos desde mi App de Node, ULTIMA VERSION"});
});
//LEVANTAR SERVIDOR 
app.listen(3000, function(){
    console.log("Servidor funcionando en 3000 , ULTIMA VERSION");
})