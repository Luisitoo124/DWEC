// Objeto que centraliza todos los mensajes de texto y errores de la aplicación.
// Así, si queremos cambiar un texto, solo hay que modificarlo aquí.
export const MENSAJES = {
  MENOR: "Menor de edad",
  ACTIVO: "Trabajando o estudiando",
  JUBILADO: "Jubilado",
  NO_POSITIVA: "La edad debe ser un número positivo",
  CON_DECIMALES: "La edad no puede tener decimales",
  NO_NUMERO: "El valor debe ser un número válido",
};

/**
 * Recibe una edad (número) y la clasifica según su rango,
 * previa validación de que sea un número entero positivo.
 */
export function clasificarEdad(edad) {
  // Comprobamos que sea de tipo 'number' y que no sea NaN (Not a Number)
  if (typeof edad !== 'number' || Number.isNaN(edad)) throw new Error(MENSAJES.NO_NUMERO);
  
  // Comprobamos que sea un número entero (sin decimales)
  if (!Number.isInteger(edad)) throw new Error(MENSAJES.CON_DECIMALES);
  
  // Comprobamos que no sea un número negativo
  if (edad < 0) throw new Error(MENSAJES.NO_POSITIVA);

  // Clasificación según la edad validada
  if (edad <= 17) return MENSAJES.MENOR;
  if (edad <= 65) return MENSAJES.ACTIVO;
  return MENSAJES.JUBILADO;
}

/**
 * Recibe un texto (por ejemplo, de un input de usuario) 
 * y lo convierte a número después de validarlo.
 */
export function parseEdad(texto) {
  // Validamos que sea un string, que no esté vacío (o solo espacios) 
  // y que al convertirlo a número no nos dé NaN
  if (typeof texto !== 'string' || !texto.trim() || Number.isNaN(Number(texto))) {
    throw new Error(MENSAJES.NO_NUMERO);
  }
  
  // Si pasa las validaciones, lo devolvemos convertido en número
  return Number(texto);
}
