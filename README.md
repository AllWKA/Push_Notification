
### PROYECTO NOTIFICACIONES PUSH  
  
### BRYAN JARAMILLO BALDEÓN.  
  
  
## ÍNDICE  
  
- DESCRIPCIÓN  
- PILA TECNOLÓGICA  
- MODELO E/R  
- MODELO DE DATOS UML  
- DESCRIPCIÓN DE CADA TABLA/ENTIDAD  
- SGBD  
- DIAGRAMA DE LAS TABLAS Y RELACIONES SEGÚN  
- Casos de Uso  
- Mockups  
- Implementación del código  
- Descripción del código  
- Manual de la Api  
  
  
**Descripción**  
  
El proyecto consistirá en un portal para enviar notificaciones push a  
distintos clientes de distintas aplicaciones. Estará compuesto por:  
  
- Un portal con Html para poder gestionar las Notificaciones como  
administrador.  
- Una api con nodejs para gestionar el servidor.  
- Una base de datos en Mysql para guardar los datos necesarios.  
- Una pequeña aplicación de prueba que reciba esas notificaciones  
con Ionic que tratará sobre noticias.  
  
**Pila tecnológica:**  
  
- Mysql para la Base de datos usando MySQL Workbench.  
<img src="https://i.imgur.com/ZhZLjg6.jpg" />  
  
- Servidor con NodeJS con express para las peticiones a la base de datos.  
<img src = "https://i.imgur.com/OmAqyC8.jpg"/>  
  
  
- Sequelize como ORM para NodeJS.  
- Consing para la organización dentro de NodeJS.  
- Babel para utilizar los nuevos estándares de JavaScript en node, solamente durante el desarrollo, luego se compilará en el estandar que NodeJs entiende para poder utilizarlo.  
- Handlebars para implementar el portal HTML de los administradores.  
- Bootstrap 4 para la parte visual de la página web.  
- JavaScript para el back-end de la página.  
  
- Ionic para la aplicación de prueba, que recivirá las notificaciones.Consistirá en una aplicación de noticias.  
<img src = "https://i.imgur.com/EhrOjYT.png"/>  
  
  
◦ HttpClient para hacer las peticiones dentro de ionic.  
  
**Modelo E/R:**  
<img src = "https://i.imgur.com/hGUfDzk.png"/>  
  
**Modelo de Datos UML:**  
<img src = "https://i.imgur.com/V59NIXP.png"/>  
  
**Descripción de cada entidad/tabla:**  
  
- Se guardará en users:  
  
- Su identificador que será un entero autoincrementable.  
- La id de la app a la que pertenece ese usuario, que será un int y  
- clave extrangera.  
- Su nombre que será un Varchar de longitud máxima 255  
- caracteres.  
- Su contraseña que será un Varchar de longitud máxima 45  
- caracteres.  
- Su estado actual que será de tipo enumerado teniendo dos  
- posibilidades:  
- active.  
- inactive.  
- Su email que será un Varchar de longitud máxima 255  
- caracteres.  
- Los datos sobre la creación del usuario y la última vez que se  
- actualizó con una variable de tipo date.  
  
<img src = "https://i.imgur.com/T7bAvco.png"/>  
  
- Se guardará en apps:  
- Su identificador que será un entero autoincrementable.  
- Su nombre que será un Varchar de longitud máxima 100 caracteres.  
- La id del productOwner de esa aplicación como un entero que además es una clave extrangera.  
- Los datos sobre la creación del usuario y la última vez que se actualizó con una variable de tipo date.  
<img src = "https://i.imgur.com/msZMsKn.png"/>  
  
  
- Se guardará en admins:  
- Su identificador que será un entero autoincrementable.  
- Su usuario que será un Varchar de longitud máxima 45  
- caracteres.  
- Su contraseña que será un Varchar de longitud máxima 45  
- caracteres.  
- Los datos sobre la creación del usuario y la última vez que se  
- actualizó con una variable de tipo date.  
<img src = "https://i.imgur.com/mjyOpvB.png"/>  
  
- Se guardará en productowners:  
- Su identificador que será un entero autoincrementable.  
- Su nombre que será un Varchar de longitud máxima 255 caracteres.  
- Sus apellidos si es necesario que serán dos Varchar de longitud máxima 255 caracteres cada uno.  
- Su código postal que será un entero.  
- Los datos sobre la creación del usuario y la última vez que se actualizó con una variable de tipo date.  
  
<img src = "https://i.imgur.com/RrJB6R0.png"/>  
  
**Diagrama de las tablas y relaciones según el SGBD:**  
<img src = "https://i.imgur.com/GBQIIOe.png"/>  
**Casos de uso.**  
  
Ionic:  
<img src = "https://i.imgur.com/mL4pebT.png"/>  
  
Web Admin en Nodejs:  
<img src = "https://i.imgur.com/w1UpH72.png"/>  
  
**Mockups:**  
  
Ionic:  
<img src = "https://i.imgur.com/ec3kkQs.png"/>  
  
Web Admin:  
<img src = "https://i.imgur.com/5lrLF3c.png"/>  
  
**Implementación del código:**  
  
- Tecnología para implementar el FrontEnd móvil. He utilizado Ionic ya que fue lo acordado con la empresa, además me parece muy fácil de implementar y tiene recursos web para testear la app.  
- Tecnología para implementar el FrontEnd Web. He utilizado HTML y CSS, además de las librerías proporcionadas por Bootstrap 4, para poder implementar la página de manera más facil, rápida y responsive.  
- Tecnología para implementar el BackEnd. He utilizado NodeJs ya que también fue lo acordado con la empresa, además me parece una herramienta muy poderosa por la cantidad de módulos disponibles.  
  
Estas son las tecnologías vistas en clase, faltan algunas propias de Java,  
pero implementamos lo mismo que con Xamarín, por lo que las valoro igual.  
  
- Tipos de navegación:  
- Vista root, para navegar entre el Log In y la pantalla principal de noticias.  
- Tabs, para navegar entre los distintos tipos de noticias.  
- Librerías utilizadas:  
- NodeJS:  
- hbs: Pagina Web del Administrador.  
- BodyParser: Manejo de Jsons.  
- Path: Concatenar urls para que sean universales, que puedan usarse  
- en cualquier dispositivo.  
- Exprees: Algún orden en la estructura del proyecto.  
- Cors: Conexiones.  
- Consign: Organización dentro del proyecto.  
- Babel: Para poder desarrollar utilizando los Ecmascript actuales.  
- HTML:  
- XMLHttpRequest: Peticiones de la página al servidor de Node.  
- Bootstrap 4: Para la parte visual de la página.  
  
  
**Descripción de la implementación del código, cómo se realiza el mapeo  
ORM, las sentecias de consultas.**  
  
Para el mapeo he utilizado sequelize, para ello he tenido que crear los  
modelos de las tablas y especificar sus relaciones, por ejemplo:  
<img src = "https://i.imgur.com/ovUtmqw.png"/>  
  
Este es un ejemplo de Uri para acceder a los usuarios de una app en  
concreto, aprovechando los metodos ( app.getUsers() )proporcionados por  
Sequelize:  
<img src = "https://i.imgur.com/idOR45k.png"/>  
  
  
**Manual de la Api de NodeJs**  
  
Api User: https://documenter.getpostman.com/view/5508244/Rzfnj6Eo  
  
Api Admin: https://documenter.getpostman.com/view/5508244/Rzfnj6KA  
  
Api App: https://documenter.getpostman.com/view/5508244/Rzfnj6PZ  
  
Api Owner: https://documenter.getpostman.com/view/5508244/Rzfnj6Pe
