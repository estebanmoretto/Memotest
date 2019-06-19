var srcArray=["images/alce.jpg","images/epelante.jpg","images/nena.jpg","images/peces.jpg","images/unichancho.jpg","images/zapas.jpg"]
var compareArray=[];
var compareIndex=[];
var prueba;
var card = document.querySelectorAll('.flip-box');
//var card = document.getElementsByClassName('flip-box');

/////
function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
        'transition':'transitionend',
        'OTransition':'oTransitionEnd',
        'MozTransition':'transitionend',
        'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}

//var transitionEvent = whichTransitionEvent();
/*transitionEvent && card.addEventListener(transitionEvent, function() {
    console.log('Transition complete!  This is the callback, no library needed!');
});
/////*/
for(let i =0;i<card.length;i++){
        let a = card[i];
        let transitionEvent = whichTransitionEvent();
        transitionEvent && a.addEventListener(transitionEvent,function() {
            compareImages();
        });
        
            a.addEventListener( 'click', function(){
                if(!a.classList.contains("blocked")){
                    myFunction(a,i);}
               
            });
        
      
}
function myFunction(a,i){
    if(compareArray.length<2 && !a.classList.contains("is-flipped")){
        a.classList.add('is-flipped');
        prueba= a.getElementsByTagName("img")[1];
        compareArray.push(prueba);
        compareIndex.push(i);
        console.log(compareArray + "  d  "+compareIndex);
        console.log(compareArray.length);
        
    }
}
function flipImage(){
    
    card[compareIndex[0]].classList.remove("is-flipped");
    card[compareIndex[1]].classList.remove("is-flipped");
    compareIndex.length=0;
    compareArray.length=0;
}
function blockImage(){
    card[compareIndex[0]].classList.add("blocked")
    card[compareIndex[1]].classList.add("blocked")
}
function compareImages(){
    //falta comparar qe no sea la misma imagen o qe no sean imagenes qe estan blokeadas
    if(compareArray.length == 2){
        if(compareArray[0].src==compareArray[1].src && compareIndex[0]!=compareIndex[1]){
           console.log("son iguales");
           blockImage();
           compareIndex.length=0;
           compareArray.length=0;
        }
        else{
            flipImage();
        }
    }
  
}
function assignImages(array){
    var imgArray = document.getElementsByClassName("back-image");
    var a=array.slice(0);
    var x=array.concat(a);
    shuffle(x);
    console.log(x);
    for(var i=0;i<imgArray.length;i++){
        imgArray[i].src=x[i];
    }
}
function shuffle(a){
    var j,x,i;
    for(i=a.length-1;i>0;i--){
        j=Math.floor(Math.random()*(i+1));
        x=a[i];
        a[i]=a[j];
        a[j]=x;
    }
    return a;
}

assignImages(srcArray);
