let initData = require("./data.js");
let mongoose = require("mongoose");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDb = async () => {
  await  Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({...obj, owner: "663446ccce35e2ef0e79319e"}));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};
initDb();