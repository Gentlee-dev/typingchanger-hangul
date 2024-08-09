import test from "node:test";
import assert from "node:assert";
import testArgs from "./testArgs.js";

for (const testArg of testArgs) {
  const [title, myFunction, answer] = testArg;
  test(title, () => {
    assert.strictEqual(JSON.stringify(myFunction), JSON.stringify(answer));
  });
}
