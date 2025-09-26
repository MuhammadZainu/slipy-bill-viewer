const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve the index.html file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Local Bill Viewer Server running at:`);
  console.log(`   http://localhost:${PORT}`);
  console.log(`   http://192.168.18.204:${PORT}`);
  console.log(`   http://0.0.0.0:${PORT}`);
  console.log(`\n📱 QR Code will work with: http://192.168.18.204:${PORT}`);
  console.log(`\n🔗 Test URL: http://192.168.18.204:${PORT}/?billId=TEST123&data=eyJ0ZXN0IjoiZGF0YSJ9`);
  console.log(`\n📁 Serving files from: ${__dirname}`);
});
