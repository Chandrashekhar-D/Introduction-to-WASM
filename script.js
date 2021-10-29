
// Let's create a function called loadWebAssembly that converts given file into binary array buffer.
function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => {return new WebAssembly.Instance(module) });
};   

//We call the function for math.wasm
loadWebAssembly('math.wasm')
  .then(instance => {
  fibc = instance.exports._Z3fibi;

    console.log('Call your functions !');
  }); 

// Function written in Javascript for nth fibonacci 
  function fibj(n)
{
   if (n <= 1)
      return n;
   return fibj(n-1) + fibj(n-2);
}
  
//This function gives the time required for C++ function
function perfoc(n){
var startTime = performance.now()

var c=fibc(n)
    
var endTime = performance.now()

console.log(`Calculating nth Fibonacci with WASM took ${endTime - startTime} milliseconds,nth fibonacci is ${c}`)

}

// This function gives the time required for Javascript function
function perfoj(n){
  var startTime = performance.now()
  
  var j=fibj(n)
      
  var endTime = performance.now()
  
  console.log(`Calculating nth Fibonacci with JS took ${endTime - startTime} milliseconds, nth fibonacci is ${j}`)
  
  }