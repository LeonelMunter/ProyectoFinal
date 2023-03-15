import employee from '../models/employee';

// GET /employees - Obtiene todos los empleados
export const getAllEmployees = async (req, res) => {
    try {
        const employees = await employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// GET /employees/:id - Obtiene un empleado por ID
export const getEmployeeById = async (req, res) => {
    try {
        const employeeId = await employee.findById(req.params.id);
        res.status(200).json(employeeId);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// POST /employees - Crea un nuevo empleado
export const createEmployee = async (req, res) => {
    const newEmployee = new employee(req.body);
    try {
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// PATCH /employees/:id - Actualiza un empleado existente
export const updateEmployee = async (req, res) => {
    try {
      const { id } = req.params;
      const employeeId = await employee.findById(id);
  
      if (!employeeId) {
        return res.status(404).json({ message: "Empleado no encontrado" });
      }
  
      // Actualizar el empleado con los nuevos datos
      const { 
        name,userName,avatar,phone,email,password,role
       } = req.body;
        employeeId.name = name;
        employeeId.userName=userName;
        employeeId.avatar=avatar;
        employeeId.email = email;
        employeeId.password = password;
        employeeId.phone = phone;
        employeeId.role = role;
  
      await employeeId.save();
  
      res.status(200).json(employeeId);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  }

// DELETE /employees/:id - Elimina un empleado existente
export const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await employee.findById(id);
        if (!employee) {
            return res.status(404).json({ message: "Empleado no encontrado" });
        }
        await employee.remove();
        res.status(200).json({ message: "Empleado eliminado" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}