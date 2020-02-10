
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

setInterval(counter,500);







