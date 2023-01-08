const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    // default: 1,
    demandOption: true,
    describe: "Numero que se multiplicará",
  })
  .options("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Hasta que numero se multiplicará",
  })
  .options("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Muestra por consola la multiplicación",
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "La base tiene que ser un número";
    }
    if (isNaN(argv.limit)) {
      throw "El límite debe ser un número";
    }
    if (argv.limit <= 0) {
      throw "El límite no puede ser menor a 1";
    }

    return true;
  }).argv;

module.exports = argv;
