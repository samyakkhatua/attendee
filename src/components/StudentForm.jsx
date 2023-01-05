import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    roll: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudentInfo((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(studentInfo);

    addStudent(studentInfo);
    setStudentInfo({ name: "", roll: "" });
  };

  return (
    <div className="mb-10 ">
      <form className="flex gap-4 " onSubmit={handleSubmit}>
        <div class="mb-2">
          <input
            name="name"
            value={studentInfo.name}
            onChange={handleChange}
            type="text"
            placeholder="Student Name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div class="mb-4">
          <input
            name="roll"
            value={studentInfo.roll}
            onChange={handleChange}
            type="text"
            placeholder="Roll Number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
