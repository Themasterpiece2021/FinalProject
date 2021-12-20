import proyect from "../models/proyect.js";
import user from "../models/user.js"

const addCollaborators = async (req, res) => {
  
  if (!req.body.email)
    return res.status(400).send({ message: "Incomplete data" });
  const findCollaborators = await user.findOne({ email: req.body.email });
  if (!findCollaborators) {
    return res.status(400).send({ message: "User no registered" });
  } else {
    const collaboratorsadd = await proyect.findByIdAndUpdate(req.params["_id"], {
      $push: { 'arrayCollaborators': findCollaborators._id }
    });
    return res.status(200).send({ collaboratorsadd });
  }
};

const listCollaborators = async (req,res) =>{
const findCollaborators = await proyect.findOne({ _id: req.params._id });
let arrayColab=[];
if(!findCollaborators){
  return res.status(400).send({ message: "proyect no fount"})
}else{
 for (const key of findCollaborators.arrayCollaborators) {

   const collaboratorList = await user.findOne({ _id: key})
   arrayColab.push(collaboratorList.email)
   }
   return arrayColab.length === 0
   ? res.status(400).send({message:"Collaborators List void"})
   : res.status(200).send({arrayColab})}
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
  addCollaborators,
  listCollaborators
};
