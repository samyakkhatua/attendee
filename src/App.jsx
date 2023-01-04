import { useState } from 'react'
import data from './data.json';
import StudentList from './components/StudentList';
import './App.css'

function App() {
  const [studentList, setStudentList] = useState(data);

  const handleCheckIn = (id) => {
    let mapped = studentList.map(student => {
      return student.id == id ? { ...student, status: !student.status } : { ...student};
    });

    setStudentList(mapped);
  }

  return (
    <div className="App">
      <h1 className="">Attendee</h1>

      <StudentList studentList = {studentList} handleCheckIn={handleCheckIn} />
    </div>
  )
}

export default App
