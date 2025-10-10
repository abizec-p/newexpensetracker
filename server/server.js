require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://expentrackapp.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connection done"))
  .catch((err) => console.error("sorry not connected:", err));

const formSchema = new mongoose.Schema({
  amount: Number,
  title: String,
  category: String,
  date: Date,
  type: String,
});

const FormData = mongoose.model("FormData", formSchema);

app.post("/api/form", async (req, res) => {
  try {
    const newEntry = new FormData(req.body);
    await newEntry.save();
    res.status(201).json({ message: "saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "something went wrong" });
  }
});
app.get("/api/form", async (req, res) => {
  try {
    const entries = await FormData.find();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: "something wrong" });
  }
});

app.delete("/api/form", async (res,req) => {
  try{
    const {id} = req.params;
    await FormData.findByIdAndDelete(id);
    res.json({message:"successfully deleted!"});
  }catch(error) {
    console.error(error);
    res.status(500).json({message:"sorry, could not delete this"});
  }





});

app.listen(PORT, () =>
  console.log(`server running at http://localhost:${PORT}`)
);

app.get("/", (req, res) => {
  res.send([]);
});
