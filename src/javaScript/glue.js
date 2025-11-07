//load wasm
//cwrap functions for geting particle position, updating the box dimentions and steping forward in time
// Step 1: Fetch and compile the WASM file

/*
fetch('../../build/fluid_sim.wasm')
  .then(response => response.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes))
  .then(result => {
    // Step 2: Access the exported functions
    const wasmExports = result.instance.exports;
  })
  .catch(console.error);
*/

//cwrap 
//ccall


function update_bounds(){
    width = wasmExports.test_c();//window.innerWidth;
    height = window.innerHeight;
    canvas.style.top = (height/20).toString() + 'px';
    canvas.style.left = (width/20).toString() + 'px';
    canvas.width = width - width/10;
    canvas.height = height - height/10 - height/50;
    //chainge_box_size(width, height);
}

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width = wasmExports.test_c();
var height;
update_bounds();


animate();//running loop
function animate(){
    requestAnimationFrame(animate);
    if (width !== window.innerWidth || height !== window.innerHeight){
        ctx.clearRect(0, 0, width, height);
        update_bounds();
    }
    ctx.clearRect(0, 0, width, height);
}