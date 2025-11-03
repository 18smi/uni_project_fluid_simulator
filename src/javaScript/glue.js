//fetch('build/fluid_sim.wasm')
//    .then(response => response.arrayBuffer())
//    .then(bytes => WebAssembly.instantiate(bytes))
//    .then(result => {
//        console.log(result.instance.exports.add(2, 3)); // Outputs: 5
//    }
//);

//const get_x = Module.cwrap('get_particleX', 'number', []);
//const get_y = Module.cwrap('get_particleY', 'number', []);
//const chainge_box_size = Module.cwrap('update_box_size', 'number', 'number', []);//not sure if right
//const set_globals = Module.cwrap('set_global_forces', 'number', 'number', []);


function update_bounds(){
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.style.top = (height/20).toString() + 'px';
    canvas.style.left = (width/20).toString() + 'px';
    canvas.width = width - width/10;
    canvas.height = height - height/10 - height/50;
    //chainge_box_size(width, height);
}
function animate(){
    requestAnimationFrame(animate);
    if (width !== window.innerWidth || height !== window.innerHeight){
        ctx.clearRect(0, 0, width, height);
        update_bounds();
    }
    //if (use_device_sensor){
        //set global x force any y force to device accelerometer
    //}
    ctx.clearRect(0, 0, width, height);
    for (var i = 0; i < number_of_particles; ++i){
        //ctx.arc(get_x(i), get_y(i), particle_size, 0, 2*Math.PI);
    }
}


//ccall('setup');

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width;
var height;
update_bounds();


animate();


//window.onbeforeunload = function(e){
//    ccall('close')
//}