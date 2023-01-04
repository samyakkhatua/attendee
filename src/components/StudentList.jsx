import React from 'react'
import Student from './Student'

const StudentList = ({studentList, handleCheckIn}) => {
  return (
    <div>
        {
            studentList.map(student => {
                return (
                    <Student student={student} handleCheckIn={handleCheckIn}  />
                )
            })
        }
    </div>
  )
}

export default StudentList