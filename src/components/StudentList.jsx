import React from "react";
import Student from "./Student";

const StudentList = ({ studentList, handleCheckIn, handleCheckOut }) => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg mx-0">
      <table class="w-[100%] text-sm text-left text-gray-400">
        <thead class="text-xs uppercase bg-gray-700 text-gray-400">
          <tr className="w-full">
            <th scope="col" class="px-6 py-3">
              Roll Number
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
            <th scope="col" class="px-6 py-3">
              CheckIn
            </th>
            <th scope="col" class="px-6 py-3">
              CheckOut
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
      

      {studentList.map((student) => {
        return (
          <>
            <Student student={student} handleCheckIn={handleCheckIn} handleCheckOut={handleCheckOut} />
          </>
        );
      })}
      </table>
    </div>
  );
};

export default StudentList;
