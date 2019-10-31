var figlet = require('figlet');
figlet.text(process.argv[2], function (error, data) {
    if(error){
    } else  {
        console.log(data);
    }
});