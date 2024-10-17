import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

cloudinary.config({
    cloud_name: 'dimw8onr0',
    api_key: '155449398744693',
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnClodinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("File uploaded successfully", response.url);
        return response

    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

export { uploadOnClodinary }