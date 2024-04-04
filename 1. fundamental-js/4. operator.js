/**
 ** Operator
Pada materi ini kita akan mempelajari tentang operator yang terdapat pada JavaScript. 
Operator dalam bahasa pemrograman sendiri adalah simbol yang memberi tahu interpreter untuk melakukan operasi seperti matematika, 
relasional, atau logika untuk memberikan hasil tertentu.
 */

/**
 ** Assignment Operator
Dari contoh kode yang kita gunakan sebelumnya, sebenarnya kita sudah menggunakan assignment operator. 
Operator ini digunakan untuk memberikan nilai pada variabel.

Pada dasarnya operator ini adalah tanda sama dengan (=), 
di mana tanda ini digunakan untuk menginisialisasi nilai pada variabel. 
Tempatkan variabel yang ingin diberi nilai di sebelah kiri, sementara nilainya di sebelah kanan. 
Di antara keduanya terdapat operator assignment.

** Contoh : x=y;

Expression di atas berarti kita menginisialisasikan nilai y pada variabel x, sehingga nilai x sekarang memiliki nilai yang sama dengan y.

Ada beberapa assignment operator tambahan lain dalam menginisialisasikan nilai pada variabel. 
Kita bisa menyebutnya sebagai shortcut dalam menentukan nilai. Contohnya:
*/

let x = 10;
let y = 5;

x += y;
console.log(x); // Output : 15
/**
 * Pada contoh kode di atas, terdapat expression x += y; Apa artinya? Assignment operator tersebut digunakan sebagai shortcut dari
 * x = x + y. Cara ini juga dapat digunakan pada operator aritmatika lain seperti, perkalian, pengurangan, pembagian, dan lainnya.
 */

let fist = 10;
let second = 5;
fist += second; // artinya -> fist = fist + second;
fist -= second; // artinya -> fist = fist - second;
fist *= second; // artinya -> fist = fist * second;
fist /= second; // artinya -> fist = fist / second;
fist %= second; // artinya -> fist = fist % second;

/**
 ** Comparison Operator
Sekarang kita sudah mengetahui bagaimana cara menyimpan nilai pada sebuah variabel. 
Nah, selanjutnya kita akan belajar mengenai operator komparasi sebagai logika dasar dalam membandingkan nilai pada JavaScript.

Terdapat serangkaian karakter khusus yang disebut dengan operator pembanding/komparasi yang dapat 
mengevaluasi dan membandingkan dua nilai. Berikut daftar operator dan fungsinya:
 */

/**
 **  Operator	Fungsi
        ==	    Membandingkan kedua nilai, tetapi mengabaikan tipe data.
        !=	    Membandingkan kedua nilai haruslah tidak sama, tetapi mengabaikan tipe data.
        ===	    Membandingkan kedua nilai beserta tipe data.
        !==	    Membandingkan kedua nilai beserta tipe data haruslah tidak sama.
        >	    Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
        >=	    Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
        <	    Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
        <=	    Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.
 */

let a = 10;
let b = 12;

console.log(a < b); // output : true
console.log(a > b); // output : true

/**
 * Perbedaan antara “Sama” dan “Identik”
Dalam operator komparasi di JavaScript, hal yang menjadi sedikit “tricky” 
adalah membedakan antara “sama” (==) dan “identik” (===).

Kita sudah mengetahui bahwa setiap nilai pasti memiliki tipe data baik itu number, 
string atau boolean. Contohnya sebuah string “10” dan number 10 merupakan hal yang serupa, 
tetapi keduanya tidak benar-benar sama.

** Hal inilah yang membedakan antara sama dan identik pada JavaScript. 
** Jika kita ingin membandingkan hanya dari kesamaan nilainya 
** kita bisa gunakan == tapi jika kita ingin membandingkan dengan memperhatikan 
** tipe datanya kita gunakan ===.
 */

let aString = "10";
let aNumber = 10;

console.log(aString == aNumber); // Output : true, karena nilainya sama-sama 10
console.log(aString === aNumber); // Output : false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/**
 ** Logical Operator
Terdapat beberapa operator lain yang dapat kita gunakan untuk menetapkan logika yang lebih kompleks, 
yakni dengan logical operators. Dengan logical operator, kita dapat menggunakan kombinasi 
dari dua nilai boolean atau bahkan lebih dalam menetapkan logika.

Pada JavaScript terdapat tiga buah karakter khusus yang berfungsi sebagai logical operator. 
Berikut macam-macam logical operator dan fungsinya:

**  Operator	Deskripsi
    &&	        Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).
    ||	        Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi  terpenuhi (bernilai true).
    !           Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.
 */

let nilaiA = 10;
let nilaiB = 12;

/* AND operator */
console.log(nilaiA < 15 && nilaiB > 10); // (true && true) Output : true
console.log(nilaiA > 15 && nilaiB > 10); // (false && true) Output : false

/* OR operator */
console.log(nilaiA < 15 || nilaiB > 10); // (true || true) Output : true
console.log(nilaiA > 15 || nilaiB > 10); // (false || true) Output : true

/* NOT operator */
console.log(!(nilaiA < 15)); /** !(true) Output : false */
console.log(
  !(nilaiA < 15 && nilaiB > 10)
); /** !(true && true) -> !(true) Output : false */

/**
 * Mungkin sebagian dari kita bertanya,
 * sebenarnya apa kegunaan dari nilai boolean selain hanya menampilkan nilai true dan false saja?
 * Pada pembahasan tipe data sudah pernah disebutkan bahwa boolean merupakan salah satu kunci dari logika pemrograman,
 * karena boolean dapat mengontrol bagaimana alur program kita akan berjalan.
 */
