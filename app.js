import express from "express";

export const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.end("Hallo actions");
});
// export function sayHallo() {
//   return "Hallo leute";
// }

export const server = app.listen(9999, () => {
  console.log("server leuft");
});
