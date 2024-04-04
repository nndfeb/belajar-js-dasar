/**
 *? Destructuring Array
Destructuring array serupa dengan destructuring object. 
Object menggunakan tanda kurung kurawal { } sedangkan array menggunakan tanda kurung siku [ ]. 
Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi daripada penamaan propertinya. 
Berikut contoh dari destructuring array pada ES6:
 */

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood); // Output: Seafood
console.log(secondFood); // Output: Salad
console.log(thirdFood); // Output: Nugget
console.log(fourthFood); // Output: Soup

/**
 * Kode di atas merupakan contoh proses destructuring array.
 * Di dalam array favorites terdapat 4 (empat) nilai string yang masing-masing nilainya dimasukkan ke variabel lokal firstFood, secondFood, thirdFood, dan fourthFood.
 * Nilai dari array yang dimasukkan ke variabel lokal dipilih berdasarkan posisi di mana ia dideklarasikan pada array.
 ** const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 * Sebenarnya kita bebas untuk menentukan nama dari variabel lokal.
 * Yang terpenting adalah urutan ketika deklarasi variabelnya saja.
 */

/**
 * Kita juga bisa memilih nilai pada index tertentu untuk destrukturisasi pada array.
 * Contohnya, jika ingin mengambil nilai ketiga dari array, kita tidak perlu menyiapkan variabel lokal untuk menampung nilai array pertama, kedua, atau pun keempat.
 * Kita bisa melakukannya dengan membiarkan index array yang tidak kita inginkan tetap kosong (tanpa menulis variabel lokal).
 * Lebih lanjut, tanda koma (,) tetap diperlukan untuk menunjukkan posisi index-nya seperti ini:
 */

const hp = ["Oppo", "Apple", "Siomi", "Nokia"];
console.log(hp); // Output : [ 'Oppo', 'Apple', 'Siomi', 'Nokia' ]
const [, , ke3] = hp;
console.log(ke3); // Output : Siomi

/**
 *? Destructuring Assignment
Kita juga bisa melakukan destructuring assignment pada array. 
Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung. 
Contohnya seperti berikut:
 */

const books = ["Naruto", "One Peace", "Pokemon"];

let bukuSaya = "Atomic Habit";
let bukuPinjam = "Buku Programming";

[bukuSaya, bukuPinjam] = books;
console.log(bukuSaya); // Output : Naruto
console.log(bukuPinjam); // Output : One Peace

/**
 * Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variabel.
 * Sebelum ES6, untuk melakukan hal ini kita menggunakan cara manual menggunakan algoritma seperti ini:
 */
