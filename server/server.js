import express, { response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

//  can name app anything - it initiates the express app
const app = express();

// app.use is known as middleware. it runs whatever is in the brackets before our request hits the main handler
// app.use(cors()) allows access to the server we are setting up from any domain that makes a request
// app.use(express.json()) reads incoming json and turns it into javascript
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DB_CONN });

// app.get("/", (request, response) => {
//   try {
//     // this logs 'Working' in the terminal
//     console.log("Working");
//     // 'Hello' appears on the webpage
//     response.json("Hello!");
//   } catch {}
// });

// lists all orders
app.get("/allorders", async (request, response) => {
  try {
    const result = await db.query("SELECT * FROM customers_food_items");
    const allOrders = result.rows;
    response.json(allOrders);
  } catch {}
});

app.get("/allproducts", async (request, response) => {
  try {
    const result = await db.query("SELECT * FROM food_items");
    const foodItem = result.rows;
    response.json(foodItem);
  } catch {}
});

// displays individual restaurant using params so if user searches allrestaurants/1 or /2 it will go to that individual restaurant with that parameter
app.get("/allorders/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const result = await db.query(
      "SELECT * FROM customers_food_items WHERE id = $1",
      [id]
    );
    const singleOrder = result.rows;
    response.json(singleOrder);
  } catch {}
});

app.listen("8080", () => {
  console.log("Woohoo!");
});
