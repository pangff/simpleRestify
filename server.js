/**
 * Created by pangff on 17/4/1.
 */
'use strict';
const restify = require('restify');
const bunyan = require('bunyan');
const log = bunyan.createLogger({name: 'simple-restify'});

const server = restify.createServer({
    log: log
});

server.use(restify.requestLogger());

server.get('/hello/:name', function(req, res, next){

    let {name} = req.params;
    var logInfo = "{\"params-name\":\""+name+"\"}";
    req.log.info(logInfo);
    res.send("hello "+name);
});


server.listen(3200, function() {
    console.log('%s listening at %s', server.name, server.url);
});

console.log('server started at 3200');


server.listen(8080);