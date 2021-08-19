function pinFunction(){
 var pin=Math.round(Math.random()*10000);
  pin=pin+"";

    if(pin.length==4){
        return pin;
    }
    else{
       return pinFunction();
    }
}
document.getElementById("generate-pin").addEventListener('click',function(){
  var collectorPin=document.getElementById('collector-pin');
  collectorPin.value=pinFunction();
})
var allBtnDiv=document.getElementById("all-btn-div");
allBtnDiv.addEventListener('click',function(event){
    var collectorBtnInput=document.getElementById("collector-btn-input");
   if(isNaN(event.target.innerText)){
      if(event.target.innerText=='C'){
        collectorBtnInput.value='';
      }
      else if(event.target.innerText=='Submit'){
        pinMatch();
        collectorBtnInput.value='';
      }
    }
    else{
          collectorBtnInput.value=collectorBtnInput.value+event.target.innerText;
        } 
})
function pinMatch(){
  var collectorBtnInput=document.getElementById("collector-btn-input");
  var collectorPin=document.getElementById('collector-pin');
  if(collectorPin.value==collectorBtnInput.value){
    document.getElementById("pin-matched").style.display='block';
    document.getElementById("pin-not-matched").style.display='none';
  }
  else{
   document.getElementById("pin-not-matched").style.display='block';
   document.getElementById("pin-matched").style.display='none';
  }
}