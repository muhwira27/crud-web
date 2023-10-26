import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Student = db.define('Student', {
  student_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  semester: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  credit_course: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gpa: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
}, {
  freezeTableName: true
});

export default Student;

(async () => {
  try {
    await db.sync();
    console.log('The Student table has been created or already exists.');
  } catch (error) {
    console.error('There is an error:', error);
  }
})();