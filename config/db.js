const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://shopapp:shopapp@cluster0.qeku4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

module.exports = mongoose;
