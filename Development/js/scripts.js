// let menu = ["smon", "smon btata", "tost"];

// alert("1-smon 2-smon btata 3-tost");

// let number = prompt(" اختار من المنيو من واحد لى ثلاثه ");

// if (number == 1) {
//   alert(menu[0]);
// }
// if (number == 2) {
//   alert(menu[1]);
// }
// if (number == 3) {
//   alert(menu[2]);
// }

// let calculator = ["+", "-", "*", "/"];

// let first_number = prompt("اختار رقما للقيام بعملية حسابية");

// let second_number = prompt("اختار رقما للقيام بعملية حسابية");

// let math = prompt(" اختار نوع العملية التي تود القيام بها");

// if (math == calculator[1]) {
//   alert(first_number - second_number);
// }
// if (math == calculator[2]) {
//   alert(first_number * second_number);
// }
// if (math == calculator[3]) {
//   alert(first_number / second_number);
// }
// if (math == calculator[0]) {
//   alert(parseInt(first_number) + parseInt(second_number));
// }

let wh = ["per school", " school ", " university"];

let number = prompt(" اكتب عمرك ليظهر لك بأي مرحلة يفترض أن تكون");

if (number >= 3 && number <= 6) {
  alert(wh[0]);
}
if (number >= 7 && number <= 18) {
  alert(wh[1]);
}
if (number >= 19 && number <= 26) {
  alert(wh[2]);
}
