const express = require("express");
const bodyPerser = require("body-parser");

const userRouter = require("./router/userRoute.router");
// let {
//   user,
//   userCreation,
//   getVerificationCode,
//   setVerificationCode,
// } = require("./model/userModel.model");

const app = express();
const PORT = 3000;

app.use(bodyPerser.json());
app.use(userRouter);
//app.get("https://script.google.com/macros/s/AKfycbxOLElujQcy1-ZUer1KgEvK16gkTLUqYftApjNCM_IRTL3HSuDk/exec?id=1wyWse6RwXHx8L8xB4yfC_HcVADCtEivhIlx7l30kX5k&sheet=Sheet1", getSheetData);
app.listen(PORT, () => {
  console.log(`server is running on :${PORT}`);
});
