/**
 * ? Destructuring Object & Array
 * Iterasi object dan array adalah dua hal yang paling banyak digunakan dalam mengelola data di JavaScript.
 * JSON (JavaScript Object Notation) merupakan format data paling populer yang digunakan dalam transaksi data saat ini.
 */
[
  {
    id: 14,
    title: "Belajar Fundamental Aplikasi Android",
    author: "Google ATP",
  },
  {
    id: 51,
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    author: "Google ATP",
  },
  {
    id: 123,
    title: "Belajar Dasar Pemrograman Web",
    author: "Dicoding Indonesia",
  },
  {
    id: 163,
    title: "Belajar Fundamental Front-End Web Development",
    author: "Dicoding Indonesia",
  },
];

/**
 * Jika kita lihat pada struktur JSON di atas, kita dapat menyimpulkan struktur tersebut dibangun dari array dan object.
 * Karena kedua hal ini banyak digunakan untuk mengelola data pada JavaScript untuk memudahkan developer,
 * ES6 menambahkan fitur untuk destructuring object dan array.
 * Apa sebenarnya destructuring object dan array itu?
 * Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil.
 * Secara tidak sadar mungkin kita pernah melakukan destructuring.
 * Namun, sebelum ES6 hal tersebut dilakukan dengan cara seperti ini:
 */
const profile = {
  firstName: "Uciha",
  lastName: "Obito",
  age: 17,
};

const firstName = profile.firstName;
const lastName = profile.lastName;
const age = profile.age;

console.log(firstName, lastName, age); // Output : Uciha Obito 17

/**
 * Perhatikan kode di atas, kode tersebut mengekstraksi nilai yang berada di dalam objek, 
 * kemudian menyimpannya pada variabel lokal dengan nama yang sama seperti properti di dalam object profile. 
 * Mungkin mengekstraksi nilai dari object dengan langkah ini terlihat mudah, 
 * tetapi bayangkan jika object memiliki banyak properti dan harus melakukan hal tersebut secara manual satu persatu. 
 * Terlalu banyak kode yang dituliskan berulang, bukan?

Itulah alasan ES6 menambahkan fitur yang memudahkan kita untuk destructuring object maupun array. 
Ketika kita ingin memecah struktur data menjadi bagian-bagian yang lebih kecil, 
kita akan dipermudah untuk mendapatkan data yang diinginkan.
 */

/**
 *? Destructuring Object
Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment.
 */

const motor = {
  brand: "Honda",
  color: "Black",
  speed: 90,
};
const { brand, color, speed } = motor;
// Note: Harus sesuai urutannya
console.log(brand, color, speed); // Output : Honda Black 90

/**
 * Pada contoh di atas tanda kurung kurawal merepresentasikan object yang akan didestrukturisasi.
 *  Di dalamnya terdapat brand, color, dan speed yang merupakan variabel untuk menyimpan nilai properti dari object motor. 
 * Kita juga perlu perhatikan penamaan variabelnya. Pastikan penamaannya sama seperti properti object-nya. 
 * Melalui nama variabel inilah nilai-nilai properti object akan dimasukkan secara otomatis.
 *  Sehingga variabel brand akan berisikan nilai motor.brand, color akan berisikan nilai motor.color, begitu juga dengan variabel speed akan berisikan nilai motor.speed.

Dalam destructuring object, kita bisa menentukan salah satu nilai yang ingin kita desktrukturisasikan. 
Sehingga kita tidak perlu membuat variabel sebanyak properti yang dimiliki objeknya, contohnya:
** const { lastName } = profile; 
*/

/**
 *? Destructuring Assignment
Pada contoh sebelumnya, kita telah melakukan destructuring object pada deklarasi variabel. 
Namun, pada kasus tertentu mungkin kita perlu melakukannya pada variabel yang sudah dideklarasikan.
 */

const books = {
  title: "Naruto",
  cerated: "Mashasi sikimto",
  chapter: 101,
};
let title = "One Peace";
let chapter = 188;
// menginisialisasi nilai baru melalui destructuring object
({ title, chapter } = books);
console.log(title); // Output : Naruto
console.log(chapter); // Output : 101

/**
 * Saat melakukan destructuring assignment, kita perlu menuliskan destructuring object di dalam tanda kurung.
 * Jika tidak menuliskan tanda kurung, tanda kurung kurawal akan membuat JavaScript mengira kita membuat block statement,
 * sementara block statement tidak bisa berada pada sisi kiri assignment.
 *
 *! tidak bisa karena JavaScript mengira kita membuat block statement
 *! block statement tidak bisa berada pada sisi kiri assignment
 *! { title, chapter } = books;

 Nah, inilah fungsinya tanda kurung. 
 Ia akan memberi tahu JavaScript bahwa tanda kurawal di dalamnya bukan sebuah block statement melainkan sebuah expression, sehingga assignment dapat dilakukan.
 */
