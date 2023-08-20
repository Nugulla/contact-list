/* LISTA DE CONTACTOS
Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
Crea una función para añadir un nuevo contacto a una lista
Crea una función para borrar un contacto existente de la lista
Crea una función para imprimir en consola los contactos presentes en la lista
Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros. 👍🏼⬇️
*/ 


const ListaConctactos= ["Ana Fuentes", "Jael Martinez", "Sandra Caballero"]

const conctactos =[
        {
          id: 1,
          nombres: "Ana",
          apellidos: "Zschocher",
          teléfono: 9999999999, 
          ubicaciones: {
              ciudad: "La Ceiba",
              dirección: "La Ceiba", 
          },
            
        },
        {
          id: 1,
          nombres: "Ana",
          apellidos: "Zschocher",
          teléfono: 9999999999, 
          ubicaciones: {
              ciudad: "La Ceiba",
              dirección: "La Ceiba", 
          },
            
        },

];

const agregarContacto=(id, nombres, apellidos, teléfono, ciudad, dirección)=>{
     const objectContact = {
          id:id,
          nombres:nombres,
          apellidos:apellidos,
          teléfono:teléfono,
          ciudad:ciudad,
          dirección:dirección,
     }
     /* agregar 
    
     Agregar contacto
    /* ListaConctactos.splice(1,0,objectContact)*/
     conctactos.push(objectContact)
  
}

/*Funcion Agregar contactos */

const eliminarContacto=(contactos)=>{
     /*Recorriendo el arreglo */
let indice = conctactos.findIndex(item => item== contactos)
console.log(indice);
conctactos.splice(indice, 1)

}

const imprimir = ()=>{
console.log("Lista de Contactos");
     console.log("__________________");
   for (const item of conctactos) {
    
     console.log(item);
     
   }
}

/* Mostrar conctactos*/

console.log(conctactos);
/* LLamar funcion agregarcontactos */
 agregarContacto(12345, "Amanda", "Martinez", 99999, "La Ceiba", "lejos")
 console.log(conctactos);


