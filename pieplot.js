// ============================================================
// GRAFIK 2: Pie Chart
// Distribusi tingkat pendidikan orang tua siswa
// Data diambil dari: Kaggle - Students Performance in Exams
// ============================================================

var PIE = document.getElementById('pieplot');

var data = [{
  labels: [
    "Some High School",      // Tidak tamat SMA
    "High School",           // Tamat SMA
    "Some College",          // Kuliah tidak selesai
    "Associate's Degree",    // D3
    "Bachelor's Degree",     // S1
    "Master's Degree"        // S2
  ],
  values: [59, 196, 226, 222, 118, 59],  // jumlah orang tua per kategori (dari 1000 siswa)
  type: 'pie',
  hole: 0.3,   // membuat tampilan donut chart (lebih modern)
  textinfo: 'label+percent',
  marker: {
    colors: ['#e74c3c','#e67e22','#f1c40f','#2ecc71','#3498db','#9b59b6']
  }
}];

var layout = {
  title: 'Distribusi Tingkat Pendidikan Orang Tua Siswa',
  font: { size: 13 }
};

var config = { responsive: true };

Plotly.newPlot(PIE, data, layout, config);
