import express  from "express";
import dotenv from 'dotenv'
import connection from "./database/db.js";
import defaultData from "./default.js";
import Router from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";
const app = express();

dotenv.config();
app.use(cors());
// app.use(cors(
//     {
//         origin: ["https://swift-mart-frontend.vercel.app/"],
//         methods: ['POST', 'GET'],
//         credentials: true
//     }

// ));
app.use(express.json());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/', Router);

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);
app.listen(PORT, ()=> console.log(`Server is running at ${PORT} `));

defaultData();