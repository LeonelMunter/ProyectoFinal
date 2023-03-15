import house from '../models/house'
import client from '../models/client';
import buy from '../models/buy';
import employee from '../models/employee';
import material from '../models/material';
import project from '../models/project';

const models=[
    house,
    client,
    buy,
    employee,
    material,
    project,

]


export const getModelKeys = () => {
    console.log("MODEL KEYS")
    models.map((model,i)=>{
        const keys = Object.keys(model.schema.obj); // Obtener las keys del objeto
        const propertyKeys = keys.filter(key => key !== '_id' && key !== '__v').join(","); // Filtrar las keys que no queremos
        console.log((models[i]).modelName," : [ ", propertyKeys,"]") 
    })
  
    
}

