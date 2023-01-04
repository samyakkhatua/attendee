import React from 'react'

const Student = ({student}) => {
  return (
    <div className={student.complete ? "strike" : ""}>
        {student.task}
    </div>
  )
}

export default Student