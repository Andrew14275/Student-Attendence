const ctx = document.getElementById('attendanceChart');
let timeLabels = [];
let studentData = [];

const liveChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: timeLabels,
    datasets: [{
      label: 'Students Present',
      data: studentData,
      backgroundColor: '#0dcaf0',
      borderWidth: 0,
      borderRadius: 4
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

setInterval(() => {
  const currentTime = new Date().toLocaleTimeString();
  const randomCount = Math.floor(Math.random() * 20) + 30;

  timeLabels.push(currentTime);
  studentData.push(randomCount);

  if (timeLabels.length > 8) {
    timeLabels.shift();
    studentData.shift();
  }

  liveChart.update();
}, 3000);