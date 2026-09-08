// LAB ONLY — safe replacement for the intentionally vulnerable example.
// This file demonstrates how untrusted input should be handled.

const userInput = "demo-input";

const allowedInputs = new Set(["demo-input", "safe-input"]);

if (!allowedInputs.has(userInput)) {
  throw new Error("Invalid input");
}

console.log(`Accepted input: ${userInput}`);
