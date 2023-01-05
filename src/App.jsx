import { useState } from 'react'
import data from './data.json';
import StudentList from './components/StudentList';
import './App.css'
import StudentForm from './components/StudentForm';

function App() {
  const [studentList, setStudentList] = useState(data);

  const handleCheckIn = (id) => {
    let mapped = studentList.map(student => {
      return student.id == id ? { ...student, status: !student.status } : { ...student};
    });

    setStudentList(mapped);
  }

  const addStudent = (studentInfo) => {
    console.log(studentInfo.name + " " + studentInfo.roll);
    // let copy = [...studentList]

    // copy = [...copy, {id: studentList.length + 1, task: studentName, status:false}]
    // setStudentList(copy);
  }

  return (
    <div className="App">
      <h1 className="">Attendee</h1>

      <StudentList studentList = {studentList} handleCheckIn={handleCheckIn} />
      <StudentForm addStudent={addStudent}/>

    </div>
  )
}

export default App
