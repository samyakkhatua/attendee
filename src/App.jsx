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

  let totalStudents = studentList.length;

  // const count = (totalStudents) => {
  //   while (totalStudents!=0) {
  //     let temp = 0
  //     if (student.status==true) {
  //       temp+=1
  //     }
  //     totalStudents-=1
  //   }
  //   return temp
  // }

  

  return (
    <div className="App">
      <h1 className="">Attendee</h1>
      <h3>No of students in class: {totalStudents}</h3>
      <StudentForm addStudent={addStudent} />

      <StudentList
        studentList={studentList}
        handleCheckIn={handleCheckIn}
        handleCheckOut={handleCheckOut}
      />
    </div>
  );
}

export default App;
