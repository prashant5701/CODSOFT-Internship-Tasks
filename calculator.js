let str = "";

let eleac = document.getElementById("ac");
let elebackspace = document.getElementById("backspace");
let elemodulo = document.getElementById("modulo");
let eledivide = document.getElementById("divide");

let ele7 = document.getElementById("seven");
let ele8 = document.getElementById("eight");
let ele9 = document.getElementById("nine");
let elemultiply = document.getElementById("multiply");

let ele4 = document.getElementById("four");
let ele5 = document.getElementById("five");
let ele6 = document.getElementById("six");
let eleplus = document.getElementById("plus");

let ele1 = document.getElementById("one");
let ele2 = document.getElementById("two");
let ele3 = document.getElementById("three");
let eleminus = document.getElementById("minus");

let ele0 = document.getElementById("zero");
let eledot = document.getElementById("dot");
let eleequals = document.getElementById("equals");


eleac.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = "";
    eleinput.value = str;
}
elebackspace.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str.substring(0, str.length - 1);
    eleinput.value = str;
}
elemodulo.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + "%";
    eleinput.value = str;
}
eledivide.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + "/";
    eleinput.value = str;
}
ele7.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + "7";
    eleinput.value = str;
}
ele8.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + "8";
    eleinput.value = str;
}

ele9.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + "9";
    eleinput.value = str;
}
elemultiply.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + "*";
    eleinput.value = str;
}
ele4.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + "4";
    eleinput.value = str;
}
ele5.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + "5";
    eleinput.value = str;
}
ele6.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + "6";
    eleinput.value = str;
}
eleplus.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + "+";
    eleinput.value = str;
}
ele1.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + "1";
    eleinput.value = str;
}
ele2.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + "2";
    eleinput.value = str;
}
ele3.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + "3";
    eleinput.value = str;
}
eleminus.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + "-";
    eleinput.value = str;
}
ele0.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + "0";
    eleinput.value = str;
}
eledot.onclick = () => {
    let eleinput = document.getElementById("input-field");
    str = str + ".";
    eleinput.value = str;
}
eleequals.onclick = () => {
    let eleinput = document.getElementById("input-field");

    try {
        str = eval(str);
        eleinput.value = str;
    }
    catch (err) {
        eleinput.value = "ERROR";
    }
}

