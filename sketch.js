
function setup() {
    createCanvas(500, 500)
    background(255);

}

function draw() {

    noFill()
    stroke(255, 0, 0);

    for (let r = 10; r <= 300; r += 10) {
        circle(width/2, height/2, r);
    }
}