/**
 ** If/Else Statement
Setiap hari kita melakukan perhitungan dan perbandingan guna membuat keputusan, apa pun itu. 
Contohnya, apakah perlu mencuci kendaraan ketika cuaca sedang cerah? 
Apa saja transportasi online yang bisa dipesan ketika hujan untuk sampai di tempat tujuan?
Ketika mengembangkan sebuah program, 
kita akan bertemu dengan alur bercabang tergantung pada kondisi yang terjadi. 
Untuk mengakomodasi dan mengecek sebuah kondisi dalam JavaScript, kita menggunakan kata kunci if.
Statement if akan menguji suatu kondisi. 
Jika kondisi bernilai true, 
maka blok kode di dalamnya akan dijalankan. 
Sebaliknya, jika bernilai false, 
maka proses yang ditentukan akan dilewatkan

D:\Development\Learn\Dicoding\JS\belajar-js-dasar\Images\dos_30d8b7fa311ae403b1fe555b360ae52320220613105240.png
 */

// Contoh ke-1
const isRuning = true;
console.log("Apakah akan runging ?");
if (isRuning) {
  console.log("Runing!");
} else {
  console.log("Batal Runing!");
}

// Contoh ke-2
let nilaiSaya = 60;
let standarNilaiUN = 65;
if (nilaiSaya > standarNilaiUN) {
  console.log(
    `Nilai saya ${nilaiSaya} sdangan standar UN ${standarNilaiUN} jadi saya lulus`
  );
} else {
  console.log(
    `Nilai saya ${nilaiSaya} sdangan standar UN ${standarNilaiUN} jadi saya gagal`
  );
}

// Contoh ke-3
const bahasa = "Sunda";
const kalimat = "Sampurasun!";

if (bahasa == "Inggris") {
  console.log("Good Moorning!");
} else if (bahasa == "Sunda") {
  console.log("Sampurasun!");
} else if (bahasa == "Japanse") {
  console.log("Ohayu Gozaimasu!");
} else {
  console.log("Hummpppp tidak ditemukan bro!");
}

/**
 * * Ternary operator
 * Selain if statement di atas, JavaScript juga mendukung ternary operator atau conditional expressions.
 * Dengan ini, kita bisa menuliskan if-else statement hanya dalam satu baris.
 ** condition ? true expression : false expression
 **/
const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan discount sebesar ${discount * 100}%`);
// Output : Anda mendapatkan discount sebesar 10%

/**
 ** Ternary operator membutuhkan tiga operand.
 * Sebelum tanda tanya (?) berisi kondisi yang ingin kita evaluasi.
 * Kemudian diikuti dengan expression apabila nilai kondisinya benar sebelum tanda titik dua.
 * Terakhir adalah expression yang dieksekusi ketika kondisinya salah.
 * Karena merupakan conditional expression, maka operand kedua dan ketiga harus mengembalikan nilai.
 */

/**
 ** Truthy & Falsy
 * Di dalam if statement kita perlu memasukkan expression yang akan dievaluasi.
 * Umumnya, expression tersebut mengembalikan nilai boolean untuk menentukan kondisi true atau false.
 * Lalu bagaimana jika kita menuliskan expression yang tidak mengembalikan nilai boolean?
 * Jawabannya bisa.
 * Setiap nilai pada JavaScript pada dasarnya juga mewarisi sifat boolean.
 * Nilai ini dikenal dengan truthy atau falsy.
 * Nilai truthy berarti nilai yang ketika dievaluasi akan menghasilkan nilai true,
 * begitu pula falsy bernilai false.
 * Jadi manakah yang termasuk truthy dan falsy?
 * Selain nilai boolean false, tipe data atau nilai yang dianggap falsy, antara lain:
 * 1. Number 0
 * 2. BigInt 0n
 * 3. String kosong seperti “” atau ‘’
 * 4. null
 * 5. undefined
 * 6. NaN, atau Not a Number
 */

/**
 * Selain contoh di atas maka nilainya adalah truthy dan ketika dievaluasi ke dalam if statement akan bernilai true.
 * Berikut ini contohnya dalam kode:
 */

let firstName = "";

if (firstName) {
  console.log(`Hello ${firstName}`);
} else {
  console.log("name kosong");
}
// Output : name kosong
