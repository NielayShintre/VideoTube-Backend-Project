import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async (localStoragePath) => {
  try {
    if (!localStoragePath) return null;
    const response = await cloudinary.uploader.upload(localStoragePath, {
      resource_type: "auto",
    });
    console.log("File upload successful");
    return response;
  } catch (error) {
    fs.unlinkSync(localStoragePath);
    //remove the locally saved temp files as the upload operation got failed
  }
};

export { uploadCloudinary };
