import React from 'react'

const Student = ({student, handleCheckIn}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleCheckIn(e.currentTarget.id)
    }

  return (
    <div>
        <div 
            id={student.id} 
            // className={student.status ? "strike" : ""} 
            onClick={handleClick}
        >
            {student.name}
            {student.roll}
            {student.status? "true" : "false"}

            
        </div>

        {/* <div id={student.id}>
            {student.status == "true" && 
                <>
                    {console.log(student.name)}
                </>
                }
        </div> */}
    </div>
  )
}

export default Student