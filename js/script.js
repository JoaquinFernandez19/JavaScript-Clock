
        //Making the clock
function counter(){
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let y = today.getFullYear();
  let mon = today.getMonth() + 1;
  let d = today.getDate();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  document.getElementById('txtDate').innerHTML =
  d + " - " + mon + " - " + y ;
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var zaWarudo =  setInterval(counter,500);


  //Party time events and functions
var partyButton = document.querySelector('button');
var body = document.querySelector('body');
var p = document.querySelector('p');
var hTitle = document.querySelector('h1');
var partyActivator;

function partyEvent(){
  //al clickear, se chekea el estado, como party
  //activator no tiene valor, pasa al else donde
  // se le otorga el valor 2, en donde al mismo tiempo
  // se activa el PARTY MODE, pero esto causa que 
  //al apretar nuevamente, party activator tenga el valor 2
  //y se activa en el "IF"
  // el cual apaga el party mode.
  if (partyActivator === 2){
    partyActivator = 1;

    partyButton.innerHTML='Party Time';
    partyButton.style.backgroundColor = 'white';
    partyButton.style.color = 'black';
    body.style.background = "url('../background-img.jpg')";
    body.style.color = "white";
    hTitle.innerHTML = "Super serious clock";

  }else{
    partyActivator = 2;

    partyButton.innerHTML="End party..";
    partyButton.style.backgroundColor = "red";
    partyButton.style.color = "white"; 
    body.style.background = "url('../party.gif')";
    body.style.backgroundSize = "cover";
    body.style.color = "pink";
    body.style.textShadow = "4px 4px 1px black";
    partyButton.style.boxShadow = "4px 4px 5px black";
    hTitle.innerHTML = "Party CloOoOoOock";


  }

}


partyButton.addEventListener('click', partyEvent);










