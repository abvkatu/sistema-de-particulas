let nPelota = 100;
let pelotas = [];
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i= 0; i < nPelota; i++){
    pelotas[i] = new RandomWalker(i); 
  }
}

function draw() {
for (let i= 0; i < nPelota; i++) {
  pelotas [i].update (t);
  pelotas [i].display ();
}

t += 1;
}

//------------------------
//-----------classes------
//-------------------------

//--------- Random Walker----
class RandomWalker {
  constructor (_nombre){
    this.nombre = _nombre;
    this.rojo = random (0, 255);
    this.azul = random (0, 100);
    this.verde = random (0, 10);

    this.t = 0;
    this. tSpeed = random (1);
    this.noiseShift = random (1000);

    this.pos = createVector (width / 2, height / 2);
    this.speed = createVector(random(2,2), random (-2,2));
    this.diametro = random (10, 30);
    print ('hola, soy la pelota' + this.nombre);
    
  }
  update(_t){

    this.speed.rotate(map (noise (this.t + this.noiseShift),0, 1, -0.5, 0.5));
    this.pos.add(this.speed);

    this.t += this. tSpeed;
  }
  display (){
    stroke('rgb(0, 0, 0, 0.2)');
    strokeWeight (1);
    fill (this.rojo, this.verde, this.azul);
    ellipse (this.pos.x, this.pos.y, this.diametro, this.diametro);
  }
}