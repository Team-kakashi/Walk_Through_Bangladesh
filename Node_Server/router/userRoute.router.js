const express = require("express");
const router = express.Router();
const {
  postRegister,
  postLogin,
  RegisterTourGuide,
  RegisterVehicleOwner,
  RegisterHotelManager,
  addRoom,
  getRoom,
  addService,
  getService,
  addBlog,
  getBlog
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
router.post("/signupTourGuide", RegisterTourGuide);
router.post("/signupVehicleOwner", RegisterVehicleOwner);
router.post("/signupHotelManager", RegisterHotelManager);
router.post("/addRoom", addRoom);
router.post("/getRoom", getRoom);
router.post("/addService", addService);
router.post("/getService", getService);

router.post("/addBlog",addBlog);
router.post("/getBlog", getBlog);

module.exports = router;
