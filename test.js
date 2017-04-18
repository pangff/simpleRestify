/**
 * Created by pangff on 17/4/18.
 */
const fetch = require('node-fetch');

 var successCount = 0;
 var errorCount =0;
 const totalRequestCount = 500;

 for(var i=0;i<totalRequestCount;i++){
     fetch("http://localhost:3200/hello/user-"+i).then(function(res) {
         let result  = res.text();
         return result;
     }).then(function(res) {
         successCount++;
     }).catch(function(e) {
         errorCount++;
         console.log("request-error:"+e);
     });
 }

function checkoutRequestFinish(){
    setTimeout(function(){
        if((successCount+errorCount)<totalRequestCount){
            console.log("finish request count"+(successCount+errorCount));
            checkoutRequestFinish();
        }else{
            console.log("total request count:"+(totalRequestCount))
            console.log("success request count:"+(successCount))
            console.log("error request count:"+(errorCount))
        }
    },100)
}

checkoutRequestFinish();

