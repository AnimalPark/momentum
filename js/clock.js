const printClock = document.querySelector("h2#clock");

function getDate(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,0);
    const minutes = String(date.getMinutes()).padStart(2,0);
    const seconds = String(date.getSeconds()).padStart(2,0);
    printClock.innerText = `${hours}:${minutes}:${seconds}`;
}

/*
function reviceFormat(clockNum){
    return ("00"+clockNum).slice(-2);
}
*/
getDate();
setInterval(getDate, 1000);