import project from '../models/project.js';

// GET /projects - Obtiene todos los proyectos
export const getAllProjects = async (req, res) => {
    try {
        const projects = await project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// GET /projects/:id - Obtiene un proyecto por ID
export const getProjectById = async (req, res) => {
    try {
        const projectId = await project.findById(req.params.id);
        res.status(200).json(projectId);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// POST /projects - Crea un nuevo proyecto
export const createProject = async (req, res) => {
    const newProject = new project(req.body);
    try {
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// PATCH /projects/:id - Actualiza un proyecto existente
export const updateProject = async (req, res) => {

    try {
      const { id } = req.params;
      const project = await project.findById(id);
  
      if (!project) {
        return res.status(404).json({ message: "Proyecto no encontrado" });
      }
  
      // Actualizar el proyecto con los nuevos datos
      const { 
        name,
        description,
        startDate,
        endDate,
        client,
        employees
       } = req.body;
        project.name = name;
        project.description = description;
        project.startDate = startDate;
        project.endDate = endDate;
        project.client = client;
        project.employees = employees;
        await project.save();
        res.status(200).json(project);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// DELETE /projects/:id - Elimina un proyecto existente
export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await project.findById(id);
        if (!project) {
            return res.status(404).json({ message: "Proyecto no encontrado" });
        }
        await project.remove();
        res.status(200).json({ message: "Proyecto eliminado" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}