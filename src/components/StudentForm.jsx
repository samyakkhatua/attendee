import React, {useState} from 'react'

const StudentForm = ({addStudent}) => {
    const [studentInfo, setStudentInfo] = useState({
        name: "",
        roll: "",
    })
    // const [studentName, setStudentName] = useState("")
    // const [studentRoll, setStudentRoll] = useState()

    // const handleNameChange = (e) => {
    //     setStudentName(e.currentTarget.value)
    //     // setStudentInfo({name: studentName})
    // }
    // const handleRollChange = (e) => {
    //     setStudentRoll(e.currentTarget.value)
    //     // setStudentInfo({roll: studentRoll})
    // }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setStudentInfo((preValue) => {
            return {...preValue, [name]: value}
        })
    }

    console.log(studentInfo);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // addStudent(studentName);
        // setStudentName("");

    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input 
                name='name' 
                // value={studentName} 
                onChange={handleChange} 
                type="text"
            />
            <input name='roll' 
            // value={studentRoll} 
            onChange={handleChange} type="text"/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default StudentForm