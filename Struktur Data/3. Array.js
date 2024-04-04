/**
 *? Array
Array merupakan tipe data yang dapat mengelompokkan lebih dari satu
nilai dan menempatkannya dalam satu variabel. Contoh:
 */
let arr = ["Apple", 2.4, "coklat", 20, true];
console.log(arr); // Output : [ 'Apple', 2.4, 'coklat', 20, true ]

/**
 * Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan index.
 * Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan posisi nilai yang ingin diakses.
 */
let buah = ["Appple", "Jeruk", "Semangka"];
console.log(arr[0]); // Output : Appple
// array dimulai dari idex 0, 1, 2,

/**
 * Lalu, apa yang akan terjadi jika kita berusaha mengakses index di luar ukuran array-nya?
 * Jika kita mengakses nilai array lebih dari index-nya, maka hasilnya akan undefined.
 * Index terakhir array selalu jumlah nilai array - 1.
 */

let siswa = ["Andri", "Biul", "Cici"];
console.log(siswa[0]); // Output : Andri
console.log(siswa[1]); // Output : Biul
console.log(siswa[2]); // Output : Cici
console.log(siswa[3]); // Output : undefined
console.log(`Panjang array ${siswa.length}`); // Panjang array 3

/**
 * Sejauh ini kita baru belajar menginisialisasi dan mengakses elemen dari sebuah array. 
 * Pastinya Anda bertanya, “Bagaimana kita memanipulasi data pada array tersebut?” 

Nah, untuk menambahkan data ke dalam array, kita bisa menggunakan metode push(). 
Fungsi push ini akan menambahkan data di akhir array.
 */

const buku = ["automic habbit", "Naruot", "One Peace"];
console.log(buku);
buku.push("Android"); // Output : [ 'automic habbit', 'Naruot', 'One Peace' ]
console.log(buku); // Output : [ 'automic habbit', 'Naruot', 'One Peace', 'Android' ]

// Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop().
const program = ["Js", "Python", "Java", "PHP"];

console.log(program); // Output : [ 'Js', 'Python', 'Java', 'PHP' ]
program.pop();
console.log(program); // Output : [ 'Js', 'Python', 'Java' ]

/**
 * Metode lain yang bisa kita gunakan untuk memanipulasi data pada array adalah shift() dan unshift().
 * Metode shift() digunakan untuk mengeluarkan elemen pertama dari array,
 * sementara unshift() digunakan untuk menambahkan elemen di awal array.
 */

const hp = ["Apple", "Asus", "Siomi", "Nexian"];
console.log(hp); // Output : [ 'Apple', 'Asus', 'Siomi', 'Nexian' ]
hp.shift();
console.log(hp); // Output : [ 'Asus', 'Siomi', 'Nexian' ]
hp.unshift("Oppo");
console.log(hp); // Output : [ 'Oppo', 'Asus', 'Siomi', 'Nexian' ]

/**
 * Lalu bagaimana jika kita ingin menghapus data dari array? Sama seperti object,
 * kita bisa menggunakan keyword delete.
 */

const makanan = ["Cake", "Donat", "Martabak"];
console.log(makanan); // Output : [ 'Cake', 'Donat', 'Martabak' ]
delete makanan[0];
console.log(makanan); // Output : [ <1 empty item>, 'Donat', 'Martabak' ]

/**
 * Namun, perhatikan di sini bahwa keyword delete hanya menghapus data pada index
 * yang ditentukan lalu membiarkan posisi tersebut kosong.
 * Untuk menghapus elemen, gunakan metode splice() seperti ini:
 */
const minuman = [
  "Teh Manis",
  "Es Jeruk",
  "Kelapa Muda",
  "Juice alpukat",
  "Air Putih",
];
console.log(minuman); // Output : ['Teh Manis','Es Jeruk','Kelapa Muda','Juice alpukat','Air Putih']
minuman.splice(2, 1); // Menghapus dari index 2 sebanyak 1 elemen
console.log(minuman); // Output : [ 'Teh Manis', 'Es Jeruk', 'Juice alpukat', 'Air Putih' ]

/**
 * Selain untuk menghapus elemen pada array, splice() juga dapat digunakan untuk menambahkan elemen pada array tersebut.
 * Caranya dengan memberikan argumen ke-3 (atau selanjutnya, bersifat variadic) sebagai nilai yang akan dimasukan pada index yang diberikan pada argumen pertama
 */

const month = ["Januari", "Maret", "April"];
console.log(`Befeore spleace : ${month}`); // Befeore spleace : Januari,Maret,April
month.splice(1, 0, "Februari", "Skip"); // Menambahakan dari index index ke 0 sebanya beberapa inputan
console.log(`After spleace : ${month}`); // After spleace : Januari,Februari,Maret,April

/**
 *? Spread Operator
Masih terkait dengan array, ES6 memiliki fitur menarik untuk membantu pengelolaan array menjadi lebih mudah, yaitu spread operator.

Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable
object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...). Mari kita lihat contoh kode berikut:
 */

const montain = ["Gn Gede", "Sindoro", "Merbabu", "Sumbing"];
console.log(montain); // Output : [ 'Gn Gede', 'Sindoro', 'Merbabu', 'Sumbing' ]

/**
 * Pada kode tersebut hasil yang dicetak adalah sebuah array (ditunjukkan dengan tanda [ ]),
 * karena memang kita mencetak nilai favorites itu sendiri.
 * Nah, dengan menggunakan spread operator kita dapat menyebarkan nilai-nilai dalam array tersebut.
 */
console.log(...montain); // Output : Gn Gede Sindoro Merbabu Sumbing

/**
 * Terlihat perbedaannya? Mengapa bisa demikian? Spread operator bekerja seperti meleburkan nilai array
 *  menjadi beberapa elemen sesuai panjang nilai array-nya.
 * Sehingga jika kita menuliskan kode seperti ini:
 ** console.log(...favorites);
 Sama seperti kita menuliskan kode seperti ini:
 ** console.log(favorites[0], favorites[1], favorites[2], favorites[3]);
 */

/**
 * Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru.
 * Jika tidak menggunakan spread operator ini maka hasilnya akan seperti ini:
 */

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
const dataA = [favorites, others];
console.log(dataA);
/** Output :
    [
        [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
        [ 'Cake', 'Pie', 'Donut' ]
    ]
 */

/**
 * Nilai array tidak akan tergabung. Alih-alih menggabungkan nilainya,
 * variabel allFavorites menjadi array baru yang menampung dua array di dalamnya.
 * Nah, lantas bagaimana jika kita mencoba menggunakan spread operator?
 */

const dataC = [...favorites, ...others];
console.log(dataC); // Output : ['Seafood','Salad','Nugget','Soup','Cake','Pie','Donut']

/**
 * Yup, dengan menggunakan spread operator nilai dua array tersebut berhasil tergabung.

Selain array, spread operator juga bisa digunakan untuk object literals. 
Hal ini memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas.
 */

const mobil = { roda: 4, color: "Red", brand: "Honda" };
const mhs = { firstName: "Obito", age: 17, kelamin: "laki-laki" };
const joinObj = { ...mobil, ...mhs };
console.log(joinObj);
/**Output
    {
        roda: 4,
        color: 'Red',
        brand: 'Honda',
        firstName: 'Obito',
        age: 17,
        kelamin: 'laki-laki'
    }
 */
