import { useState } from "react";
import data from "./data.json";
import StudentList from "./components/StudentList";
import "./App.css";
import StudentForm from "./components/StudentForm";

function App() {
  const [studentList, setStudentList] = useState(data);
  const [classStrength, setClassStrength] = useState(0);

  const countStrength = () => {
    let copy = [...studentList];

    let count = 0;
    for (let key in copy) {
      if (copy[key].status == true) {
        ++count;
      }
    }
    setClassStrength(count);
  };

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
    // countStrength();
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
    // countStrength();
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
    // countStrength();
  };

  // countStrength();

  return (
    <div className="w-[100%] bg-gray-900">
      <div className="lg:w-[80%] w-[100%] px-40 py-40 bg-gray-900 dark:bg-gray-900">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
          Effortlessly Mark Attendance and{" "}
          <span class="text-blue-600 dark:text-blue-500">
            Streamline Your Classroom Management
          </span>{" "}
          with Attendee.
        </h1>
        <p class=" w-[80%] mb-10 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Gone are the days of manually taking attendance on paper or relying on
          students to remember to sign in. With our app, you can easily mark
          attendance for each of your classes with just a few taps on your
          smartphone or tablet.
        </p>


        <p class=" w-[80%] mb-10 text-2xl font-normal text-white lg:text-xl ">
          Total number of students present:
          <span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
            {classStrength}
          </span>
        <button
          type="button"
          onClick={countStrength}
          class=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
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
