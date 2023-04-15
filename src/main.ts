import chalk, { Color } from "chalk";
import { utils } from "./utils";

class Console {
  color?: typeof Color;
  background?: typeof Color;

  /**
   *
   * @param color color of the text
   * @param background background color of the text
   * @param font font style of the text
   */
  constructor(color?: typeof Color, background?: typeof Color) {
    this.color = color;
    this.background = background;
  }

  log(message: string, ...args: any) {
    if (this.color && !this.background)
      return console.log(chalk[this.color](message), ...args);

    if (this.background && !this.color)
      return console.log(chalk[this.background](message), ...args);

    if (this.color && this.background)
      return console.log(chalk[this.color][this.background](message), ...args);

    return console.log(message, ...args);
  }

  error(message: string, ...args: any) {
    const date = this.prependDate();

    console.log(`${date} ${chalk.redBright(`${message} ${args}`)}`);
  }

  warn(message: string, ...args: any) {
    const date = this.prependDate();

    console.log(`${date} ${chalk.hex("#FFA500")(`${message} ${args}`)}`);
  }

  info(message: string, ...args: any) {
    const date = this.prependDate();

    console.log(`${date} ${chalk.yellowBright(`${message} ${args}`)}`);
  }

  private prependDate() {
    const now = new Date();
    const date = utils.formatDate(now);
    return chalk.green(`[${date}]`);
  }
}

// (async () => {
//   const console = new Console("red", "bgGreen");
//   console.error("Hello World");
// })();
