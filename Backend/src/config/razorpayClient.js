const Razorpay = require('razorpay');

apiKey="rzp_test_fQieH3R4IkFotT"
apiSecret="5MXKtZDFHzwZTPcwSvbVumDN"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;