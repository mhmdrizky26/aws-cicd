let pasien = JSON.parse(localStorage.getItem("pasien")) || [];

function tampilkanData() {
    let tabel = document.getElementById("tabelPasien");
    tabel.innerHTML = "";

    pasien.forEach((p, index) => {
        tabel.innerHTML += `
        <tr>
            <td>${p.nama}</td>
            <td>${p.umur}</td>
            <td>${p.diagnosa}</td>
            <td>
                <button onclick="editData(${index})">Edit</button>
                <button onclick="hapusData(${index})">Hapus</button>
            </td>
        </tr>`;
    });

    localStorage.setItem("pasien", JSON.stringify(pasien));
}

document.getElementById("formPasien").addEventListener("submit", function(e){
    e.preventDefault();

    let index = document.getElementById("index").value;
    let nama = document.getElementById("nama").value;
    let umur = document.getElementById("umur").value;
    let diagnosa = document.getElementById("diagnosa").value;

    let data = {nama, umur, diagnosa};

    if(index === ""){
        pasien.push(data);
    }else{
        pasien[index] = data;
    }

    this.reset();
    tampilkanData();
});

function editData(index){
    document.getElementById("index").value = index;
    document.getElementById("nama").value = pasien[index].nama;
    document.getElementById("umur").value = pasien[index].umur;
    document.getElementById("diagnosa").value = pasien[index].diagnosa;
}

function hapusData(index){
    pasien.splice(index,1);
    tampilkanData();
}

tampilkanData();