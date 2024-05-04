const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');

// Multer configuration
const storage = multer.diskStorage({});

const upload = multer({ storage });

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = { upload, cloudinary };
