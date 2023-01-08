const { boolean } = require("yargs");
const { crearArchivoMultiplicar } = require("./helpers/multiplicar.js");
const argv = require("./config/yargs");
const colors = require("colors/safe");
// 5 x 1 = 5
//const base = 5;
//const limite = 15;
console.clear();

// const [, , arg3 = "--base=1"] = process.argv;
// const [, base = 1] = arg3.split("=");

//console.log(process.argv);
// console.log(argv);
// console.log("base:yargs", argv.base);
// console.log(base);

crearArchivoMultiplicar(argv.base, argv.limit, argv.show)
  .then((nombreArchivo) =>
    console.log(colors.green(`Archivo "${nombreArchivo}" creado'`))
  )
  .catch((error) => console.log(error));

// console.log("=========================");
// console.log(`=====  Tabla del ${base}  =====`);
// console.log("=========================");
// for (i = 1; i <= final; i++) {
//   salida += `${base} x ${i} = ${base * i}\n`;
// }
//console.log(salida);

// fs.writeFile(`tabla_${base}.txt`, salida, (error) => {
//   if (error) throw error;
//   console.log(`archivo "tabla_${base}.txt" creado`);
// });

//------------------------------------------------
// fs.writeFileSync(`tabla_${base}.txt`, salida);
// console.log(`archivo "tabla_${base}.txt" creado`);
//------------------------------------------------
