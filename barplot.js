// ============================================================
// GRAFIK 1: Bar Chart
// Rata-rata nilai Math, Reading, Writing berdasarkan Gender
// Data diambil dari: Kaggle - Students Performance in Exams
// ============================================================

var BAR = document.getElementById('barplot');

// Data rata-rata nilai (dihitung dari dataset Kaggle)
// Laki-laki: Math=65, Reading=65, Writing=63
// Perempuan: Math=64, Reading=72, Writing=72

var dataCowok = {
  x: ['Math Score', 'Reading Score', 'Writing Score'],  // sumbu X: mata pelajaran
  y: [65, 65, 63],                                       // sumbu Y: rata-rata nilai
  name: 'Laki-laki',
  type: 'bar',
  marker: { color: '#3498db' }  // warna biru untuk laki-laki
};

var dataCewek = {
  x: ['Math Score', 'Reading Score', 'Writing Score'],
  y: [64, 72, 72],
  name: 'Perempuan',
  type: 'bar',
  marker: { color: '#e74c3c' }  // warna merah untuk perempuan
};

var data = [dataCowok, dataCewek];

var layout = {
  title: 'Rata-rata Nilai Siswa Berdasarkan Gender',
  barmode: 'group',   // tampilkan batang berdampingan
  xaxis: { title: 'Mata Pelajaran' },
  yaxis: { title: 'Rata-rata Nilai', range: [0, 100] },
  font: { size: 13 },
  legend: { title: { text: 'Gender' } }
};

var config = { responsive: true };

Plotly.newPlot(BAR, data, layout, config);
