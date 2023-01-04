import React from 'react'

const Student = ({student, handleCheckIn}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleCheckIn(e.currentTarget.id)
    }

  return (
    <div id={student.id} className={student.status ? "strike" : ""} onClick={handleClick}>
        {student.task}
    </div>
  )
}

export default Student