const fs = require("fs");
const colors = require("colors/safe");

const crearArchivoMultiplicar = async (base = 1, final = 10, show = false) => {
  let salida = "";
  let consola = "";

  try {
    for (i = 1; i <= final; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${colors.green("x")} ${i} ${colors.green("=")} ${
        base * i
      }\n`;
    }

    fs.writeFileSync(`./salida/tabla_${base}.txt`, salida);

    if (show) {
      console.log("\n");
      console.log(colors.rainbow(`oooooooooooooooooooooooooo`));
      console.log(colors.bold(`       Tabla del ${base}`));
      console.log(colors.rainbow(`oooooooooooooooooooooooooo`));
      console.log("\n");
      console.log(colors.bold(consola));
    }

    return `tabla_${base}.txt`;
    //console.log(`archivo "tabla_${base}.txt" creado`);
  } catch (error) {
    // console.log(error);
    // console.log(`No se pudo crear el archivo`);
    throw error;
  }
};

module.exports = {
  crearArchivoMultiplicar,
};
