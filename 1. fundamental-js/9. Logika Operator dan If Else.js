/**
 *TODO Kuis Coding : Logika Operator dan If Else
Untuk menguji kemampuan praktikal Anda dalam memahami materi Logika Operator dan If Else di JavaScript, silakan selesaikan kuis berikut.

Sebelum Anda mengerjakan kuis, ada beberapa hal yang perlu Anda perhatikan.

Mohon untuk membaca secara seksama perintah, kriteria, atau soal pada komentar kode yang diberi tanda TODO. 
Lakukan pengujian pada kode yang Anda tulis contohnya dengan menggunakan console.log() untuk memastikan hasil sesuai dengan yang Anda harapkan. Gunakan tombol Jalankan.
Bila sudah yakin dengan pekerjaan yang Anda lakukan, silakan submit kode dengan klik tombol Submit kode. Jika kode yang di-submit benar, Anda bisa melanjutkan ke modul berikutnya. Jika tidak, Anda bisa memperbaiki kembali kode sebanyak yang Anda mau.

Batas waktu tunggu untuk mengirimkan kembali perbaikan kode adalah 1 menit. Jadi pastikan kode yang Anda tulis sudah memenuhi perintah, kriteria, atau soal pada kuis kali ini.

Good luck!
 */

/**
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika score bernilai 90 atau lebih
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika score bernilai 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika score bernilai 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika score bernilai 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika score bernilai di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
 *
 *
 *  Note: - Mohon untuk tidak menghapus kode yang sudah ada sebelumnya.
 *        - Anda tidak perlu membuat variabel result dan score secara manual.
 *          Gunakan variabel yang sudah disediakan.
 *
 */

function scoreChecker(score) {
  let result;

  // TODO

  if (score >= 90) {
    result = "Selamat! Anda mendapatkan nilai A.";
  } else if (score >= 80 && score <= 89) {
    result = "Anda mendapatkan nilai B.";
  } else if (score >= 70 && score <= 79) {
    result = "Anda mendapatkan nilai C.";
  } else if (score >= 60 && score <= 69) {
    result = "Anda mendapatkan nilai D.";
  } else if (score < 60) {
    result = "Anda mendapatkan nilai E.";
  }
  // Jangan hapus kode ini
  return result;
}
