const jwt = require('jsonwebtoken')
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Authenticate = require('../Middleware/authenticate')

require("../db/conn");
const Admin = require("../model/adminSchema");
const Member = require("../model/memberSchema");
const nNews = require("../model/newsSchema");
const mMags = require("../model/magsSchema");
const HadiData1 = require("../model/Hadith/hadithSchema1");
const HadiData2 = require("../model/Hadith/hadithSchema2");
const HadiData3 = require("../model/Hadith/hadithSchema3");
const HadiData4 = require("../model/Hadith/hadithSchema4");
const HadiData5 = require("../model/Hadith/hadithSchema5");
const HadiData6 = require("../model/Hadith/hadithSchema6");
const HadiData7 = require("../model/Hadith/hadithSchema7");
const HadiData8 = require("../model/Hadith/hadithSchema8");
const HadiData9 = require("../model/Hadith/hadithSchema9");

router.get("/", (req, res) => {
  res.send(`Hello from the server auth js`);
});

// admin registration route
router.post("/adminsignup", async (req, res) => {
  const { name, email, gender, party, password, cpassword } = req.body;
  if (!name || !email || !gender || !party || !password || !cpassword) {
    return res.status(422).json({ message: "please fill the required fields" });
  }
  try {
    const userExist = await Admin.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password is not matching" });
    } else {
      const user = new Admin({ name, email, gender, party, password, cpassword });
      await user.save();
      res.status(201).json({ message: "User registered sucessfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// member registration route
router.post("/membersignup", async (req, res) => {
  const { name, email, gender, party, password, cpassword } = req.body;
  if (!name || !email || !gender || !party || !password || !cpassword) {
    return res.status(422).json({ message: "please fill the required fields" });
  }
  try {
    const userExist = await Member.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password is not matching" });
    } else {
      const user = new Member({ name, email, gender, party, password, cpassword });
      await user.save();
      res.status(201).json({ message: "User registered sucessfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// admin login route
router.post("/adminlogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "please fill the data" });
    }
    const userLogin = await Admin.findOne({ email: email });
    // console.log(userLogin);
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires:new Date(Date.now() + 25892000000),
        httpOnly:true
      });
      if (!isMatch) {
        res.status(400).json({ error: "invalid credintials" });
      } else {
        res.json({ message: "user signin sucessfully" });
      }
    } else {
      res.status(400).json({ error: "invalid credintials" });
    }
  } catch (err) {
    console.log(err);
  }
});

// member login route
router.post("/memberlogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "please fill the data" });
    }
    const userLogin = await Member.findOne({ email: email });
    // console.log(userLogin);
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires:new Date(Date.now() + 25892000000),
        httpOnly:true
      });
      if (!isMatch) {
        res.status(400).json({ error: "invalid credintials" });
      } else {
        res.json({ message: "user signin sucessfully" });
      }
    } else {
      res.status(400).json({ error: "invalid credintials" });
    }
  } catch (err) {
    console.log(err);
  }
});



//News route
router.post("/adminpage", async (req, res) => {
  
  const { newsText, newsTitle, nUser, category } = req.body;

  if (!newsText || !newsTitle || !nUser || !category ) {
    return res.status(422).json({ message: "please fill the required fields" });
  }

  try{
  
    // const newsExist = await User.findOne({ newsText : newsText });

    // if (newsExist) {
    //   return res.status(422).json({ error: "News Already Posted" });
    // } else  {
      const newsp = new nNews({ newsText, newsTitle, nUser, category });
      await newsp.save();
      res.status(201).json({ message: "Successfully Posted" });
    // }
  } catch (err) {
    console.log(err);
  }
});

router.get('/news', async(req, res,next) => {
  nNews.find()
  .then(result => {
    res.status(200).json(result);
    })

})

//Magzine route
router.post("/adminpagem", async (req, res) => {
  
  const { magsText, magsTitle, mUser, category } = req.body;

  if (!magsText || !magsTitle || !mUser || !category ) {
    return res.status(422).json({ message: "please fill the required fields" });
  }

  try{
  
    // const newsExist = await User.findOne({ newsText : newsText });

    // if (newsExist) {
    //   return res.status(422).json({ error: "News Already Posted" });
    // } else  {
      const magsp = new mMags({ magsText, magsTitle, mUser, category });
      await magsp.save();
      res.status(201).json({ message: "Successfully Posted" });
    // }
  } catch (err) {
    console.log(err);
  }
});

router.get('/magzines', async(req, res,next) => {
  mMags.find()
  .then(result => {
    res.status(200).json(result);
    })

})

//Hadith Data

