
let numerator = 10;
let denominator = 50;
let percentage = 0;

switch(true) {
  case (numerator / denominator) >= 0.9:
    percentage = 90;
    break;
  case (numerator / denominator) >= 0.8:
    percentage = 80;
    break;
  case (numerator / denominator) >= 0.7:
    percentage = 70;
    break;
  case (numerator / denominator) >= 0.6:
    percentage = 60;
    break;
  default:
    percentage = 0;
}

console.log(`The percentage is ${percentage}%`);