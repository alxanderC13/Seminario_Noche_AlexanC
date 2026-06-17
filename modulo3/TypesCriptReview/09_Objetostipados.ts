

// objetos.ts

// Declarar el tipo del objeto
const persona: { nombre: string; catedral: string; activo: boolean; horario: string } = {
  nombre: "Ana García",
  catedral: "Catedral de Madrid",
  activo: true,
  horario: "08:00 - 18:00"
};

console.log(persona.nombre);
console.log(persona.catedral);
console.log(persona.activo);
console.log(persona.horario);

// TypeScript avisa si falta una propiedad o tiene el tipo incorrecto
// const persona2: { nombre: string; edad: number } = {
//   nombre: "Luis"
//   // ❌ Error: falta 'edad'
// };

// Propiedad opcional — se añade ? después del nombre
const producto: { nombre: string; precio: number; descuento?: number } = {
  nombre: "Laptop",
  precio: 999
  // descuento es opcional, no hace falta incluirlo
};

console.log(producto.descuento); // undefined — no se lanza error