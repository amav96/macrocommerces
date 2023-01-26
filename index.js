import express from "express";

const app = express()

app.listen(80, () => console.log('Api running on port 80'));

app.get('/', (req,res) => res.json('Welcome to macrocommerces'))