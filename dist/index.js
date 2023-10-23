#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const component_1 = __importDefault(require("./controller/usecase/component"));
const program = new commander_1.Command();
program
    .name("willis-aem")
    .description("CLI to facilitate the development components in Adobe AEM")
    .version("1.0.0");
program
    .command("generate:component [name] [nameProject]")
    .description("Generate a new component")
    .action((str, nameProject) => __awaiter(void 0, void 0, void 0, function* () {
    yield component_1.default.generateComponent({
        name: str,
        nameProject: nameProject,
    });
}));
program.parse();
