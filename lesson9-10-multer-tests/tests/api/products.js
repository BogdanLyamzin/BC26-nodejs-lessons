const express = require("express");

const router = express.Router();

const products = [
    {
        _id: "rsfs",
        name: "iPhone X",
        price: 25000
    }
]

router.get("/", (req, res)=>{
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products
        }
    })
});

module.exports = router;