require("dotenv").config();
const random = require("random");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt-nodejs");
// CLIENT_ID = process.env.CLIENT_ID;
// CLIENT_SECRET = process.env.CLIENT_SECRET;
// REDIRECT_URI = process.env.REDIRECT_URI;
// REFRESH_TOKEN = process.env.REFRESH_TOKEN;
// let {
//   user,
//   userCreation,
//   getVerificationCode,
//   setVerificationCode,
// } = require("../model/userModel.model");
const knex = require("knex");
// const { loadavg } = require("os");
const { use } = require("../router/userRoute.router");
const postgres = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "tahmid",
    database: "Walk_Through_Bd",
  },
});
let verificationCode = random.int((min = 1111111), (max = 9999999));
console.log(verificationCode);

// const oAuth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// async function sendMail(emailAddress, verficationCode) {
//   try {
//     vfCode = verficationCode.toString();
//     console.log(verficationCode);
//     const accessToken = await oAuth2Client.getAccessToken();
//     const transport = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: "timambinsaif462@gmail.com",
//         clientId: CLIENT_ID,
//         clientSecret: CLIENT_SECRET,
//         refreshToken: REFRESH_TOKEN,
//         accessToken: accessToken,
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

//     const mailOptions = {
//       from: "AGAINST PANDEMIC<timambinsaif462@gmail.com>",
//       to: emailAddress,
//       subject: "Verification Code",
//       text: vfCode,
//       html:
//         " <b>Hi!<br> <p> You are registering in Against Pandemic app.<h4>Your verification code<b> is :</h4><h1><t>" +
//         vfCode +
//         "</h1> <t><br><p>Againstg Pandemic</p><br><p>This is an automated email. Please do not reply to this email</p></b.",
//     };
//     const result = await transport.sendMail(mailOptions);
//     return result;
//   } catch (error) {
//     return error;
//   }
// }

const postRegister = (req, res) => {
  console.log("dhukse")
  let {
    name,
    email,
    password,
    contactNo,
    userType,
  } = req.body;
  //console.log(name,email,password,contactNo,userType)
  let hash = bcrypt.hashSync(password);
  //  res.status(200).send("Success");
  // console.log(nid, name, hash, verificationCode);

  postgres
    .select("*")
    .from("users")
    .where("email", "=", email)
    .then((data) => {
      
      if (data[0] == undefined) {
        postgres
        .insert({
             name: name,
             email: email,
             contact_info: contactNo,
             area:null,
             user_type:userType,
             
                })
        .into("users")
        .returning("id")
        .then((userid)=>{
         console.log(userid[0]);
            postgres
            .insert({
              user_id:userid[0],
              email:email,
              password:hash,
              verified:0,
              verificationcode: verificationCode,
                 })
         .into("login")
         .then(()=>{
           res.status(200).json("Successful")
         })
         .catch((err)=>{
           console.log(err)
           res.status(400).json("Unable to register")
         })
        })
        .catch((err)=>{
          console.log(err)
          res.status(400).json("Unable to register")

        })
      } else {
        res.status(500).json("email already exist");
      }
    })
    .catch((err) =>{
      console.log(err)
      res.status(400).json("database error")
      
      });
};

const postLogin = (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);
  postgres
    .select("email", "password")
    .from("login")
    .where("email", "=", req.body.email)
    .then((data) => {
    //  let isValid;
      // if (req.body.password == data[0].password) isValid = true;
      // else isValid = false;
      let isValid=false;
      if(data[0]!=undefined){
      console.log(data)
      isValid = bcrypt.compareSync(req.body.password, data[0].password);
      console.log(req.body.password);
      console.log(isValid);
      }
      if (isValid) {
        postgres
          .select("*")
          .from("login")
          .where("email", "=", req.body.email)
          .then((user1) => {
            console.log(user1, user1[0].verified);
            postgres
              .select("*")
              .from("users")
              .where("email", "=", req.body.email)
              .then((user2) => {
                console.log(user2);
                // userCreation(
                //   user2[0].nid,
                //   user2[0].name,
                //   user2[0].email,
                //   user2[0].password,
                //   user2[0].location,
                //   user2[0].contact_info,
                //   user2[0].financial_condition
                // );
                //  console.log(user.email);
                console.log(user1[0].verified);
             //   if (user1[0].verified) {
                  // return 1;
                  res.status(200).json(user2[0]);
             //   } else {
                  // return 0;
              //    res.status(405).json("email not verified");
            //    }
              })
              .catch((err) => {
                console.log(err);
                // return 0;
                res.status(400).json("wrong credential");
              });
          })
          .catch((err) => {
            console.log(err);
            //return 0;
            res.status(400).json("wrong credential");
          });
      } else {
        console.log("wrong credential");
        //  return 0;
        res.status(400).json("wrong credential");
      }
    })
    .catch((err) => {
      console.log(err);
     // return 0;
      res.status(400).json("wrong credential");
    });
};

