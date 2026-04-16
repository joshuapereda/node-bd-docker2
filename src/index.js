const express = require("express");

// inicializando una app de express
const app = express();

app.get("/", function(req, res){
    return res.json({mensaje: "Hola perdoname , no era mometo para hacerte uan broma ❤️"});
});
//LEVANTAR SERVIDOR 
app.listen(3000, function(){
    console.log("Servidor funcionando en 3000 , ULTIMA VERSION");
})