function setup(){
    createCanvas(windowWidth,windowHeight);
    background(0,0,0);
    //vignette
    for(var l=0;l<4000;l=l+11){
        beginShape();
        noFill();
        strokeWeight(l/2200);
        stroke(150,l/25,175);
        circle(windowWidth/2,windowHeight/2,l);
    }
//line work
//leftside
var rLine = 255;
var bLine = 150; 
    for(var l=0;l<500;l=l+10){
        beginShape();
        strokeWeight(l/150);
        stroke(rLine,l/2,bLine);
        line(0,windowHeight/2,windowWidth/2,l);
        endShape();
    }
    for(var l=0;l<460;l=l+20){
        beginShape();
        strokeWeight(l/150);
        stroke(rLine,l/2,bLine);
        line(0,windowHeight/2,windowWidth/2,windowHeight-l);
        endShape();
    }
    for(var l=0;l<500;l=l+20){
        beginShape();
        noFill();
        strokeWeight(l/150);
        stroke(rLine,l/2,bLine);
        circle(windowWidth/2,0+l,l/4);
    }
    for(var l=0;l<500;l=l+7){
        beginShape();
        noFill();
        strokeWeight(l/150);
        stroke(rLine,l/2,bLine);
        circle(0+(l*2.001),windowHeight/2,l/7);
    }
//right side
    for(var l=0;l<500;l=l+10){
        beginShape();
        strokeWeight(l/150);
        stroke(rLine,l/2,bLine);
        line(windowWidth,windowHeight/2,windowWidth/2,l);
        endShape();
    }
    for(var l=0;l<460;l=l+20){
        beginShape();
        strokeWeight(l/150);
        stroke(rLine,l/2,bLine);
        line(windowWidth,windowHeight/2,windowWidth/2,windowHeight-l);
    }
    for(var l=0;l<460;l=l+20){
        beginShape();
        noFill();
        strokeWeight(l/150);
        stroke(rLine,l/2,bLine);
        circle(windowWidth/2,windowHeight-l,l/4);
    }
    for(var l=0;l<500;l=l+7){
        beginShape();
        noFill();
        strokeWeight(l/150);
        stroke(rLine,l/2,bLine);
        circle(windowWidth-(l*2.001),windowHeight/2,l/7);
    }

    // beginShape();
    // strokeWeight(.75);
    // stroke(255,0,150);
    // line(windowWidth/2,0+20,windowWidth/2,windowHeight-20);
// //top left
//     for(var i=500;i>0;i=i-10){
//         beginShape();
//         noFill();
//         stroke(150,i/2,175);
//         strokeWeight(i/250);
//         circle(0,0,i);
//         endShape();
//     }
//     for(var i=500;i>0;i=i-10){
//         beginShape();
//         noFill();
//         stroke(150,i/2,175);
//         strokeWeight(i/250);
//         circle(0,0,i*2);
//         endShape();
//     }
// //bottom left
//     for(var i=500;i>0;i=i-10){
//         beginShape();
//         noFill();
//         stroke(150,i/2,175);
//         strokeWeight(i/250);
//         circle(0,windowHeight,i);
//         endShape();
//     }
//     for(var i=500;i>0;i=i-10){
//         beginShape();
//         noFill();
//         stroke(150,i/2,175);
//         strokeWeight(i/250);
//         circle(0,windowHeight,i*1.75);
//         endShape();
//     }
// //bottom right
//     for(var i=500;i>0;i=i-10){
//         beginShape();
//         noFill();
//         stroke(150,i/2,175);
//         strokeWeight(i/250);
//         circle(windowWidth,windowHeight,i);
//         endShape();
//     }
//     for(var i=500;i>0;i=i-10){
//         beginShape();
//         noFill();
//         stroke(150,i/2,175);
//         strokeWeight(i/250);
//         circle(windowWidth,windowHeight,i*2);
//         endShape();
//    }
//top right
    // for(var i=500;i>0;i=i-10){
    //     beginShape();
    //     noFill();
    //     stroke(150,i/2,175);
    //     strokeWeight(i/250);
    //     circle(windowWidth,0,i);
    //     endShape();
    // }
    // for(var i=500;i>0;i=i-10){
    //     beginShape();
    //     noFill();
    //     stroke(150,i/2,175);
    //     strokeWeight(i/250);
    //     circle(windowWidth,0,i*1.75);
    //     endShape();
    // }

//incrementing lines
    for(var iL=500;iL>20;iL=iL-10){
        beginShape();
        stroke(rLine,iL/4,bLine);
        strokeWeight(iL/400);
        line(windowWidth/2-(iL*2),windowHeight-iL*.95,windowWidth/2-(iL*2),windowHeight)
        endShape();
    }
    for(var iL=500;iL>20;iL=iL-10){
        beginShape();
        stroke(rLine,iL/4,bLine);
        strokeWeight(iL/400);
        line(windowWidth/2+(iL*2),windowHeight-iL*.95,windowWidth/2+(iL*2),windowHeight)
        endShape();
    }
    for(var iL=500;iL>20;iL=iL-10){
        beginShape();
        stroke(rLine,iL/4,bLine);
        strokeWeight(iL/800);
        line(windowWidth/2-(iL*2),0+iL*.95,windowWidth/2-(iL*2),0)
        endShape();
    }
    for(var iL=500;iL>20;iL=iL-10){
        beginShape();
        stroke(rLine,iL/4,bLine);
        strokeWeight(iL/800);
        line(windowWidth/2+(iL*2),0+iL*.95,windowWidth/2+(iL*2),0)
        endShape();
    }

}
function draw(){

}