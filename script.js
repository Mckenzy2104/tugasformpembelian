function hitungTotal() {
    let nama = document.getElementById("nama");
    let produk = document.getElementById("produk");
    let harga = document.getElementById("harga");
    let jumlah = document.getElementById("jumlah");

    let errorNama = document.getElementById("errorNama");
    let errorProduk = document.getElementById("errorProduk");
    let errorHarga = document.getElementById("errorHarga");
    let errorJumlah = document.getElementById("errorJumlah");

    // RESET ERROR
    errorNama.innerText = "";
    errorProduk.innerText = "";
    errorHarga.innerText = "";
    errorJumlah.innerText = "";

    // RESET BORDER
    nama.classList.remove("input-error");
    produk.classList.remove("input-error");
    harga.classList.remove("input-error");
    jumlah.classList.remove("input-error");

    let valid = true;

    // VALIDASI NAMA
    if (nama.value.trim() === "") {
        errorNama.innerText = "Nama pelanggan wajib diisi!";
        nama.classList.add("input-error");
        valid = false;
    }

    // VALIDASI PRODUK
    if (produk.value.trim() === "") {
        errorProduk.innerText = "Nama produk wajib diisi!";
        produk.classList.add("input-error");
        valid = false;
    }

    // VALIDASI HARGA
    if (harga.value <= 0 || harga.value === "") {
        errorHarga.innerText = "Harga tidak valid!";
        harga.classList.add("input-error");
        valid = false;
    }

    // VALIDASI JUMLAH
    if (jumlah.value <= 0 || jumlah.value === "") {
        errorJumlah.innerText = "Jumlah tidak valid!";
        jumlah.classList.add("input-error");
        valid = false;
    }

    if (!valid) return;

    // HITUNG TOTAL
    let total = Number(harga.value) * Number(jumlah.value);

    document.getElementById("total").innerText =
        "Rp " + total.toLocaleString("id-ID");
}
function resetForm() {
    // reset input
    document.getElementById("nama").value = "";
    document.getElementById("produk").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("jumlah").value = "";

    // reset hasil
    document.getElementById("total").innerText = "Rp 0";

    // reset error text
    document.getElementById("errorNama").innerText = "";
    document.getElementById("errorProduk").innerText = "";
    document.getElementById("errorHarga").innerText = "";
    document.getElementById("errorJumlah").innerText = "";

    // reset border merah
    document.getElementById("nama").classList.remove("input-error");
    document.getElementById("produk").classList.remove("input-error");
    document.getElementById("harga").classList.remove("input-error");
    document.getElementById("jumlah").classList.remove("input-error");
}
function toggleDark() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
}

window.onload = function () {
    if (localStorage.getItem("mode") === "dark") {
        document.body.classList.add("dark");
    }
};