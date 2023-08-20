/* LISTA DE CONTACTOS
Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
Crea una función para añadir un nuevo contacto a una lista
Crea una función para borrar un contacto existente de la lista
Crea una función para imprimir en consola los contactos presentes en la lista
Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros. 👍🏼⬇️
*/ 


const ListaConctactos= ["Ana Fuentes", "Jael Martinez", "Sandra Caballero"]

const agregarContacto=(contacto)=>{
     /* agregar 
    // ListaConctactos.push(contacto)
     /*Agregar contacto*/
     ListaConctactos.splice(2,0,contacto)
}

/*Funcion Agregar contactos */
const eliminarContacto=(contacto)=>{
     /*Recorriendo el arreglo */
let indice = ListaConctactos.findIndex(item => item== contacto)
console.log(indice);
ListaConctactos.splice(indice, 1)

}

const imprimir = ()=>{

     console.log("__________________");
   for (const item of ListaConctactos) {
     console.log(item);
     
   }
}

/* Mostrar conctactos*/

imprimir()
/* LLamar funcion agregarcontactos */
agregarContacto("Jassiel Gutierrez")
imprimir()
eliminarContacto("Sandra Caballero")
imprimir()
