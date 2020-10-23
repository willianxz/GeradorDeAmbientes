var noiseScale = 0.005, tempo = 0;



var desenharMapa1 = function(){
    
    var nivelDetalhesMapa = 450;
    
     for(var x=0; x < width/2; x++) {
        var noiseVal = noise(x*noiseScale, noiseScale*frameCount);
      if(noiseVal<0.37){
            stroke(64, 64, 64);
        }else if(noiseVal<0.41){
            stroke(5, 5, 5);
        }else if(noiseVal<0.49){
            stroke(random(255), 1, 1);
        }else if(noiseVal<0.50){
            stroke(250, 8, 8);
        }else if(noiseVal<0.53){
            stroke(250, 110, 10);
        }else if(noiseVal<0.54){
            stroke(230, 57, 14);
        }else if(noiseVal<0.56){
           stroke(250, 250, 0);
        }else{
           stroke(255, 0, 0);
        }
        
            var y = noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.7-10;
            
            if(y < height/2){
                point(x,noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.7-10);
                 stroke(random(255)*200,noiseVal*200,noiseVal*200-100,25);
                point(x,noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.7-12);
            }
            
    
     }
};

var desenharMapa2 = function(){
    
    var nivelDetalhesMapa = 450;
    
     for(var x=width/2; x < width; x++) {
        noiseDetail(7, 0.5);
        var noiseVal = noise(x*noiseScale, noiseScale*frameCount);
        if(noiseVal<0.37){
            stroke(21, 66, 1);
        }else if(noiseVal<0.41){
            stroke(11, 56, 2);
        }else if(noiseVal<0.49){
            stroke(12, 38, 1);
        }else if(noiseVal<0.50){
            stroke(7, 26, 1);
        }else if(noiseVal<0.53){
            stroke(10, 26, 1);
        }else if(noiseVal<0.54){
            stroke(6, 18, 6);
        }else if(noiseVal<0.56){
           stroke(16, 41, 1);
        }else{
           stroke(4, 23, 1);
        }
        
            var y = noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.7-10;
            
            if(y < height/2){
            rect(x,noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.7-10, 10, 10);
            stroke(noiseVal*200,noiseVal*200,noiseVal*200-100,25);
            rect(x,noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.7-12, 10, 10);
            }
     }
};

var desenharMapa3 = function(){
    
     var nivelDetalhesMapa = 450;
    
     for(var x=0; x < width/2; x++) {
        noiseDetail(7, 0.5);
        var noiseVal = noise(x*noiseScale, noiseScale*frameCount);
        if(noiseVal<0.37){
            stroke(21, 66, 1);
        }else if(noiseVal<0.41){
            stroke(11, 56, 2);
        }else if(noiseVal<0.49){
            stroke(12, 38, 1);
        }else if(noiseVal<0.50){
            stroke(7, 26, 1);
        }else if(noiseVal<0.53){
            stroke(10, 26, 1);
        }else if(noiseVal<0.54){
            stroke(6, 18, 6);
        }else if(noiseVal<0.56){
           stroke(16, 41, 1);
        }else{
           stroke(4, 23, 1);
        }
        
            var y = noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.1-10;
            
            if(y > height/2 && y < height){
            arc(x,noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.1-10,10,10,100,200);
            }
            
            
     }
};

var desenharMapa4 = function(){
    
     var nivelDetalhesMapa = 450;
    
     for(var x=width/2; x < width; x++) {
        noiseDetail(7, 0.5);
        var noiseVal = noise(x*noiseScale, noiseScale*frameCount);
        if(noiseVal<0.37){
            stroke(11, 118, 184);
        }else if(noiseVal<0.41){
            stroke(18, 128, 196);
        }else if(noiseVal<0.49){
            stroke(4, 2, 48);
        }else if(noiseVal<0.50){
            stroke(15, 1, 26);
        }else if(noiseVal<0.53){
            stroke(32, 1, 66);
        }else if(noiseVal<0.54){
            stroke(42, 2, 74);
        }else if(noiseVal<0.56){
           stroke(21, 1, 41);
        }else{
           stroke(10, 1, 23);
        }
        
            
            var y = noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.7-12;
            
            if(y > height/2){
            rect(x,noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.7-10, 10, 10);
            stroke(102, 232, 247,25);
            rect(x,noiseVal*nivelDetalhesMapa+tempo-nivelDetalhesMapa/1.7-12, 10, 10);
            }
     }
};

function setup() {
    c = createCanvas(windowWidth, windowHeight);
    background(255, 255, 255);
}

function draw() {
    strokeWeight(3);
    desenharMapa1();
    desenharMapa2();
    desenharMapa3();
    desenharMapa4();
    tempo+=0.5;
}


 function mouseClicked(){
   tempo = 0;
   noiseScale+=0.001;
   saveCanvas(c, 'ambientes', 'jpg');
   background(255, 255, 255);
};
