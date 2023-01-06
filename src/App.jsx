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
    let copy = [...studentList];

    copy = [
      ...copy,
      {
        id: studentList.length + 1,
        name: studentInfo.name,
        roll: studentInfo.roll,
        status: true,
        checkin: currTime,
      },
    ];
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
    <div className="w-[100%] bg-gray-900">

    <div className="lg:w-[80%] w-[100%] px-40 py-40 bg-gray-900 dark:bg-gray-900">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
      Effortlessly Mark Attendance and{" "}
        <span class="text-blue-600 dark:text-blue-500">Streamline Your Classroom Management</span>{" "}
        with  Attendee.
      </h1>
      <p class=" w-[80%] mb-10 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Gone are the days of manually taking attendance on paper or relying on
        students to remember to sign in. With our app, you can easily mark
        attendance for each of your classes with just a few taps on your
        smartphone or tablet.
      </p>

      <StudentForm addStudent={addStudent} />

      <StudentList
        studentList={studentList}
        handleCheckIn={handleCheckIn}
        handleCheckOut={handleCheckOut}
      />
    </div>
    </div>
  );
}

export default App;
