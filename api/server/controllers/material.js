import material from '../models/material';

//GET /material - Obtiene todas las material
export const getAllMaterials = async (req, res) => {
    try {
        const materials = await material.find();
        res.status(200).json(materials);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//GET /material/:id - Obtiene una material por ID
export const getMaterialById = async (req, res) => {
    try {
        const materials = await material.findById(req.params.id);
        res.status(200).json(materials);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//POST /material - Crea una nueva material
export const createMaterial = async (req, res) => {
    const newMaterial = new material(req.body);
    try {
        await newMaterial.save();
        res.status(201).json(newMaterial);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//PATCH /material/:id - Actualiza una material existente
export const updateMaterial = async (req, res) => {
    try {
      const { id } = req.params; // obtener el id del material a actualizar

      const { 
        name,
        description,
        unitMeasure,
        costPerUnit,
        image
       } = req.body; // obtener los nuevos datos del material desde el cuerpo de la petición
  
      // verificar si el material existe en la base de datos
      const materials = await material.findById(id);
      if (!materials) {
        return res.status(404).json({ mensaje: 'No se encontró el material especificado' });
      }
  
      // actualizar los campos del material existente con los nuevos datos
        materials.name = name;
        materials.description = description;
        materials.unitMeasure = unitMeasure;
        materials.costPerUnit = costPerUnit;
        materials.image = image;
  
      // guardar los cambios en la base de datos
      const updateMaterials = await materials.save();
  
      // responder con el material actualizado
      res.json(updateMaterials);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Ocurrió un error al actualizar el material' });
    }
  };

//DELETE /material/:id - Elimina una material existente
export const deleteMaterial = async (req, res) => {
    try {
        const { id } = req.params;
        const materials = await material.findById(id);
        if (!materials) {
            return res.status(404).json({ message: "Material no encontrado" });
        }
        await materials.remove();
        res.status(200).json({ message: "Material eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
