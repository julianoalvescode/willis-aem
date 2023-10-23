import { black } from "cli-color";
import * as fs from "fs-extra";
import * as path from "path";

class Component {
  async generateComponent({
    name,
    nameProject,
  }: {
    name: string;
    nameProject: string;
  }): Promise<void> {
    try {
      await fs.copy(
        path.resolve(__dirname, "../../files/example"),
        `ui.apps/src/main/content/jcr_root/apps/${nameProject}/components/${name}`,
        (err) => {
          if (err) {
            console.log(black.bgRedBright(`Error: ${err.message} 💩`));
          }
          console.log(black.bgGreen(`Component ${name} created 🎉!`));
        }
      );
    } catch (e) {
      console.log(`Error: ${e} 💩`);
    }
  }
}

export default new Component();
