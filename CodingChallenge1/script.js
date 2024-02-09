"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  displayResults(type = "array") {
    if (type === "array") console.log(this.answers);
    else if (type === "string")
      console.log(`Poll results are ${this.answers.join(", ")}`);
  },
  registerNewAnswer() {
    const choice = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(choice);
    if (choice >= 0 && choice <= this.answers.length) {
      this.answers[choice] += 1;
    } else {
      console.error("Invalid number");
    }
    this.displayResults("array");
    this.displayResults("string");
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
