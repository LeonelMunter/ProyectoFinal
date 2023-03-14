# API 

### Configuración de la Base de Datos

Para configurar la base de datos, debe crear un archivo `.env` en la raíz del proyecto y proporcionar los siguientes valores:

```env
DB_URI=<URI de la base de datos MongoDB Atlas>

```
# Rutas
A continuación se muestran las rutas disponibles en el backend:

## Ruta houses

`GET /houses/` => Ruta para obtener todas las casas <br>
```json
{res:{array}}
```
`GET /houses/:id` => Ruta para obtener una casa por ID <br>
```json
{req:{params: id}
res:{object}}
```

`POST  /houses/` =>  Ruta para crear una nueva casa <br>
```json
{req:{
body:{
    name: { type: String, required: true }, , //Nombre de la propiedad
    propertyType:{ type: String, required: true }, , // Tipo de propiedad (casa, apartamento, terreno, etc.)
    numRooms: { type: Number, required: true }, // Número de habitaciones
    numBathrooms: { type: Number, required: true }, // Número de baños
    squareMeters: { type: Number, required: true }, // Tamaño de la propiedad en metros cuadrados
    surfaceArea: { type: String, required: true }, // Superficie que ocupa la propiedad
    price: { type: Number, required: true }, // Precio de venta de la propiedad
    plumbing: { type: String, required: true }, // Especificaciones técnicas de las cañerías
    roofing: { type: String, required: true }, // Especificaciones técnicas del techo
    walls: { type: String, required: true }, // Especificaciones técnicas de las paredes
    openings: { type: String, required: true }, // Especificaciones técnicas de las aberturas
    doors: { type: String, required: true }, // Especificaciones técnicas de las puertas
    project: { type: Schema.Types.ObjectId, ref: 'project' } // Referencia al proyecto al que pertenece la propiedad
}
}}
```
`PUT /houses/:id` => Ruta para actualizar 
una casa existente <br>

```json
{req:{
    params:id
    body:{
         name,
        propertyType,
        numRooms,
        numBathrooms,
        squareMeters,
        surfaceArea,
        price,
        plumbing,
        roofing,
        walls,
        openings,
        doors,
        project
    }
}}
```

`DELETE /houses/:id` => Ruta para eliminar una casa existente <br>
```json
{req:{
    params:id
}}


```

# Canal de Error

 Sabemos que a veces pueden ocurrir errores en el Backend en la api. Para ayudarnos a solucionarlos de manera más eficiente, hemos creado un canal de `back errors`. Por favor, si encuentras algún error o si hay una funcionalidad que falta, no dudes en reportarlo de manera específica y detallada en este canal para que podamos solucionarlo lo antes posible.

 ### Posibles errores en:

 - Rutas
 

### Canal

`Discord` https://discord.com/channels/1083437114873622558/1085202506365284402

