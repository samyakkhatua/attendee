import React from "react";

const Student = ({ student, handleCheckIn }) => {

  const handleClick = (e) => {
    e.preventDefault(e.currentTarget.id);
    // console.log(e.currentTarget.id);
    handleCheckIn(e.currentTarget.id);
  };

  return (
    
    <tr class="w-full bg-white text-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      
      <td class="w-4 p-4">
        <div class="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            // onClick={handleClick}
            defaultChecked={student.status? true : false}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="checkbox-table-search-1" class="sr-only">
            checkbox
          </label>
        </div>
      </td>
          {/* {student.id} */}

      <td class="px-6 py-4 text-base font-semibold ">{student.roll}</td>

        {/* name */}
      <td className={student.status ? "" : "strike"} onClick={handleClick} >{student.name}</td>

      <td class="px-6 py-4">
        <div class="flex items-center">
          <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
          {student.status ? "present" : "absent"}
        </div>
      </td>

      <td class="px-6 py-4">{student.checkin}</td>

      <td class="px-6 py-4">{student.checkout}</td>

    {/* action buttons */}
      <td class="px-6 py-4 flex gap-2">
        <button
        id={student.id}
          type="button"
          onClick={handleClick}
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          CheckIn
        </button>
        <button
          type="button"
          class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          CheckOut
        </button>
      </td>
    </tr>
  );
};

export default Student;
