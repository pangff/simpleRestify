/**
 * Created by pangff on 17/4/1.
 */
'use strict';
const restify = require('restify');

const server = restify.createServer();


server.get('/hello/:name', function(req, res, next){
    let {name} = req.params;
    console.log("GET /hello/"+name);
    res.send("hello "+name);
});

server.listen(3200, function() {
    //console.log('%s listening at %s', server.name, server.url);
});

//console.log('server started at 3200');

