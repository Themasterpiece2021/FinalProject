import proyect from "../models/proyect.js";

const saveProyect = async (req, res) => {
    if (!req.body.name || !req.body.description)
      return res.status(400).send({ message: "Incomplete data" });
  
    const proyectSchema = new proyect({
      userId: req.user._id,
      name: req.body.name,
      description: req.body.description,
      arrayCollaborators: [],
    });
  
    const result = await proyectSchema.save();
    return !result
      ? res.status(400).send({ message: "Error create proyect" })
      : res.status(200).send({ result });
  };

  
  
  export default {saveProyect,}



