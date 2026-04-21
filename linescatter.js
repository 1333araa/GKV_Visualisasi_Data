// ============================================================
// GRAFIK 3: Scatter Plot
// Korelasi antara nilai Reading dan Writing siswa
// Data diambil dari: Kaggle - Students Performance in Exams
// ============================================================

var LINESCATTER = document.getElementById('linescatter');

// Sampel 30 data dari dataset Kaggle untuk scatter plot
var readingScores = [
  72, 90, 95, 57, 78, 83, 95, 43, 64, 60,
  54, 52, 81, 88, 66, 82, 69, 90, 78, 55,
  66, 77, 49, 93, 69, 74, 59, 47, 70, 83
];

var writingScores = [
  74, 88, 93, 44, 75, 78, 97, 43, 67, 50,
  52, 43, 78, 86, 65, 86, 72, 88, 80, 46,
  65, 77, 42, 91, 73, 74, 52, 41, 73, 82
];

var data = [{
  x: readingScores,
  y: writingScores,
  mode: 'markers',       // tampilkan sebagai titik-titik
  type: 'scatter',
  marker: {
    color: '#8e44ad',    // warna ungu
    size: 10,
    opacity: 0.7
  },
  name: 'Siswa'
}];

var layout = {
  title: 'Korelasi Nilai Reading vs Writing Siswa',
  xaxis: {
    title: 'Reading Score',
    range: [0, 100]
  },
  yaxis: {
    title: 'Writing Score',
    range: [0, 100]
  },
  font: { size: 13 }
};

var config = { responsive: true };

Plotly.newPlot(LINESCATTER, data, layout, config);
