// Inisialisasi peta
const map = L.map('map').setView([-6.903, 107.6510], 13);

// Basemap OSM
const basemapOSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Basemap Google Maps
const baseMapGoogle = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  attribution: 'Map by <a href="https://maps.google.com/">Google</a>',
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

// Basemap Google Satellite
const baseMapSatellite = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  attribution: 'Satellite by <a href="https://maps.google.com/">Google</a>',
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

// Tambahkan salah satu basemap secara default
basemapOSM.addTo(map);

// Daftar semua pilihan basemap
const baseMaps = {
  "OpenStreetMap": basemapOSM,
  "Google Maps": baseMapGoogle,
  "Google Satellite": baseMapSatellite
};

// Tambahkan layer control ke peta
L.control.layers(baseMaps).addTo(map);




// Tambahkan control layer ke peta


// Tombol "Home"
const homeControl = L.control({ position: 'topleft' });
homeControl.onAdd = function(map) {
  const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
  div.innerHTML = '🏠';
  div.style.backgroundColor = 'white';
  div.style.width = '30px';
  div.style.height = '30px';
  div.style.lineHeight = '30px';
  div.style.textAlign = 'center';
  div.style.cursor = 'pointer';
  div.title = 'Kembali ke Home';
  div.onclick = function() {
    map.setView([-6.9021856, 107.6187558], 13);
  };
  return div;
};
homeControl.addTo(map);

