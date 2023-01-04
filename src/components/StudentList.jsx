import React from 'react'
import Student from './Student'

const StudentList = ({studentList}) => {
  return (
    <div>
        {
            studentList.map(student => {
                return (
                    <Student student={student} />
                )
            })
        }
    </div>
  )
}

export default StudentList