
var d=new promises(function(resolve){
  resolve("fooo");

});
function callback(){
 console.log(d);
}
d.then(callback);
d.then(callback)