router.get('/Hadith1', async(req, res,next) => {
  HadiData1.find()
  .then(result => {
    res.status(200).json(result);
    })

})
router.get('/Hadith2', async(req, res,next) => {
  HadiData2.find()
  .then(result => {
    res.status(200).json(result);
    })

})
router.get('/Hadith3', async(req, res,next) => {
  HadiData3.find()
  .then(result => {
    res.status(200).json(result);
    })

})
router.get('/Hadith4', async(req, res,next) => {
  HadiData4.find()
  .then(result => {
    res.status(200).json(result);
    })

})
router.get('/Hadith5', async(req, res,next) => {
  HadiData5.find()
  .then(result => {
    res.status(200).json(result);
    })

})
router.get('/Hadith6', async(req, res,next) => {
  HadiData6.find()
  .then(result => {
    res.status(200).json(result);
    })

})
router.get('/Hadith7', async(req, res,next) => {
  HadiData7.find()
  .then(result => {
    res.status(200).json(result);
    })

})
router.get('/Hadith8', async(req, res,next) => {
  HadiData8.find()
  .then(result => {
    res.status(200).json(result);
    })

})
router.get('/Hadith9', async(req, res,next) => {
  HadiData9.find()
  .then(result => {
    res.status(200).json(result);
    })

})

// Rough Work

// router.get('/news', async(req, res,next) => {
//   nNews.find()
//   .then(newData => {
//     res.status(200).json([
//       newData
//     ])
//   })
// })

// Rough Work

// chat page middleware

router.get("/chat",Authenticate,(req, res) => {
  res.send(req.rootUser);
});
//news page middleware
router.get("/news", Authenticate,(req, res) => {
  res.send(req.rootUser);
});
//admin page middleware
router.get("/adminpage",Authenticate,(req, res) => {
  res.send(req.rootUser);
});
module.exports = router;


// router.get("/chat",authenticate,(req, res) => {
//   console.log('hellow my caht')
//   res.send(req.rootUser);
// });
// //news page
// router.get("/news", authenticate,(req, res) => {
//   console.log('hellow my news')
//   res.send(req.rootUser);
// });
// //admin page
// router.get("/adminpage",authenticate,(req, res) => {
//   console.log('hellow my admin page');
//   res.send(req.rootUser);
// });




// module.exports = router;



















// saeed barcha
initializePassport(passport);


app.set("view engine", "ejs")
app.use(express.urlencoded({extended :false}))

app.use(session({
secret:'secret',
resave:false,
saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
// saeed


// post method 
app.get("/users", async (req, res) => {
  try {
    const addUser = await pool.query(
      "SELECT * FROM users",
      
    );
    res.json("successfully get data");
  } catch (err) {
    console.error(err.message);
  }
});

app.post('/users', async (req, res)=>{
    let {name, email, password, cpassword} = req.body;
    console.log({  
        name,
        email,
        password,
        cpassword
    });

    let errors = [];

    if(!name || !email || !password || !cpassword){
        errors.push({ message: "Please enter all fields"} );
    }
    if(password.length < 6){
        errors.push({ message:"Password should be at least 6 characters"} );
    }

    if(errors.length > 0){
      // window.location ="/signup";
      //  res.render("register", { errors });
    }
    else{
    //     // form validation has passed
        let  hashedPassward = await  bcrypt.hash(password, 10);
        console.log(hashedPassward);

        pool.query(
            `SELECT * FROM users 
            WHERE email = $1`, [email],
            (err , results) => {

                if(err){
                    throw err;
                }
              
                console.log(results.rows);

                if(results.rows.length > 0){
                errors.push({message: "Email already registered"});
                res.render("/signup", {errors})
                }else{
                    pool.query(
                        `INSERT INTO users (name, email, password)
                        VALUES ($1, $2, $3)
                      RETURNING id, password`, [name, email, hashedPassward],
                        (err, results) =>{
                            if(err){
                                // throw err;
                            }
                            console.log(results.rows);
                              req.flash ('success_msg', "You are now registered. Please login")
                              res.redirect('login')
                            }
                    )
                }
            }
        );
    }
  });

  app.post('/users', async (req, res)=>{
    let { email, password} = req.body;
    console.log({  
        email,
        password
    });
 let errors=[]
    if( !email || !password){
        errors.push({ message: "Please enter all fields"} );
    }
    if(password.length < 6){
        errors.push({ message:"Password should be at least 6 characters"} );
    }

    if(errors.length > 0){
      // window.location ="/signup";
      //  res.render("register", { errors });
    }
    else{
    //     // form validation has passed
        let  hashedPassward = await  bcrypt.hash(password, 10);
        console.log(hashedPassward);

        pool.query(
            `SELECT * FROM users 
            WHERE email = $1 AND password=$2`, [email, password],
            
        );
    }
  });


  
//   app.post("/users/login", passport.authenticate('local',{
//     successRedirect:"/users/dashboard",
//     failureRedirect:"/users/login ",
//     failureFlash:true   
// }))
 app.post("/users/login", passport.authenticate('local',{
    successRedirect:"/users/",
    failureRedirect:"/users/login ",
    failureFlash:true   
}))
