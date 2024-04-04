// * Undefined;
// Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai. Artinya, ketika kita mendeklarasikan variabel tanpa menginisialisasikan nilainya, variabel tersebut menjadi undefined. Contoh:

let data;
console.log(typeof data); // output : undefined

// Pada contoh kode di atas, kita mendeklarasikan variabel data, tetapi kita tidak menginisialisasikan dengan nilai apa pun. Ketika kita memastikan tipe data dengan menggunakan fungsi typeof(), ia akan menghasilkan output undefined.

// Fungsi typeof() digunakan untuk memastikan tipe data pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks.

//* Numbers
//Nilai dari tipe data number adalah angka. Variabel bertipe data number dituliskan seperti angka pada umumnya:
let x = 10;
console.log(typeof x); // output : number

let y = 10.5;
console.log(typeof y); // output : number

// Pada tipe data number, kita juga dapat melakukan perhitungan aritmatika seperti penjumlahan, pengurangan, perkalian, dsb. Berikut operator yang dapat kita gunakan dalam perhitungan aritmatika pada tipe data number:

/**
 *  
 * +	Penjumlahan	10 + 10 = 20
    -	Pengurangan	15 - 7 = 8
    /	Pembagian	21 / 7 = 3
    *	Perkalian	9 * 9 = 81
    %	Sisa hasil bagi	5 % 2 = 1
    **	Perpangkatan	3 ** 3 = 27
 */

let a = 12;
let b = 9;
console.log(a + b); // Output : 21
console.log(a - b); // Output : 3
console.log(a * b); // Output : 108
console.log(a / b); // Output : 1.333
console.log(a % b); // Output : 3

/**
 * Pada operator aritmatika juga terdapat operator increment (++) dan decrement (--). Operator increment dan decrement digunakan untuk menambahkan atau mengurangi nilai 1 pada nilai variabel yang ada sekarang.
 *
 * Operator ini dapat dituliskan sebelum atau sesudah variabel, tetapi hal tersebut bukan berarti sama. Berikut ketentuannya:
 */

/**
 ** Jika dituliskan setelah variabel (x++), expression akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.
 ** Jika dituliskan sebelum variabel (++x), expression akan menghasilkan nilai variabel setelah ditingkatkan nilainya.
 */

/* Increment dan Decrement */
let postfix = 5;
console.log(postfix++); // Output : 5
console.log(postfix); // Output : 6

let prefix = 5;
console.log(++prefix); // Output : 6

/**
 ** BigInt
Pada JavaScript, tipe data “Number” hanya mencakup nilai dari -(253 - 1) hingga (253 - 1). Untuk kebutuhan umum, sebenarnya nilai tersebut sudah sangat cukup. Namun, akan ada kebutuhan tertentu di mana kita membutuhkan cakupan nilai yang lebih besar, seperti untuk kriptografi atau menentukan waktu hingga presisi microsecond.

** Untuk nilai di luar Number, kita bisa menggunakan tipe BigInt. Untuk membedakan tipe BigInt dan Number, tambahkan karakter n di akhir angka. Contohnya adalah seperti kode di bawah ini. Bandingkan dengan yang bertipe Number.
 */

const bigNumber = 1234567890123456789012345678901234567890n;
const myNumber = 1234567890123456789012345678901234567890;
console.log(bigNumber); // Output : 1234567890123456789012345678901234567890n
console.log(myNumber); // Output : 1.2345678901234568e+39

/**
 * *Meskipun digunakan untuk menyimpan angka dengan nilai besar, namun BigInt tetap bisa digunakan untuk nilai yang lebih kecil.
 */

const bigIntButSamll = 7n;
/**
 * Kita juga bisa menggunakan BigInt untuk operasi aritmatika pada umumnya. Yang membedakan adalah pada operasi pembagian, hasilnya akan dibulatkan ke bawah dan tanpa mengandung nilai desimal. Contohnya adalah seperti ini:
 */
console.log(5n + 2n); // Output : 7n
console.log(5n - 2n); // Output : 3n
console.log(5n * 2n); // Output : 10n
console.log(5n / 2n); // Output : 2n; Bukan 2.5n
console.log(5n % 2n); // Output : 1n

