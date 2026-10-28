var count = 0;
var totalsecondsleft = 900;

let timer = setInterval(() => {
    totalsecondsleft -= 1;
    console.log(count + "seconds have passed");
    display();
    if (totalsecondsleft === 0) {
        clearInterval(timer);
    }
}, 1000);

function display() {
    let secs = totalsecondsleft % 60;
    let mins = Number.parseInt(totalsecondsleft / 60);

    document.getElementById("min").innerHTML = mins;
    document.getElementById("sec").innerHTML = secs;
}