const RegisterTourGuide = (req,res) => {
  console.log("dhukse")
  let {
    name,
    email,
    password,
    contactNo,
    userType,
    area,
  } = req.body;
  //console.log(name,email,password,contactNo,userType)
  let hash = bcrypt.hashSync(password);
  //  res.status(200).send("Success");
  // console.log(nid, name, hash, verificationCode);

  postgres
    .select("*")
    .from("users")
    .where("email", "=", email)
    .then((data) => {
      
      if (data[0] == undefined) {
        postgres
        .insert({
             name: name,
             email: email,
             contact_info: contactNo,
             area:area,
             user_type:userType,
            
                })
        .into("users")
        .returning("id")
        .then((userid)=>{
         console.log(userid[0]);
            postgres
            .insert({
              user_id:userid[0],
              email:email,
              password:hash,
              verified:0,
              verificationcode: verificationCode,
                 })
         .into("login")
         .then(()=>{

          postgres
          .insert({
            userid:userid[0],
            area:area
               })
       .into("tourguide")
       .then(()=>{
        res.status(200).json("Successful")
       })
       .catch(()=>{
        console.log(err)
        res.status(400).json("Unable to register")
       })

           
         })
         .catch((err)=>{
           console.log(err)
           res.status(400).json("Unable to register")
         })
        })
        .catch((err)=>{
          console.log(err)
          res.status(400).json("Unable to register")

        })
      } else {
        res.status(500).json("email already exist");
      }
    })
    .catch((err) =>{
      console.log(err)
      res.status(400).json("database error")
      
      });
}
const RegisterVehicleOwner = (req,res) => {
  console.log("dhukse")
  let {
    name,
    email,
    password,
    contactNo,
    userType,
    area,
  } = req.body;
  //console.log(name,email,password,contactNo,userType)
  let hash = bcrypt.hashSync(password);
  //  res.status(200).send("Success");
  // console.log(nid, name, hash, verificationCode);

  postgres
    .select("*")
    .from("users")
    .where("email", "=", email)
    .then((data) => {
      
      if (data[0] == undefined) {
        postgres
        .insert({
             name: name,
             email: email,
             contact_info: contactNo,
             area:area,
             user_type:userType,
            
                })
        .into("users")
        .returning("id")
        .then((userid)=>{
         console.log(userid[0]);
            postgres
            .insert({
              user_id:userid[0],
              email:email,
              password:hash,
              verified:0,
              verificationcode: verificationCode,
                 })
         .into("login")
         .then(()=>{

          postgres
          .insert({
            ownerid:userid[0],
            area:area
               })
       .into("vehicle")
       .then(()=>{
        res.status(200).json("Successful")
       })
       .catch(()=>{
        console.log(err)
        res.status(400).json("Unable to register")
       })

           
         })
         .catch((err)=>{
           console.log(err)
           res.status(400).json("Unable to register")
         })
        })
        .catch((err)=>{
          console.log(err)
          res.status(400).json("Unable to register")

        })
      } else {
        res.status(500).json("email already exist");
      }
    })
    .catch((err) =>{
      console.log(err)
      res.status(400).json("database error")
      
      });
}
const RegisterHotelManager = (req,res) => {
  console.log("dhukse")
  let {
    name,
    email,
    password,
    contactNo,
    userType,
    hotelName,
    hotelAddress,
  } = req.body;
  //console.log(name,email,password,contactNo,userType)
  let hash = bcrypt.hashSync(password);
  //  res.status(200).send("Success");
  // console.log(nid, name, hash, verificationCode);

  postgres
    .select("*")
    .from("users")
    .where("email", "=", email)
    .then((data) => {
      
      if (data[0] == undefined) {
        postgres
        .insert({
             name: name,
             email: email,
             contact_info: contactNo,
             area:null,
             user_type:userType,
            
                })
        .into("users")
        .returning("id")
        .then((userid)=>{
         console.log(userid[0]);
            postgres
            .insert({
              user_id:userid[0],
              email:email,
              password:hash,
              verified:0,
              verificationcode: verificationCode,
                 })
         .into("login")
         .then(()=>{

          postgres
          .insert({
            ownerid:userid[0],
            name:hotelName,
            address:hotelAddress,
               })
       .into("hotel")
       .then(()=>{
        res.status(200).json("Successful")
       })
       .catch((err)=>{
        console.log(err)
        res.status(400).json("Unable to register")
       })

           
         })
         .catch((err)=>{
           console.log(err)
           res.status(400).json("Unable to register")
         })
        })
        .catch((err)=>{
          console.log(err)
          res.status(400).json("Unable to register")

        })
      } else {
        res.status(500).json("email already exist");
      }
    })
    .catch((err) =>{
      console.log(err)
      res.status(400).json("database error")
      
      });
}
const addRoom  = (req,res) => {
  console.log("dhukse")
  let {
    userId,
    room_number,
    room_rent,
    room_capacity,
    room_ac_option,
    room_description,
    
  } = req.body;
  console.log(
    userId,
    room_number,
    room_rent,
    room_capacity,
    room_ac_option,
    room_description,)

    // ownerid:userId ,
    // name: data[0].name,
    // address:data[0].address,
    // discount:0,
    // room_number : room_number,
    // room_rent : room_rent,
    // room_capacity : room_capacity,
    // room_ac_option : room_ac_option,
    // room_description : room_description,   
    postgres
    .select("*")
    .from("hotel")
    .where("room_number", "IS", null)
    .andWhere("ownerid","=",userId)
    .then((data) => {
      console.log(data)
      if(data[0]!=undefined){
      
      postgres("hotel")
      .where("room_number", "IS", null)
      .andWhere("ownerid","=",userId)
      .update({
          discount:0,
          room_number : room_number,
          room_rent : room_rent,
          room_capacity : room_capacity,
          room_ac_option : room_ac_option,
         room_description : room_description,  
      })
      .then(()=>{
        res.status(200).json("Successful");
      })
      .catch((err)=>{
        res.status(400).json("Error");
      })  
    console.log(data)
      }
      else{
        console.log("else")
        postgres
       .select("*")
       .from("hotel")
       .where("ownerid", "=", userId)
       .then((data) => {

        postgres
        .insert({
           ownerid:userId ,
           name: data[0].name,
           address:data[0].address,
           discount:0,
           room_number : room_number,
           room_rent : room_rent,
           room_capacity : room_capacity,
           room_ac_option : room_ac_option,
           room_description : room_description,  
             })
     .into("hotel")
     .then(()=>{
      res.status(200).json("Successful")
     })
     .catch(()=>{
      res.status(500).json("Error")
     })
    })
      }
    })
    .catch((err)=>{
     console.log(err)
    res.status(400).json("Error")
    })



}
const getRoom  = (req,res) => {
  console.log("dhukse")
  let {
    userId,
    
  } = req.body;
  console.log(
    userId,
)


  postgres
  .select("*")
  .from("hotel")
  .where("ownerid","=",userId)
  .then((data)=>{
    console.log(data)
     res.status(200).json(data)
  })
  .catch((err)=>{
    console.log(err)
    res.status(400).json("Database error")
  })




}
const addService  = (req,res) => {
  console.log("dhukse")
  let {
    userId ,
    route,
    price,
    year_of_experience,

} = req.body;
  console.log(
    userId ,
    route,
    price,
    year_of_experience,
)


postgres
    .select("*")
    .from("tourguide")
    .where("route", "IS", null)
    .then((data) => {
      console.log(data)
      if(data[0]!=undefined){
      
      postgres("tourguide")
      .where("route", "IS", null)
      .update({
        route:route,
        price:price,
        year_of_experience:year_of_experience
      })
      .then(()=>{
        res.status(200).json("Successful");
      })
      .catch((err)=>{
        res.status(400).json("Error");
      })  
    console.log(data)
      }
      else{
        console.log("else")
        postgres
       .select("*")
       .from("tourguide")
       .where("userid", "=", userId)
       .then((data) => {

        postgres
        .insert({
          userid:userId,
          area:data[0].area,
          route:route,
          price:price,
          year_of_experience:year_of_experience
             })
     .into("tourguide")
     .then(()=>{
      res.status(200).json("Successful")
     })
     .catch(()=>{
      res.status(400).json("Error")
     })
    })
      }
    })
    .catch((err)=>{
     console.log(err)
    res.status(400).json("Error")
    })


}
const getService  = (req,res) => {
  console.log("dhukse")
  let {
    userId,
    
  } = req.body;
  console.log(
    userId,
)


  postgres
  .select("*")
  .from("tourguide")
  .where("userid","=",userId)
  .then((data)=>{
    console.log(data)
     res.status(200).json(data)
  })
  .catch((err)=>{
    console.log(err)
    res.status(400).json("Database error")
  })



}
const addBlog  = (req,res) => {
  console.log("dhukse")
  let {
    userId,
    title,
    area,
    route,
    price ,
    recommendation,
    description

    
  } = req.body;
  console.log(
    userId,
    title,
    area,
    route,
    price ,
    recommendation,
    description
)


postgres
 .insert({
  userid:userId,
  title:title,
  area:area,
  route:route,
  description:description,
  rating:0,
  price:price ,
  recommendation:recommendation,
          })
 .into("blog")
 .then(()=>{
  res.status(200).json("successful")
 })
 .catch((err)=>{
   console.log(err)
   res.status(400).json("database error")

 })
}
const getBlog  = (req,res) => {
  console.log("dhukse")
  let {
    userId,
    
  } = req.body;
  console.log(
    userId,
)


  postgres
  .select("*")
  .from("blog")
  .where("userid","=",userId)
  .then((data)=>{
    console.log(data)
     res.status(200).json(data)
  })
  .catch((err)=>{
    console.log(err)
    res.status(400).json("Database error")
  })



}

