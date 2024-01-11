// import { sayHallo } from "../app.js";

// test("Ich starte nur mein test ", () => {
//   expect(sayHallo()).toBe("Hallo leute");
// });

import supertest from "supertest";
import { app } from "../app.js";

const request = supertest(app);
test("Ich teste mein Route", async () => {
  const respose = await request.get("/");
  expect(respose.statusCode).toBe(200);
  expect(respose.text).toBe("Hallo actions");
});
