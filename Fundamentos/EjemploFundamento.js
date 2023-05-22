'use strict';
//Asignamos el nombre del producto
let producto1 = "Buquet"
let precio 
//Asignamos el valor a la variable declarada precio
precio = 5
console.log(producto1+" "+precio);
//Declaramos algunos productos como constantes
const producto2 = "Ramo rosas rojas"
const precioproducto2 =  15
const producto3 = "Ramo grande"
const precioproducto3 =  25
console.log("Número de letras del producto 1:",producto1.length);
console.log("Encotrar alguna palabra rojas del producto 2:",producto2.includes("rojas"));
console.log("Convertir a mayúsculas el producto 3:",producto3.toUpperCase());
console.log("Convertir a minusculas el producto 2:",producto2.toLowerCase());
console.log("Quitar espacios adelante y atrás del producto 2:",producto2.trim());
console.log("Reemplazar una palabra del producto 1:",producto1.replace('rojas','amarillas'));
//Reconocer el precio de los productos
console.log(typeof(precio),typeof(precioproducto2,typeof(precioproducto3)));
//Realizamos una suma de los productos
console.log("Suma del producto 1 con el producto 2: ",precio+precioproducto2);
//En el caso de realizar una factura si podiramos utilizar un condicional para ver si hay productos
// para agregar en la factura en el caso de no haberlos le solicitamos al 
//que agrege algun producto 
const Compras = []

// utilizando el condicional clásico
if (Compras.length===0)
{
    console.log("El carrito esta vacio! Puedes agregar un producto ahora :)")
}
//Utilizamos un bucle para que en el caso de que se hayan agregado 
//ya 15 productos al carrito notifique que ya no hay como agregar mas productos
const contador = 15

for (let i = contador; i >= 0; i--) {
    
    i <=0 ? console.log("El carrito esta lleno !! Se agregaron 15 productos"):console.log(i);
}