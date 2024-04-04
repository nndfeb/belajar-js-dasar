/**
 *? For loop
Dari beberapa cara melakukan proses loop pada JavaScript,
“for” merupakan salah satu cara yang banyak digunakan.
Struktur dasar dari for tampak seperti berikut:

for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
  // do something
}
 */

// Contoh ke-1

for (let i = 1; i <= 5; i++) {
  console.log(`Ke-${i}`);
}
/** Output
Ke-1
Ke-2
Ke-3
Ke-4
Ke-5
 */

/**
 * Lebih ringkas, bukan? Mungkin kode tersebut sulit dipahami, 
 * jadi mari kita bahas sedikit demi sedikit. 
 * Terdapat tiga bagian utama dalam sintaks for di atas:
 ** Pertama, variabel i sebagai index iterasi. 
        Pada variabel ini kita menginisialisasi nilai awal dari perulangan.
** Kedua, operasi perbandingan. 
        Pada bagian ini, JavaScript akan melakukan pengecekan kondisi apakah perulangan masih perlu dilakukan. 
        Jika bernilai true, maka kode di dalam blok for akan dijalankan.
** Ketiga, increment/decrement. 
        Di sini kita melakukan penambahan atau pengurangan variabel iterasi. 
        Jadi, pada contoh di atas variabel i akan ditambah dengan 1 di setiap akhir perulangan. 
        Perubahan nilai ini penting karena jika kita mengubah nilainya, proses perulangan dapat terus berjalan selama kondisinya terpenuhi.
Jika diartikan, maka kode di atas bisa dimaknai dengan “Jika i kurang dari 5, maka tampilkan nilai i.”
 */

/**
 *? For of loop
 * Cara lain dalam melakukan looping adalah menggunakan for..of.
 * For of mulai hadir pada ECMAScript 2015 (ES6).
 * Cara ini jauh lebih sederhana dan modern dibanding for loop biasa.
 * Sintaks dasar dari for of loop adalah seperti ini:
 for(arrayItem of myArray) {
  // do something
}
* Yup, for of tidak membutuhkan banyak statement untuk melakukan looping pada array. 
Penjelasan tentang array akan lebih detail dibahas pada modul berikutnya. 
Sebagai permulaan, kita bisa menganggap array sebagai kumpulan nilai yang disimpan dalam satu variabel.
Dengan for..of nilai tiap array akan diinisialisasi pada variabel baru yang kita tentukan pada tiap proses looping-nya. 
Jumlah proses looping-nya pun akan menyesuaikan dengan ukuran dari array. 
Sederhananya seperti kita melakukan perintah “Hei JavaScript! Lakukan perulangan pada myArray, 
akses tiap nilainya, dan simpan pada variabel arrayItem”. 
Pada proses looping kita gunakan variabel arrayItem untuk mengakses tiap nilai dari item myArray.

Agak sulit memang menjelaskan dengan kata-kata, mari kita terjemahkan dalam kode secara langsung.
 */

let arr = ["Apple", "Jeruk", "Semangka", "Anggur"];
for (value of arr) {
  console.log(`Buah ${value}`);
}
/** Output 
Buah Apple
Buah Jeruk
Buah Semangka
Buah Anggur
 */

/**
 *? While and do-while
Metode lain untuk melakukan looping adalah dengan statement while. 
Sama seperti for, instruksi while mengevaluasi ekspresi boolean dan menjalankan kode di dalam blok while ketika bernilai true.
 */

// Untuk menampilkan angka 1 sampai 10 dengan while kita bisa menulis kode seperti berikut:

let start = 1;
while (start <= 10) {
  console.log(`ke-${start}`);
  start++;
}
/** Output
ke-1
ke-2
ke-3
ke-4
ke-5
ke-6
ke-7
ke-8
ke-9
ke-10
 */

/**
 * Bisa dilihat pada kode di atas bahwa looping dengan while tidak memiliki ketergantungan dengan variabel iterasi seperti pada for loop.
 * Karena itu, meskipun while dapat melakukan perulangan yang sama dengan for,
 * while lebih cocok digunakan pada kasus di mana kita tidak tahu pasti berapa banyak perulangan yang diperlukan.
 */

//? Bentuk lain dari while adalah perulangan do-while.

let startForm = 1;
do {
  console.log(`ke-${startForm}`);
  startForm++;
} while (startForm <= 5);

/** Output
ke-1
ke-2
ke-3
ke-4
ke-5
 */

/**
 *? Infinite loops
 Ketika menerapkan perulangan pada program, ada satu kondisi yang perlu kita hindari yaitu infinite loop. 
 Infinite loop atau endless loop adalah kondisi di mana program kita stucked di dalam perulangan. 
 Ia akan berjalan terus hingga menyebabkan crash pada aplikasi dan komputer kecuali ada intervensi secara eksternal, 
 seperti mematikan aplikasi.

** Unutk For :
 for(let i = 1; i <= 5; i=1) {
  console.log(i);
}

** Unutk While :
let i = 1;
while (i <= 5) {
  console.log(i);
}

Jawabannya adalah karena variabel i selalu bernilai 1. 
Alhasil, kondisi i <= 5 akan selalu bernilai true yang mengakibatkan aplikasi akan terus mencetak 1 ke konsol sehingga mengalami crash.
 */