const addVehicle  = (req,res) => {
  console.log("dhukse")
  let {
    ownerid,
    v_name , 
    ac_option ,
    type ,  
  } = req.body;
  console.log(
    v_name , 
    ac_option ,
    type ,)

 
    postgres
    .select("*")
    .from("vehicle")
    .where("v_name", "IS", null)
    .andWhere("ownerid","=",ownerid)
    .then((data) => {
      console.log(data)
      if(data[0]!=undefined){
      
      postgres("vehicle")
      .where("v_name", "IS", null)
      .andWhere("ownerid","=",ownerid)
      .update({
        v_name :v_name, 
        ac_option:ac_option,
        type:type,
        discount :0,
      })
      .then(()=>{
        res.status(200).json("Successful");
      })
      .catch((err)=>{
        res.status(400).json("Error");
      })  
    console.log(data)
      }
      else{
        console.log("else")
        postgres
       .select("*")
       .from("vehicle")
       .where("ownerid", "=", ownerid)
       .then((data) => {

        postgres
        .insert({
           ownerid:ownerid ,
           area:data[0].area,
           v_name :v_name, 
           ac_option:ac_option,
           type:type,
           discount :0,
              })
     .into("vehicle")
     .then(()=>{
      res.status(200).json("Successful")
     })
     .catch(()=>{
      res.status(400).json("Error")
     })
    })
      }
    })
    .catch((err)=>{
     console.log(err)
    res.status(400).json("Error")
    })



}

