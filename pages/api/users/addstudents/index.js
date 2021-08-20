import Class from "../../../../data/models/Class";
import User from "../../../../data/models/User";
import dbConnect from "../../../../utils/dbConnect";

export default async function addstudents(req, res) {
  const {
    query: {},
    method,
  } = req;
  dbConnect();

  switch (method) {
    case "POST":
      const numOfStudents = req.body.numOfStudents;
      const className = req.body.className;

      const classId = await Class.find({ name: className }).exec();

      let newUsers = [];
      for (let iteration = 1; iteration <= numOfStudents; iteration++) {
        newUsers.push({
          absent_number: iteration,
          username: `${className}_${iteration}`,
          password: `${className}_${iteration}`,
          role: "STUDENT",
          class: classId[0]["name"],
        });
      }

      try {
        User.insertMany(newUsers);
      } catch (error) {
        console.error(`ERROR when add students`, error);
        res.status(400).json({ success: false });
      }
      res.status(200).json({ success: true });
      break;

    default:
      break;
  }
}
