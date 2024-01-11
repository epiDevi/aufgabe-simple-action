import { sayHallo } from "../app";

test("Ich starte nur mein test ", () => {
  expect(sayHallo()).toBe("Hallo leute");
});
