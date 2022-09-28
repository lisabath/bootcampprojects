//my first java code
//document.getElementById('changep').onclick = changep();

let length=document.getElementById("length");
let width=document.getElementById("width");

function addition() {
    l=length.value;
    w=width.value;
    console.log(l,w)
    document.getElementById("result").innerHTML=l+w;
}
function multiply() {
    l=length.value;
    w=width.value;
    console.log (l,w)
    document.getElementById("result").innerHTML=l*w;
}
function subtract () {
    l=length.value
    w=width.value
    console.log (l,w)
    document.getElementById("result").innerHTML=l-w;
}