/**
 ** Strings
 Tipe data selanjutnya adalah string yang merupakan sebuah teks. Untuk menetapkan nilai sebagai string pada variabel gunakan tanda petik satu (‘) atau petik dua (“) di antara teksnya. Contohnya
 */

let great = "Hello";
console.log(typeof great); // Output : string

/**
 * Tidak ada perbedaan antara menggunakan petik satu atau petik dua. Anda dapat menggunakan tanda petik secara bergantian, khususnya jika Anda memiliki teks yang mengandung tanda petik.
 */
const question = '"What do you think of JavaScript?" I asked';
console.log(question); /* output: "What do you think of JavaScript?" I asked */

console.log("Windows path: C:\\Program Files\\MyProject"); // Output : Windows path: C:\Program Files\MyProject

/**
 * Pada String, kita juga dapat menggunakan operator plus (+). Operator tersebut berfungsi untuk menggabungkan dua teks yang terpisah menjadi satu buah teks. Contohnya seperti ini:
 */

let good = "Hello";
let moreGreat = "Word";
console.log(good + moreGreat); // Output : HelloWord

/**
 * Ingat, string concatenation seperti di atas akan menggabungkan string apa adanya, sehingga jika Anda ingin menggabungkan dua kata atau lebih perlu menambahkan spasi sendiri.

** Selain concatenation, string pada JavaScript juga mendukung string interpolation. Sederhananya, kita bisa memasukkan variabel ke dalam sebuah string template. Contohnya adalah seperti berikut:
 */

let myName = "nendi";
console.log(`Hello, my name is ${myName}`); // Output : Hello, my name is nendi

/**
 * Perhatikan bahwa untuk mendefinisikan string template, Anda perlu menggunakan backticks (`), biasanya terletak di keyboard di bawah tombol Esc . Di dalam string letakkan variabel yang ingin dimasukkan ke dalam placeholder ${myName}.
 */

/**
 ** Boolean
Boolean hanya memiliki dua nilai, yaitu true atau false. Tipe data ini menjadi kunci utama dalam penentuan logika. Kita akan banyak menggunakannya nanti dalam materi if/else statement. Untuk menetapkan nilai boolean pada variabel, gunakan keyword true atau false seperti di bawah ini.
 */

let apple = true;
let jeruk = false;

console.log(typeof apple); // Output : boolean
console.log(typeof jeruk); // Output : boolean

/**
 * Kita juga bisa menggunakan operator komparasi seperti lebih dari (>) atau kurang dari (<). Contohnya:
 */
const nilaiMtk = 7;
const nilaiMtkStandar = 8;

let lebihBesarDari = nilaiMtk > nilaiMtkStandar;
let lebihKecilDari = nilaiMtk < nilaiMtkStandar;

console.log(lebihBesarDari); // Output : false
console.log(lebihKecilDari); // Output : true

/**
 ** Null
Tipe berikutnya adalah null. Serupa dengan undefined, namun null perlu diinisialisasikan pada variabel. Null biasa digunakan sebagai nilai sementara pada variabel, tapi sebenarnya nilai tersebut “tidak ada”.
    
Terkadang kita perlu membuat sebuah variabel, namun kita belum memerlukan nilai apa-apa dan tidak ingin terikat oleh tipe data apa pun. Nah, daripada kita tidak menetapkan nilai apa pun (variabel akan undefined) sebaiknya kita beri nilai null pada variabel tersebut dan ubah nanti ketika kita membutuhkannya.
*/

let isiDataNanti = null;
console.log(isiDataNanti); //Output : null

/**
 ** Symbol
Symbol adalah tipe data baru yang dikenalkan pada ES6. Tipe data Symbol digunakan untuk menunjukkan identifier yang unik. Ketika membuat Symbol, kita bisa memberikan deskripsi atau nama symbol seperti ini:
 */

const id = Symbol("id");
console.log(id); // Output: Symbol(id)

/**
 * Symbol disebut sebagai identifier yang unik karena meskipun kita membuat dua variabel symbol dengan nama atau deskripsi yang sama, kedua nilainya tetap dianggap berbeda. Contohnya lihat kode berikut:
 */
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2); // Output : false

/**
 * Symbol ini umumnya digunakan sebagai nama property dari Object. Object sendiri merupakan tipe data kompleks untuk menyimpan berbagai struktur data. Kita akan segera bertemu dan mempelajari tentang object pada modul Data Structure.
 */
