#! /usr/bin/env node
// Tells Node.js that this is a CLI tool

const boxen = require("boxen");
const { bold, cyan } = require("chalk").default;

const lines = [
  bold("Slin")
];

const message = lines.join("\n");

const styles = {
  borderColor: "cyan",
  borderStyle: "round",
  margin: 1,
  padding: 1
};

let box = boxen(message, styles);
box = boxen(box, styles);
box = boxen(box, styles);
box = boxen(box, styles);

process.stdout.write(box + "\n");

require("openurl").open("http://slinlee.com/now")
