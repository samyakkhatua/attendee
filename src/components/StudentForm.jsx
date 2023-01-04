import React, {useState} from 'react'

const StudentForm = ({addStudent}) => {
    const [studentInfo, setStudentInfo] = useState({
        name: "",
        roll: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setStudentInfo((preValue) => {
            return {...preValue, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(studentInfo);
        
        addStudent(studentInfo);
        setStudentInfo({name: "", roll:"",})

    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input 
                name='name' 
                value={studentInfo.name} 
                onChange={handleChange} 
                type="text"
                placeholder='name'
            />
            <input 
                name='roll' 
                value={studentInfo.roll} 
                onChange={handleChange} 
                type="text"
                placeholder='roll'
            />

            <button>Submit</button>
            
        </form>
    </div>
  )
}

export default StudentForm