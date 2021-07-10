const express = require("express");
const cors = require("cors");
const fs = require("fs/promises");
const path = require("path");
const multer = require("multer");

const {Product} = require("./models");

const app = express();

app.use(cors());

const tempDir = path.join(process.cwd(), "temp");
const uploadDir = path.join(process.cwd(), "upload/products");

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, tempDir);
    },
    filename: (req, file, cb)=>{
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth()+1;
        cb(null, `${year}-${month}-${file.originalname}`);
    },
    limits: {
        fileSize: 1000000
    }
});

const upload = multer({
    storage
})

app.post("/products", upload.single("image"), async (req, res)=>{
    const {path: tempName, originalname} = req.file;
    const fileName = path.join(uploadDir, originalname);
    // console.log(tempName);
    // console.log(fileName);
    try{
        await fs.rename(tempName, fileName);
        Product.create({image: fileName});
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result: {image: fileName}
            }
        })
    }
    catch(error){
        fs.unlink(tempName);
        fs.unlink(fileName);
    }
});

const {PORT = 3000} = process.env;

app.listen(PORT);