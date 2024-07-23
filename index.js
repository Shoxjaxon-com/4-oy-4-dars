// For
// 1-masala
// for( let i =10; i <= 100; i++){
//     console.log(i);
// }
// 2-masala
// let n = +prompt("Sonni kiriting");
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//   factorial *= i;
//    console.log(factorial);
// }
// 3-masala
// for (let i = 2; i <= 50; i++) {
//     let isComposite = false;
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isComposite = true;
//             break;
//         }
//     }
//     if (isComposite) {
//         console.log(i);
//     }
// }
// 4-masala
// let sum;
// for( let i = 1 ; i<=20 ; i++){
//  sum = sum * i
//  console.log(Math.pow( 2, i));
// }

// 5-masala
// 5 ta sonni foydalanuvchidan qabul qilish
// let numbers = {};
// for (let i = 0; i < 5; i++) {
//   let input = parseFloat(prompt(`Iltimos, ${i + 1}-sonni kiriting:`));
// }
// let max = numbers[0];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log("Eng katta son: " + max);
// console.log("Eng kichik son: " + min);
// 6-masala
// for (let i = 2; i <= 30; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (!isPrime) {
//       console.log(i);
//     }
//   }
//   8-masala
// let = juft = 0;
// let = toq = 0;
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//       juft += i * i;  
//     } else {
//       toq += i * i * i; 
//     }
//   }
// let res = juft- toq;
// console.log(juft);
// console.log(toq);
// console.log(res);
// 9-masala
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(i);
//     }
//   }
//   10-masala
// let sum = 0;
// let count = 100;
// for( let i = 1; i<=100; i++){
//     sum+= i;
// }
// let res = sum / count;

// console.log(res);

// 14-masala
// let sum = 0;
// for( let i =1; i<=200; i++){
//     if(i % 2 ===0){
//         sum +=i;
//     }
//     console.log(sum);
// }


// break

// 1-masala
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//       break;
//     }
//     console.log(i);
//   }

//   2-masala
// for (let i = 1; i <= 10; i++) {
//     if (i === 3 || i === 7) {
//       continue;
// }
//     console.log(i);
//   }
//   3-masala
// let num =+prompt("Sonni kiriting")
// for( let i =1; i<= 10; i++){
//     if(num === 7){
//         console.log("Topildi");

//         break;
//     }else {
//         console.log(`Kiritilgan son ${num} 7 ga teng emas. I = ${i}`);
//       }
// }
//    4-masala
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//       continue;
//     }
//     console.log(i);
// }
//   5-masala
for (let i = 1; i <= 100; i++) {
    if (i > 50) {
      break;
    }
    console.log(i);
  }
  