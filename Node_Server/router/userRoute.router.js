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
  getBlog,
  addVehicle,
  addVehicleRoute,
  getVehicle,
  getAreaRoute,
  getHotelForTraveller,
  getVehicleForTraveller,
  getGuideForTraveller,
  getRouteForTraveller,
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
router.post("/addVehicle", addVehicle);
router.post("/addVehicleRoute", addVehicleRoute);
router.post("/getVehicle", getVehicle);
router.post("/getAreaRoute", getAreaRoute);
router.post("/getHotelForTraveller", getHotelForTraveller);
router.post("/getVehicleForTraveller", getVehicleForTraveller);
router.post("/getGuideForTraveller", getGuideForTraveller);
router.post("/getRouteForTraveller", getRouteForTraveller);




module.exports = router;
