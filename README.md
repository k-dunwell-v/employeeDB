# employeeDB
Inserción y consulta de empleados || API .net Core + SQL + React.

# how to run
El proyecto fue realizado en Visual Studio 2022 y puede ser ejecutado mediante el archivo de proyecto "employeeDB.sln". Adicionalmente, es importante colocar el contenido de SQL LOCAL BACKUP en la carpeta correspondiente, para así iniciar simultaneamente el programa y el SQL manager.

# CONTENIDO
## estructura de database
Tabla en SQL (tblEmployee) con los siguientes campos:
- employeeID (numérico, auto-incremental, llave primaria)
- Documento (numérico)
- Nombre (texto)
- Apellidos (texto)
- Teléfono (texto)
- E-Mail (texto)
- Dirección (texto)
- Género (M o F) (texto)

## backend: API .net core
- “guardar” Recibe como parámetro todos los datos necesarios para crear un registro en la tabla “tblEmployee”, haciendo a su vez validación de E-mail.
- “buscar” Trae una lista completa de empleados.
- “buscar/{employeName?}”: Recibe un parámetro “employeeName” de tipo string, el cual sirve para filtrar los “Employees” que coincidan con el nombre o apellido a partir del valor ingresado.

## frontend: React
Interfaz de usuario, donde es posible visualizar una lista de empleados con su respectiva casilla de búsqueda y un formulario para ingresar nuevos empleados.
