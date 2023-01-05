import { useState } from "react";
import data from "./data.json";
import StudentList from "./components/StudentList";
import "./App.css";
import StudentForm from "./components/StudentForm";

function App() {
  const [studentList, setStudentList] = useState(data);

  var today = new Date();
  let currTime =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const handleCheckIn = (id) => {
    let mapped = studentList.map((student) => {
      // return student.id == id ? {...student, status: !student.status } : { ...student};

      if (student.id == id) {
        return { ...student, status: !student.status, checkin: currTime };
      } else {
        return { ...student };
      }
    });
    setStudentList(mapped);
  };

  const handleCheckOut = (id) => {
    let mapped = studentList.map((student) => {
      // return student.id == id
      //   ? { ...student, status: !student.status }
      //   : { ...student };
      if (student.id == id) {
        return { ...student, status: !student.status, checkout: currTime };
      } else {
        return { ...student };
      }
    });

    setStudentList(mapped);
  };

  const addStudent = (studentInfo) => {
    let copy = [...studentList]

    copy = [...copy, {id: studentList.length + 1, name: studentInfo.name, roll:studentInfo.roll, status:true, checkin:currTime}]
    setStudentList(copy);
  };

  return (
    <div className="App">
      <h1 className="">Attendee</h1>

      <StudentList
        studentList={studentList}
        handleCheckIn={handleCheckIn}
        handleCheckOut={handleCheckOut}
      />
      <StudentForm addStudent={addStudent} />
    </div>
  );
}

export default App;
