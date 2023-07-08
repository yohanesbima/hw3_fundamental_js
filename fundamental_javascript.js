// Menentukan kondisi air berdasarkan suhu
function cekKondisiAir(suhu) {
    if (suhu >= -100 && suhu <= 0) {
    return "Beku";
    } else if (suhu >= 1 && suhu <= 100) {
    return "Cair";
    } else if (suhu >= 101 && suhu <= 500) {
    return "Uap";
    } else {
    return "Tidak Terdefinisi";
    }
    }
   
    // Menentukan jenis BBM di SPBU berdasarkan plat kendaraan dan CC mobil
    function cekJenisBBM(plat, cc) {
    if (plat === "kuning" || plat === "motor") {
    return "BBM Subsidi";
    } else if (cc < 1500) {
    return "PERTAMAX";
    } else {
    return "PERTAMAX Turbo";
    }
    }
   
    // Contoh penggunaan
    var suhuAir = -50;
    var kondisiAir = cekKondisiAir(suhuAir);
    console.log("Kondisi Air:", kondisiAir);
   
    var platKendaraan = "kuning";
    var ccMobil = 1500;
    var jenisBBM = cekJenisBBM(platKendaraan, ccMobil);
    console.log("Jenis BBM di SPBU:", jenisBBM);