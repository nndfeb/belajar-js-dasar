/**
 ** Switch Case Statement
 * Sebelumnya kita telah mempelajari bagaimana percabangan logika menggunakan if statement.
 * Selain if, JavaScript juga mendukung switch statement untuk melakukan pengecekan banyak kondisi dengan lebih mudah dan ringkas.
 */

switch (expression) {
  case value1:
    // do something
    break;
  case value2:
    // do something
    break;
  default:
  // do something else
}

/**
 * Tanda kurung setelah keyword switch berisi variabel atau expression yang akan dievaluasi.
 * Kemudian untuk setiap kondisi yang mungkin terjadi,
 * kita masukkan keyword case diikuti dengan nilai yang valid.
 * Jika kondisi pada case sama dengan variabel pada switch,
 * maka blok kode setelah titik dua (:) akan dijalankan.
 * Keyword break digunakan untuk keluar dari proses switch.
 * Terdapat satu case bernama default yang memiliki fungsi yang sama dengan keyword else pada control flow if-else.
 * Jika tidak ada nilai yang sama dengan variabel pada switch, maka blok kode ini akan dijalankan.
 */

// Contoh ke-1
let bahasa = "Sunda";
let salam = "";
switch (bahasa) {
  case "English":
    salam = "Good Moring!";
    break;
  case "Sunda":
    salam = "Sampurasun!";
    break;
  case "Japasne":
    salam = "Ohayu Gozaimasu!";
    break;
  default:
    salam = "Tidak ditmukan bahasa!";
}
console.log(salam); // Output : Sampurasun!
