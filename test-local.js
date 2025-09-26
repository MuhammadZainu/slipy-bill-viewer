const axios = require('axios');

async function testLocalServer() {
  try {
    console.log('🧪 Testing local bill viewer server...');
    
    // Test basic server response
    const response = await axios.get('http://192.168.18.204:3000/');
    console.log('✅ Server is running!');
    console.log('📊 Response status:', response.status);
    console.log('📄 Content type:', response.headers['content-type']);
    
    // Test with sample bill data
    const testData = {
      billId: 'TEST-123456',
      posNumber: '987205',
      paymentMode: 'Cash',
      subtotal: 100.00,
      salesTax: 0,
      discount: 0,
      posFee: 0,
      total: 100.00,
      saleDate: new Date().toISOString(),
      storeInfo: {
        storeName: 'Test Store',
        tagline: 'Quality Products',
        location: 'Test Location',
        phone: '123-456-7890',
        storeImage: null,
        socialIcons: null
      },
      items: [
        {
          productName: 'Test Product',
          salePrice: 50.00,
          saleQuantity: 2,
          gst: 0.00
        }
      ]
    };
    
    const jsonString = JSON.stringify(testData);
    const compressedData = Buffer.from(jsonString).toString('base64');
    const testUrl = `http://192.168.18.204:3000/?billId=${testData.billId}&data=${compressedData}`;
    
    console.log('\n🔗 Test URL:', testUrl);
    console.log('📱 Open this URL in your browser to test the bill viewer');
    console.log('📱 Or scan the QR code from your app to test');
    
  } catch (error) {
    console.error('❌ Error testing server:', error.message);
    console.log('💡 Make sure the server is running on port 3000');
  }
}

testLocalServer();
