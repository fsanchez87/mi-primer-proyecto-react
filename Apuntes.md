## Formularios

Los elementos de form tienen un estado interno.

Es conveniente tener una función en Javascript que se encargue del envío del formulario, y que tenga acceso a los datos que el usuario introdujo en el formulario. Esto se logra con **Componentes Controlados**


### Componentes controlados

En HTML, los elementos de formularios como los input, textarea y el select normalmente mantienen sus propios estados y los actualizan de acuerdo a la interacción del usuario.

En React, el estado mutable es mantenido normalmente en la propiedad estado de los componentes, y solo se actualiza con setState().

Podemos combinar ambos haciendo que el estado de React sea la “única fuente de la verdad”.
El componente React que representa un formulario también controla lo que sucede en ese formulario en la posterior entrada del usuario


## SASS y SCSS

SASS es un preprocesador de estilos, y según sus creadores, un CSS con superpoderes para crear
estilos que incluyen variables, métodos etc.

`yarn add node-sass` 
`npm install node-sass`


## Refs

Casos en los que necesita modificar imperativamente un hijo fuera del flujo de datos típico.

**Cuando usar Referencias**
- Controlar enfoques, selección de texto, o reproducción de medios.
- Activar animaciones imperativas.
- Integración con bibliotecas DOM de tercero

**Crear Ref**
Las referencias son creadas usando `React.createRef()` y agregándolas a elementos de React mediante el atributo `ref`

No hay que hacer `Document.querySelector()` hay que usar las `Ref`

`this.emailInput = React.createRef();`
`this.emailInput.current.focus();`




