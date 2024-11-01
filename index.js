#!/usr/bin/env node
import pareseArgs from "minimist";
import prompts from "prompts";

const argv = pareseArgs(process.argv.slice(2));
const cwd = process.cwd();

async function main() {
  const defaultTemplate = "vite-vue";

  let result = {};
  try {
    result = await prompts([
      {
        type: "text",
        name: "projectName",
        message: "Project name:",
        initial: defaultTemplate,
      },
    ]);
  } catch (error) {
    console.log(error.message);
    return;
  }
}

function formatDir(targetDir) {
  return targetDir?.trim().replace(/\/+$/g, "");
}

main();
