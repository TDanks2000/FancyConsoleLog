import chalk, { BackgroundColor as Background, ForegroundColor } from "chalk";
import { utils } from "./utils";

type Color = typeof ForegroundColor;
type BackgroundColor = typeof Background;

class Console {
  color?: Color;
  background?: BackgroundColor;

  /**
   *
   * @param color color of the text
   * @param background background color of the text
   * @param foreground foreground color of the text
   */
  constructor(color?: Color, background?: BackgroundColor) {
    this.color = color;
    this.background = background;
  }

  log(message: any, ...args: any): any {
    if (this.color && !this.background) return console.log(chalk[this.color](message), ...args);

    if (this.background && !this.color)
      return console.log(chalk[this.background](message), ...args);

    if (this.color && this.background)
      return console.log(chalk[this.color][this.background](message), ...args);

    return console.log(message, ...args);
  }

  error(message: any, ...args: any) {
    const date = this.prependDate();

    console.log(`${date} ${chalk.redBright(`${message} ${args}`)}`);
  }

  warn(message: any, ...args: any) {
    const date = this.prependDate();

    console.log(`${date} ${chalk.hex("#FFA500")(`${message} ${args}`)}`);
  }

  info(message: any, ...args: any) {
    const date = this.prependDate();

    console.log(`${date} ${chalk.yellowBright(`${message} ${args}`)}`);
  }

  public setColor(color: Color) {
    this.color = color;
  }

  public setBackground(background: BackgroundColor) {
    this.background = background;
  }

  public setColors(color: Color, background?: BackgroundColor) {
    this.color = color;
    if (background) this.background = background;
  }

  private prependDate() {
    const now = new Date();
    const date = utils.formatDate(now);
    return chalk.green(`[${date}]`);
  }
}

export default Console;
