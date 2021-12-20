import proyect from "../models/proyect.js";
import mail from "./mail.js";

/**
 * el array con el ultimo colaborador añadido
 */
const addCollaborators = async (req, res) => {
  let array = [];
  if (!req.body.email)
    return res.status(400).send({ message: "Incomplete data" });
  const findCollaborators = await proyect.findOne({ email: req.body.email });
  if (!findCollaborators) {
    return res.status(400).send({ message: "User no registered" });
  } else {
    array.append(findCollaborators._id);
    mail.sendCollaboratorsMail(req.body.email,findCollaborators.name);
    return res.status(200).send({ array });
  }
};

const listCollaborators = async (req,res) =>{
 for (const key in this.addCollaborators()) {
   const collaboratorList = await proyect.findOne({ _id: key})
   const collaboratorEmail = collaboratorList.email;
   return (!collaboratorEmail)
   ? res.status(400).send({message:"Collaborators List void"})
   : res.status(200).send({collaboratorEmail})
   }
 };

/**
 *Este metodo recibe el array listo para ser tratado y actualizado en el proyecto de la BD
 **/
const updateCollaborators = async (req, res) => {
  let arrayColab = this.addCollaborators();

  const collaboratorsUpdate = proyect.findByIdAndUpdate(req.params["_id"], {
    arrayCollaborators: arrayColab,
  });

  return !collaboratorsUpdate
    ? res.status(400).send({ message: "Proyect no exist" })
    : res.status(200).send({ collaboratorsUpdate });
};

const saveProyect = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send({ message: "Incomplete data" });
  const proyectSchema = new proyect({
    userId: req.user._id,
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
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

const listProyectColab = async (req, res) => {
  const ProyectListColab = await proyect.find({
    arrayCollaborators: req.user._id,
  });
  return ProyectListColab.length === 0
    ? res.status(400).send({ message: "You have no assigned Proyect" })
    : res.status(200).send({ ProyectListColab });
};

const updateProyect = async (req, res) => {
  if (!req.body.name)
    return res.status(400).send({ message: "Incomplete data" });

  const proyectUpdate = await proyect.findByIdAndUpdate(req.body._id, {
    name: req.body.name
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

export default {
  saveProyect,
  listProyectAdmin,
  listProyectColab,
  updateProyect,
  deleteProyect,
  updateCollaborators,
  addCollaborators,
  listCollaborators
};
