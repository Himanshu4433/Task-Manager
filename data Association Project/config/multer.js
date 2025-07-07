const multer = require("multer");
const path= require("path");
const crypto = require("crypto")



// diskstorage setup

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/image/uploads')
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        crypto.randomBytes(12,(err,name)=>{
        const fn =   name.toString("hex") + path.extname(file.originalname);
        cb(null,fn );
    })
    
  }
})

//export upload variable
const upload = multer({ storage: storage })
module.exports = upload;
