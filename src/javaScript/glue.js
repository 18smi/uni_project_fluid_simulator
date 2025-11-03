



function update_bounds(){
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.style.top = (height/20).toString() + 'px';
    canvas.style.left = (width/20).toString() + 'px';
    canvas.width = width - width/10;
    canvas.height = height - height/10 - height/50;
    //chainge_box_size(width, height);
}




var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width;
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