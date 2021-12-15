import proyect from "../models/proyect.js";

const saveProyect = async (req, res) => {
    if (!req.body.name || !req.body.description)
      return res.status(400).send({ message: "Incomplete data" });
  
    const proyectSchema = new proyect({
      userId: req.user._id,
      name: req.body.name,
      description: req.body.description,
      arrayCollaborators: [],
      dbStatus: true
    });
  
    const result = await proyectSchema.save();
    return !result
      ? res.status(400).send({ message: "Error create proyect" })
      : res.status(200).send({ result });
  };

  const listProyectAdmin = async (req, res) => {
    const ProyectList = await proyect.find({ userId: req.user._id });
    return ProyectList.length === 0
      ? res.status(400).send({ message: "You have no assigned Proyect" })
      : res.status(200).send({ ProyectList });
  };

  const listProyectColab= async (req, res) => {
    const ProyectListColab = await proyect.find({ arrayCollaborators: req.user._id });
    return ProyectListColab.length === 0
      ? res.status(400).send({ message: "You have no assigned Proyect" })
      : res.status(200).send({ ProyectListColab });
  }

  const updateProyect = async (req, res) => {
    if (!req.body._id || !req.body.name)
      return res.status(400).send({ message: "Incomplete data" });

    let arrayColab = []
    const Colab= proyect.findOne({_id: req.params["_id"]})
    arrayColab=Colab.arrayCollaborators
    
    const proyectUpdate = await proyect.findByIdAndUpdate(req.body._id, {
      name: req.body.name,
      arrayCollaborators: arrayColab,
    });
  
    return !proyectUpdate
      ? res.status(400).send({ message: "Proyect not found" })
      : res.status(200).send({ proyectUpdate });
  };
  
  const deleteProyect = async (req, res) => {
    const proyectDelete = await proyect.deleteMany(req.params._id);
    return !proyectDelete
      ? res.status(400).send({ message: "Proyect not found" })
      : res.status(200).send({ message: "Proyect deleted" });
  };
  
  export default {saveProyect, listProyectAdmin, listProyectColab, updateProyect, deleteProyect }