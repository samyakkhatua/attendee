import React from "react";
import Student from "./Student";

const StudentList = ({ studentList, handleCheckIn, handleCheckOut }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-20">
      <table class="w-[100%] text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="w-full">
            {/* <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th> */}
            <th scope="col" class="px-6 py-3">
              Roll No.
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
