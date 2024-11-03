#!/usr/bin/env node
import pareseArgs from "minimist";
import prompts from "prompts";
import fs from 'fs';
import path from 'path';

const argv = pareseArgs(process.argv.slice(2));
const currentDir = process.cwd();

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
    ],{
		onCancel:()=>{
			throw new Error("Operation cancelled!");
		}
	});
  } catch (cancelled) {
    console.log(cancelled.message);
    return;
  }
  // remove files
  // emptyDir(currentDir);

  const {
	projectName,
	framework,
  } = result;
  
  console.log(projectName,import.meta.url);
}

function emptyDir(dir){
	if(!fs.existsSync(dir)){
		return;
	}
	for(const filePath of fs.readdirSync(dir)){
		fs.rmSync(path.resolve(dir,filePath),{recursive:true,force:true});
	}
}

main();