// Data florist lengkap
const floristData = [
  {
    nama: "Toko Karangan Bunga Papan Bandung - Intan Florist",
    lat: -6.91561549999999,
    lng: 107.6453577,
    rating: 4.8,
    alamat: "No.156, RT.03/RW.11 Jalan Soma I",
    jamBuka: "Closes 9.00 pm"
  },
  {
    nama: "Toko Bunga Papan | Kyraflorist",
    lat: -6.92506381046698,
    lng: 107.64910306984,
    rating: 5.0,
    alamat: "No.218 Jalan Babakan Sari III",
    jamBuka: "-"
  },
  {
    nama: "Tiara Florist",
    lat: -6.9047161,
    lng: 107.6074058,
    rating: 4.3,
    alamat: "Cipaganti Coblong, Jl. Wastukencana",
    jamBuka: "Closes 10.00 pm"
  },
  {
    nama: "florist choice Bandung l buket wisuda | buket bunga",
    lat: -6.90109229999999,
    lng: 107.5643257,
    rating: 4.9,
    alamat: "·",
    jamBuka: "Opens 9.00 am Mon"
  },
  {
    nama: "SERA Florist Bandung",
    lat: -6.88138359999999,
    lng: 107.6279621,
    rating: 5.0,
    alamat: "Gg. Cigadung Pesantren Timur II No.2",
    jamBuka: "Closes 8.00 pm"
  },
  {
    nama: "Bloom Bouquet and Flower",
    lat: -6.9163986,
    lng: 107.6018688,
    rating: 4.6,
    alamat: "Jl. Kebon Jati No.11",
    jamBuka: "Opens 10.00 am Mon"
  },
  {
    nama: "Amora Craft House & Flowers Arrangement",
    lat: -6.88072096656628,
    lng: 107.582278570283,
    rating: 5.0,
    alamat: "Setrasari Mall, Jl. Setraria B1-1",
    jamBuka: "Closes 10.00 pm"
  },
  {
    nama: "Florash Bandung - Florist",
    lat: -6.9174639,
    lng: 107.6191228,
    rating: 4.9,
    alamat: "Jl. Manglit No.31",
    jamBuka: "Opens 9.00 am Mon"
  },
  {
    nama: "TCC Florist",
    lat: -6.8707498,
    lng: 107.5704705,
    rating: 4.8,
    alamat: "Kompleks, Jl. Setra Duta Hegar i3 No.6",
    jamBuka: "Opens 8.00 am Mon"
  },
  {
    nama: "Jdarr Florist Gegerkalong",
    lat: -6.86318739999999,
    lng: 107.5898292,
    rating: 5.0,
    alamat: "Gg. Darmawinata No.42B",
    jamBuka: "Opens 8.00 am Mon"
  },
  {
    nama: "Toko Bunga di Bandung - Zahida Florist",
    lat: -6.9046733,
    lng: 107.6072285,
    rating: 4.6,
    alamat: "Ps. Bunga Wastukencana, Jl. Wastukencana No.7 Blok. A",
    jamBuka: "-"
  },
  {
    nama: "MATABELO Bandung Florist, Gift & Hampers",
    lat: -6.89881349999999,
    lng: 107.6087699,
    rating: 4.9,
    alamat: "Balubur Town Square (BALTOS) Lt.D2 Blok D21 & D22, Jl. Tamansari",
    jamBuka: "Closes 8.00 pm"
  },
  {
    nama: "MILENIAL FLORIST",
    lat: -6.86734664196679,
    lng: 107.57885291451,
    rating: 5.0,
    alamat: "Jl. Gegerkalong Hilir",
    jamBuka: "Opens 8.00 am Mon"
  },
  {
    nama: "Gracia Florist",
    lat: -6.90690246856503,
    lng: 107.59214843755,
    rating: 4.2,
    alamat: "Jl. Pajajaran No.92 A",
    jamBuka: "Opens 8.30 am Mon"
  },
  {
    nama: "Suvenir Buket Bunga Bandung (Bouquet Nasha Indonesia)",
    lat: -6.8948632,
    lng: 107.6307793,
    rating: 5.0,
    alamat: "Jl. Batik Pekalongan No.34",
    jamBuka: "Opens 9.00 am Mon"
  },
  {
    nama: "Toko bunga bandung | Rafani Florist",
    lat: -6.92838619999999,
    lng: 107.6333541,
    rating: 4.9,
    alamat: "Jl. Salak No.2 Kavaleri",
    jamBuka: "-"
  },
  {
    nama: "Toko Bunga Bogaseni Florist",
    lat: -6.89689288817269,
    lng: 107.570052073634,
    rating: 5.0,
    alamat: "4H3C+62V, Jl. Terusan Megasari",
    jamBuka: "Closes 8.00 pm"
  },
  {
    nama: "Bleum.flowers_bandung",
    lat: -6.8914162,
    lng: 107.6174365,
    rating: 4.5,
    alamat: "Jl. Dipati Ukur No.58",
    jamBuka: "Closes 9.00 pm"
  },
  {
    nama: "Little Puff Flowers",
    lat: -6.95553,
    lng: 107.6070749,
    rating: 5.0,
    alamat: "Ruko, Jl. Taman Mekar Agung No.16-17",
    jamBuka: "Closes 3.00 pm"
  },
  {
    nama: "Toko Bunga Bandung: AsmaraKu Florist",
    lat: -6.9174639,
    lng: 107.6191228,
    rating: 5.0,
    alamat: "4H4F+RXR, Jl. Sukaraja II",
    jamBuka: "-"
  },
  {
    nama: "Karangan Bunga Bandung Amaryllis",
    lat: -6.9048967,
    lng: 107.6074917,
    rating: 4.8,
    alamat: "·",
    jamBuka: "Closes 9.00 pm"
  },
  {
    nama: "Elnara Florist",
    lat: -6.87391599999999,
    lng: 107.580723,
    rating: 5.0,
    alamat: "Gg. 1 No.1",
    jamBuka: "Opens 8.00 am Mon"
  },
  {
    nama: "Toko Karangan Bunga Papan Bandung - Intan Florist",
    lat: -6.91561549999999,
    lng: 107.6453577,
    rating: 4.8,
    alamat: "No.156, RT.03/RW.11 Jalan Soma I",
    jamBuka: "Closes 9.00 pm"
  },
  {
    nama: "Toko Bunga Papan | Kyraflorist",
    lat: -6.92506177358629,
    lng: 107.64910299019,
    rating: 5.0,
    alamat: "No.218 Jalan Babakan Sari III",
    jamBuka: "-"
  },
  {
    nama: "Ujang Toko florist",
    lat: -6.8537137,
    lng: 107.5659651,
    rating: 4.5,
    alamat: "-",
    jamBuka: "-"
  },
  {
    nama: "Kirim Bunga Bandung - Florist Bandung",
    lat: -6.8894823,
    lng: 107.586523,
    rating: 5.0,
    alamat: "Jl. Sukamulya ujung No.63",
    jamBuka: "-"
  },
  {
    nama: "Toko Bunga Bandung - Monalisa florist (Karangan Bunga Papan)",
    lat: -6.90209539999999,
    lng: 107.5905812,
    rating: 4.9,
    alamat: "jl.Otto iskandardinata los 17 parkir barat lap.tegalega",
    jamBuka: "Closes 7.00 pm"
  },
  {
    nama: "Ilmisgarden",
    lat: -6.86671032453416,
    lng: 107.6250226944,
    rating: 5.0,
    alamat: "Jl. Raya Golf Dago No.4",
    jamBuka: "Closes 8.00 pm"
  },
  {
    nama: "Toko bunga bandung _Arsyla florist",
    lat: -6.8149455,
    lng: 107.5865203,
    rating: 5.0,
    alamat: "Jl. Terusan Megasari No.18",
    jamBuka: "-"
  },
  {
    nama: "Herasri",
    lat: -6.88054441661097,
    lng: 107.582723700101,
    rating: 4.8,
    alamat: "·",
    jamBuka: "Opens 9.00 am Mon"
  },
  {
    nama: "Toko bunga papan bandung - namiflorist",
    lat: -6.93668299999999,
    lng: 107.6034765,
    rating: 5.0,
    alamat: "·",
    jamBuka: "-"
  },
  {
    nama: "Toko Bunga Florist Gavin",
    lat: -6.90150321914089,
    lng: 107.607328281886,
    rating: 4.9,
    alamat: "3JX4+9WP, Gg. H. Unen Sumantri",
    jamBuka: "-"
  },
  {
    nama: "Mahda Florist",
    lat: -6.948270435719762,
    lng: 107.62154577388323,
    rating: 5.0,
    alamat: "Jl. Pasirluyu Selatan No.17 19",
    jamBuka: "-"
  },
  {
    nama: "Khalisa Florist",
    lat: -6.8991504,
    lng: 107.6341915,
    rating: 4.9,
    alamat: "Jl. Cisintok Kadumulya No.149",
    jamBuka: "-"
  },
  {
    nama: "Toko Bunga Bandung Sinar Jelita Florist",
    lat: -6.9243422,
    lng: 107.5909596,
    rating: 5.0,
    alamat: "·",
    jamBuka: "Closes 11.00 pm"
  },
  {
    nama: "Besty florist (Toko Bunga) | Buket Bunga | Buket Wisuda | Buket uang | Bunga Papan | Parcel Hampers lebaran bandung",
    lat: -6.9524338,
    lng: 107.6603792,
    rating: 4.9,
    alamat: "Jln. uranus tengah IV blok BIII no. 74, RT.04/RW06",
    jamBuka: "Closes 5.00 pm"
  },
  {
    nama: "Toko Bunga Bandung - Alfarizky Florist",
    lat: -6.90209539999999,
    lng: 107.5905812,
    rating: 4.9,
    alamat: "Jl. Randusari 6",
    jamBuka: "-"
  },
  {
    nama: "Balqies Florist",
    lat: -6.8698559,
    lng: 107.5685521,
    rating: 5.0,
    alamat: "Jl. Sariwangi Selatan No.25",
    jamBuka: "Opens 12.00 am Mon"
  },
  {
    nama: "Toko Bunga Bandung Melcia Florist",
    lat: -6.92503589999999,
    lng: 107.6491254,
    rating: 4.9,
    alamat: "Jl. Babakan Sari III No.218, RT.05/RW.09",
    jamBuka: "-"
  },
  {
    nama: "khanza florist",
    lat: -6.85998786872113,
    lng: 107.586477556679,
    rating: 5.0,
    alamat: "4HRP+2H5, Jl. Geger Arum",
    jamBuka: "-"
  },
  {
    nama: "Toko Bunga Bandung - Alam Senja Florist Antapani",
    lat: -6.91352449999999,
    lng: 107.6594029,
    rating: 5.0,
    alamat: "Jl. Cicalengka 12 No.31",
    jamBuka: "-"
  },
  {
    nama: "Mariposa Bouquet & Gift",
    lat: -6.9005327894095325,
    lng: 107.64587051144731,
    rating: 4.6,
    alamat: "Jl. Khp Hasan Mustopa No.99",
    jamBuka: "Opens 8.00 am Mon"
  },
  {
    nama: "Toko Bunga Priangan",
    lat: -6.904765289413113,
    lng: 107.60735889365199,
    rating: 4.6,
    alamat: "Ps. Bunga Wastukencana, Jl. Wastukencana No.34 Blok B6",
    jamBuka: "Closes 9.00 pm"
  },
];

