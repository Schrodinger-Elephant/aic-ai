import Class from "../../../data/models/Class";
import dbConnect from "../../../utils/dbConnect";

export default async function classes(req, res) {
  const {
    query: {},
    method,
  } = req;

  dbConnect();
  switch (method) {
    case "POST":
      const name = req.body.name;
      try {
        await Class.create({
          name: name,
        });
      } catch (error) {
        console.error(`ERROR in add class`, error);
        res.status(400).json({ success: false });
      }
      res.status(200).json({ success: true });
      break;

    default:
      break;
  }
}
