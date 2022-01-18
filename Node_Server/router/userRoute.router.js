const express = require("express");
const router = express.Router();
const {
     postRegister,
  postLogin,
  //   isVerified,
  //   postHelpRequest,
  //   getHelpRequestList,
  //   getHelpRequesterList,
  //   getHelpRequesterProfile,
  //   postCoronaResult,
  //   getCoronaResult,
  //   postMedicalRepresentativeLogin,
  //   postGoogleSheet,
  //   getQrCodePoor,
  //   isValidQrCode,
  //   isAskHelp,
  //   getProfile,
  //   updateProfile,
  //   updateHelpRequest,
  //sheetUrl,
  //   getSheetData,
} = require("../controller/userController");
router.get("/", (req, res) => {
  res.send("This is woring");
});
router.post("/login", postLogin);
 router.post("/signup", postRegister);

module.exports = router;
