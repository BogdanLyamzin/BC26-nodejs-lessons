const express = require("express");
const request = require("supertest");

const products = require("./products");

const app = express();

app.use("/products", products);

describe("test /products API", ()=>{
    beforeAll(()=> app.listen(5000));

    it("get all products", async()=>{
        const {statusCode, body} = await request(app).get("/products");
        
        expect(statusCode).toBe(200);
        expect(body.status).toBe("success");
        expect(body.code).toBe(200);
        expect(Array.isArray(body.data.result)).toBe(true);
        expect(body.data.result[0]._id).toBeString();
    })

    // afterAll(()=> app.close());
});
