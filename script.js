let math;

function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer))
    .then(module => {return new WebAssembly.Instance(module) });
};
  
loadWebAssembly('math.wasm')
  .then(instance => {
    add = instance.exports._Z3addii;
    subtract = instance.exports._Z8subtractii;
    multiply = instance.exports._Z8multiplyii;
    divide = instance.exports._Z6divideii;
    square = instance.exports._Z6squarei;

    console.log('Call your math functions !');
  }); 