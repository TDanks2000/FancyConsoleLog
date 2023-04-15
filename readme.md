# Fancy Console Log

Fancy Console Log is a simple library that allows you to log messages to the console in a more readable format.

<br />

## Installation

```bash
# npm
npm install @tdanks2000/fancyconsolelog
```

```bash
# yarn
yarn add @tdanks2000/fancyconsolelog
```

## Usage

```ts
import Console from "@tdanks2000/fancyconsolelog";

// logs a message
const console = new Console();
Console.log("Hello World!");

// logs a message with a custom color
const console = new Console("red");
Console.log("Hello World!");

// logs a message with a custom color and background color
const console = new Console("red", "bgBlue");
Console.log("Hello World!");

// log a error message
const console = new Console();
Console.error("Hello World!");

// log a warning message
const console = new Console();
Console.warn("Hello World!");

// log a info message
const console = new Console();
Console.info("Hello World!");
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
