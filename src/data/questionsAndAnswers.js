export const questionsAndAnswers = [
  {
    id: 0,
    question: '¿Que permite la implementación de un interceptor?',
    answer:
      'Los interceptores permiten interponerse en peticiones y respuestas https, con el fin de transformar o agregar información antes de continuar. Un ejemplo del empleo de un interceptor es cuando se necesita manejar peticiones con autenticación, ya que por lo general se envía un token en la cabecera de la petición.'
  },
  {
    id: 1,
    question: '¿Cuándo implementar un guard?',
    answer:
      'Un guard se debe implementar cuando necesitas proteger una ruta de una aplicación, Con los guards podemos controlar el permitir o denegar un acceso a alguna vista de nuestra aplicación, ya que son middlewares que se ejecutan antes y en donde podemos definir la lógica para determinar si se carga o no dicha ruta.'
  },
  {
    id: 2,
    question: '¿Que es una prueba unitaria?',
    answer:
      'Una prueba unitaria consiste en aislar una parte del código y someterlo a test enfocados en validar todas las funcionalidades que pueda ejecutar dicha parte del código. Esto con el fin de eliminar la mayoría de bugs, y mantener un buen código, modular y estructurado a medida que el proyecto avanza.'
  },
  {
    id: 3,
    question: '¿Que es una prueba de servicio?',
    answer:
      'Consiste en generar test dirigidos a comprobar el correcto funcionamiento de un servicio, los servicios son clases que se encargan de acceder a los datos para entregarlos a los componentes, por lo que se pueden probar utilizar unit-test.'
  },
  {
    id: 4,
    question: '¿Que es una prueba de componente?',
    answer:
      'Consiste en separar un componente de la aplicación, y conectarlo en un entorno de prueba adaptado específicamente para el test. Al un componente combinar una plantilla HTML y una clase de Typescript se debe probar que funcionen juntos como se espera.'
  },
  {
    id: 5,
    question: 'React Hooks',
    answer:
      'Los React Hooks nos permiten lograr una programación más funcional en nuestra aplicación React, debido a que ya podemos tener estados dentro de nuestro y acceder a otras características en nuestros componentes función, Hooks como por ejemplo useState para tener estados o useEffect para manejar los ciclos de vida de un componente. El nombre hook que traduce gancho es debido a que nos permite enganchar componentes funcionales a todas las características que ofrece React sin tener la necesidad de crear un componente clase.'
  }
]
