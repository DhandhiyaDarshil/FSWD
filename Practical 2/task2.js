const http = require("http");
const httpserver = http.createServer(function(req,res){
    if(req.method == 'POST')
    {
        res.end("This is post request");
    }  
});
httpserver.listen(3000,()=>{
    console.log("Listning on port 3000...");
})