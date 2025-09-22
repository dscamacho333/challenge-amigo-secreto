# Amigo Secreto — Mini aplicación en JavaScript  

Este proyecto es una práctica pensada para reforzar la lógica de programación y el uso del DOM en JavaScript. La idea es sencilla: agregar una lista de amigos y realizar un sorteo aleatorio para escoger un amigo secreto.  

---

## Qué hace esta aplicación  

- Permite escribir nombres en un campo de texto y añadirlos a una lista.  
- Muestra en pantalla todos los nombres que se van registrando de manera ordenada.  
- Realiza un sorteo que elige un nombre de manera aleatoria.  
- Valida que no se agreguen campos vacíos ni nombres repetidos.  
- Limpia automáticamente el campo de texto después de cada inserción.  

---

## Cómo está organizada la lógica  

El código está dividido en funciones para mantener la modularidad. Cada función cumple una responsabilidad concreta:  

- **esNombreValido** revisa que lo escrito no sea un campo vacío.  
- **esDuplicado** comprueba que el nombre no exista previamente en la lista.  
- **agregarAmigo** se encarga de añadir un nuevo nombre y actualizar la lista.  
- **sortearAmigo** selecciona un participante al azar utilizando Math.random.  
- **renderizarLista** dibuja los nombres actuales en el navegador.  
- **mostrarMensaje** presenta los resultados o advertencias en pantalla.  

Gracias a esta separación es más fácil leer, mantener y mejorar el código en el futuro.  

---

## Tecnologías utilizadas  

- HTML5 para la estructura de la página  
- CSS3 para el diseño y estilos  
- JavaScript para la lógica, validaciones y manipulación del DOM  


---

## Cómo usar la aplicación  

1. Abrir el archivo **index.html** en el navegador.  
2. Escribir un nombre en el campo de texto y presionar el botón **Añadir**.  
3. Repetir el proceso hasta completar la lista de participantes.  
4. Presionar el botón **Sortear amigo** para ver el resultado en pantalla.  
