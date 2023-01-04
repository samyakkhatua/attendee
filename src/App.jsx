import { useState } from 'react'
import data from './data.json';
import StudentList from './components/StudentList';
import './App.css'

function App() {
  const [studentList, setStudentList] = useState(data);

  

  return (
    <div className="App">
      <h1 className="">Attendee</h1>

      <StudentList studentList = {studentList} />
    </div>
  )
}

export default App