// Icon bucket bunga 🌹 pakai emoji (divIcon)
const flowerIcon = L.divIcon({
  html: '🌹',
  className: '', // Hilangkan class default agar tidak ada styling tambahan
  iconSize: [45, 45],
  iconAnchor: [5, 30],
  popupAnchor: [0, -30]
});


// Tambahkan marker florist ke peta
floristData.forEach(florist => {
  const popupContent = `
    <strong>🌹 ${florist.nama}</strong><br>
    ⭐ <b>Rating:</b> ${florist.rating}<br>
    🕒 <b>Jam Buka:</b> ${florist.jamBuka}<br>
    📍 <b>Alamat:</b> ${florist.alamat}
  `;

  L.marker([florist.lat, florist.lng], { icon: flowerIcon })
    .addTo(map)
    .bindPopup(popupContent);
});

// Tombol lokasi dan kontrol tambahan
L.control.locate().addTo(map);
//Fitur "Full Screen"
map.addControl(new L.Control.Fullscreen());
L.easyButton('fa-home', function () {
  map.setView([-6.9147, 107.6098], 12);
}).addTo(map);

// Legenda Florist (🌹)
const legendFlorist = L.control({ position: 'bottomright' });

legendFlorist.onAdd = function (map) {
  const div = L.DomUtil.create('div', 'info legend');
  div.innerHTML = `
    <h4>Legenda 🌹</h4>
    <i style="
      background-image: url('https://pngtree.com/freepng/give-bucket-flowers_6579340.html');
      background-size: cover;
      width: 24px;
      height: 24px;
      display: inline-block;
      margin-right: 6px;
    "></i> Lokasi Florist
  `;
  div.style.backgroundColor = 'white';
  div.style.padding = '8px';
  div.style.boxShadow = '0 0 5px rgba(0,0,0,0.3)';
  div.style.borderRadius = '8px';
  return div;
};

legendFlorist.addTo(map);

