// Variable

/**
 * Pada JavaScript setidaknya ada tiga cara untuk mendeklarasikan sebuah variabel, yaitu menggunakan keyword var, let, dan const. Pada versi ECMAScript 2015 (ES6) dikenalkan deklarasi variabel dengan let dan const untuk menggantikan var yang dinilai kontroversial dan rawan menimbulkan bug.
 */
let firstName;
// Kode untuk mendeklarasikan variabel seperti di atas juga dikenal dengan declaration statement.

// Selanjutnya, Anda bisa mengisi nilai variabel di atas menggunakan tanda sama dengan (=)
let lastName = "Febriant";
console.log(lastName);

/** Output
 * Febriant
 */

// Jika menginisialisasi kembali nilai variabel yang menggunakan const, kita akan mendapati eror “TypeError: Assignment to constant variable.”
const number = 200;
console.log(number); // 200
number = 50;
console.log(number); //Error : Assignment to constant variable.
