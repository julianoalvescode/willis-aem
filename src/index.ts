#!/usr/bin/env node
import { Command } from "commander";
import Component from "./controller/usecase/component";
const program = new Command();

program
  .name("willis-aem")
  .description("CLI to facilitate the development components in Adobe AEM")
  .version("1.0.1");

program
  .command("generate:component [name] [nameProject]")
  .description("Generate a new component")
  .action(async (str, nameProject) => {
    await Component.generateComponent({
      name: str,
      nameProject: nameProject,
    });
  });

program.parse();