const addVehicleRoute  = (req,res) => {
  console.log("dhukse")
  let {
    ownerid,
    route,
    rent,
    v_id,
    
  } = req.body;
  console.log(
    ownerid,
    v_id,
    rent,)

 
    postgres
    .select("*")
    .from("vehicle")
    .where("route", "IS", null)
    .andWhere("ownerid","=",ownerid)
    .andWhere("v_id","=",v_id)
    .then((data) => {
      console.log(data)
      if(data[0]!=undefined){
      
      postgres("vehicle")
      .where("route", "IS", null)
      .andWhere("ownerid","=",ownerid)
      .andWhere("v_id","=",v_id)
      .update({
        route:route,
        rent:rent,
      })
      .then(()=>{
        res.status(200).json("Successful");
      })
      .catch((err)=>{
        res.status(400).json("Error");
      })  
    console.log(data)
      }
      else{
        console.log("else")
        postgres
       .select("*")
       .from("vehicle")
       .where("ownerid", "=", ownerid)
       .andWhere("v_id","=",v_id)
       .then((data) => {

        postgres
        .insert({
          ownerid: data[0].ownerid, 
          area: data[0].area,
          route:route,
          rent :rent,
          v_id:v_id,
          v_name :data[0].v_name, 
          ac_option: data[0].ac_option,
          type: data[0].type,
          discount:0,           
              })
     .into("vehicle")
     .then(()=>{
      res.status(200).json("Successful")
     })
     .catch(()=>{
      res.status(400).json("Error")
     })
    })
      }
    })
    .catch((err)=>{
     console.log(err)
    res.status(400).json("Error")
    })



}

