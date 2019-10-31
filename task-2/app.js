var figlet = require('figlet');
var prompt = "Hello, Dmitrii";
figlet.text(prompt, function (error, data) {
    if(error){
    } else  {
        console.log(data);
    }
});