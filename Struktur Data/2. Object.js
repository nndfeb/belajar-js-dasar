/**
 * Object
Kali ini kita akan berkenalan dengan tipe data object. 
Sebuah tipe data yang sangat berguna dalam pengembangan aplikasi dengan JavaScript. 
Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks.

Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal {}.
 */
const user = {};
console.log(user);

/**
 * Object berisi pasangan key dan value yang juga dikenal dengan property.
 * Key berperan mirip seperti nama variabel yang menyimpan sebuah nilai.
 * Sementara, value berisi nilai dengan tipe data apa pun termasuk objek lain.
 * Key dan value di dalam object dituliskan seperti berikut:
 */

let object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

console.log(object);

let obj2 = {
  firstName: "Nendi",
  lastName: "Febri",
  age: 25,
};

console.log(obj2);

/**
 * Tanda koma pada properti terakhir bersifat opsional.
 * Namun, jika tanda koma tersebut ditulis akan lebih memudahkan ketika kita ingin memindah, mengubah, atau menghapus properti.
 * Satu object dapat memiliki beberapa pasang key-value yang dipisahkan dengan tanda koma (,).
 */

const bio = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
};

/**
 * Dalam menuliskan objek, baris baru tidaklah penting dan tidak akan berpengaruh apa pun.
 * Sehingga lebih baik setiap kita menetapkan key-value buatlah baris baru untuk memisahkan antar nilainya.
 * Hal ini akan memudahkan kita dalam membaca dan memahami struktur data dari sebuah object.
 */

//Kemudian untuk mengakses nilai dari properti object,
// kita dapat memanggil nama object lalu tanda titik dan diikuti nama propertinya. Contoh:

const karyawan = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
};

console.log(`Hallo nama saya ${karyawan.firstName} ${karyawan.lastName}`); //Output : Hallo nama saya Luke Skywalker
console.log(`Usia saya ${karyawan.age}`); // output : Usia saya 19

/**
 * Selain dot operator, kita juga bisa mengakses properti dari object menggunakan bracket atau tanda kurung siku.
 * Untuk mengakses key yang memiliki spasi atau karakter khusus lainnya maka kita perlu menggunakan bracket seperti di atas.
 *
 * **/

const mobil = {
  merek: "Toyota",
  type: "Camry",
  color: "Red",
  maxSpeed: 1000,
};

mobil.color = "Black";
console.log(mobil);

/**
 * Tunggu dulu. Object spaceship dideklarasikan sebagai const, tetapi kenapa kita bisa mengubah nilainya?

Yang perlu diperhatikan adalah mengubah nilai berbeda dengan menginisialisasi ulang nilai. 
Ketika membuat sebuah object, kita tidak terikat dengan properti di dalamnya sehingga kita masih bisa memodifikasi nilainya. 
Berbeda jika kita menginisialisasi ulang variabel dari object.
 */

const motor = {
  brand: "Honda",
  color: "Black",
};

motor.speed = 100;
motor.color = "Red";
console.log(motor);
// jika property dengan nama key yang ditentukan tidak ditemukan, maka property baru akan ditambahkan ke object.

//Kita juga dapat menghapus property pada object menggunakan keyword delete seperti berikut:

const sepeda = {
  brand: "United",
  color: "Black",
  roda: 2,
};
sepeda.color = "Red";
delete sepeda.roda;
console.log(sepeda);
