function input(ops){
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    switch (ops) {
        case "cong":
            cong(number1, number2);
            break;
        case "tru":
            tru(number1, number2);
            break;
        case "nhan":
            nhan(number1, number2);
            break;
        case "chia":
            chia(number1, number2);
            break;
    }
}
function cong(number1,number2){
   let result = number1+ number2;
    document.getElementById("result").innerHTML = "Result is: " + result;
}
function tru(number1,number2) {
    let result = number1 - number2;
    document.getElementById("result").innerHTML = "Result is: " + result;

}
function nhan(number1,number2) {
    let result = number1 * number2;
    document.getElementById("result").innerHTML = "Result is: " + result;
}
function chia(number1,number2) {
    let result = number1 / number2;
    document.getElementById("result").innerHTML = "Result is: " + result;
}