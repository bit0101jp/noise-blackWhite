function setup() {
  createCanvas(200, 200);
}

function draw() {
  let noiseScale = 0.03;

  background(0);
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let noiseVal = noise(x * noiseScale, y * noiseScale);
      stroke(noiseVal * 255);
      point(x, y);
    }
  }
}