const getVehicle  = (req,res) => {
  console.log("dhukse")
  let {
    userId,
    
  } = req.body;
  console.log(
    userId,
) 


  postgres
  .select("*")
  .from("vehicle")
  .where("ownerid","=",userId)
  .then((data)=>{
    console.log(data)
     res.status(200).json(data)
  })
  .catch((err)=>{
    console.log(err)
    res.status(400).json("Database error")
  })
}
const getAreaRoute = (req,res) => {
  console.log("dhukse")

  area =req.body.area
  console.log(area)
  postgres
  .select("*")
  .from("arearoute")
  .where("area","=",area)
  .then((data)=>{
    console.log(data)
     res.status(200).json(data)
  })
  .catch((err)=>{
    console.log(err)
    res.status(400).json("Database error")
  })
}
const getHotelForTraveller = (req,res) => {
  console.log("dhukse")
  let {
    address,
    totalPerson,
  } = req.body;

  postgres
  .select("*")
  .from("hotel")
  .where("room_capacity","<=",totalPerson)
  .andWhere("address","=",address)
  .orderBy('rating')
  .then((data)=>{
    console.log(data)
     res.status(200).json(data)
  })
  .catch((err)=>{
    console.log(err)
    res.status(400).json("Database error")
  })
}
const getVehicleForTraveller = (req,res) => {
  console.log("dhukse")
  let {
    address,
  } = req.body;

  postgres
  .select("*")
  .from("vehicle")
  .where("area","=",address)
  .orderBy('rating')
  .then((data)=>{
    console.log(data)
     res.status(200).json(data)
  })
  .catch((err)=>{
    console.log(err)
    res.status(400).json("Database error")
  })
}
const getGuideForTraveller = (req,res) => {
  console.log("dhukse")
  let {
    address,
  } = req.body;

  postgres
  .select("*")
  .from("tourguide")
  .where("area","=",address)
  .orderBy('rating')
  .then((data)=>{
    console.log(data)
     res.status(200).json(data)
  })
  .catch((err)=>{
    console.log(err)
    res.status(400).json("Database error")
  })
}
const getRouteForTraveller = (req,res) => {
  console.log("dhukse")
  let {
    address,
    day,
  } = req.body;

  postgres
  .select("*")
  .from("tripplan")
  .where("area","=",address)
  .andWhere("daycount","=",day)
  .then((data)=>{
    console.log(data)
     res.status(200).json(data)
  })
  .catch((err)=>{
    console.log(err)
    res.status(400).json("Database error")
  })
}

const getAllAreaRoute = (req,res) => {
  console.log("dhukse")


  console.log(area)
  postgres
  .select("*")
  .distinctOn("area")
  .from("arearoute")
  .then((data)=>{
    console.log(data)
     res.status(200).json(data)
  })
  .catch((err)=>{
    console.log(err)
    res.status(400).json("Database error")
  })
}
module.exports = {
  postLogin,postRegister,RegisterTourGuide,RegisterVehicleOwner,
  RegisterHotelManager,addRoom ,getRoom ,addService ,getService,
  addBlog ,getBlog,addVehicle, addVehicleRoute, getVehicle,getAreaRoute,
  getHotelForTraveller,getVehicleForTraveller,getGuideForTraveller,getRouteForTraveller,
  getAllAreaRoute
};
