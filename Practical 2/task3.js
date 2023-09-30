var Client = require('node-rest-client').Client;

var client = new Client();

var args = {
	data: { test: "hello" },
	headers: { "Content-Type": "application/json" }
};

client.post("https://www.google.com/", args, function (data, response) {
	console.log(data);
	console.log(response);
});

client.registerMethod("postMethod", "https://www.google.com/", "POST");

client.methods.postMethod(args, function (data, response) {
	console.log(data);
	console.log(response);
});