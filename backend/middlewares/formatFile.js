const upload = async (req, res, next) => {
    if (Object.keys(req.files).length === 0) {
      next();
    } else {
      if (!req.files.name || !req.files.name) {
        next();
      } else {
        if (req.files.type) {
          const type = req.files.type;
          if (
            type !== "image/png" &&
            type !== "image/jpg" &&
            type !== "image/jpeg" &&
            type !== "image/gif" &&
            type !=  "image/pdf"
          ) {
            return res.status(400).send({
              message: "Invalid image format: only .png .jpg. jpeg .gif",
            });
          } else {
            next();
          }
        }
      }
    }
  };
  
  export default upload;
  