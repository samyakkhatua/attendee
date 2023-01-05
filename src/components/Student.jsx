import React from "react";

const Student = ({ student, handleCheckIn, handleCheckOut }) => {
  const handleInClick = (e) => {
    e.preventDefault(e.currentTarget.id);
    handleCheckIn(e.currentTarget.id);
  };

  const handleOutClick = (e) => {
    e.preventDefault(e.currentTarget.id);
    console.log(e.currentTarget.id);
    handleCheckOut(e.currentTarget.id);
  };

  var today = new Date();
  let currTime =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    <tr class="w-full bg-white text-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td class="px-6 py-4 text-base font-semibold ">{student.roll}</td>

      {/* name */}
      <td className="px-6 py-4">{student.name}</td>

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
        {student.status == false && (
          <button
            id={student.id}
            type="button"
            onClick={handleInClick}
            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            CheckIn
          </button>
        )}

        {student.status == true && (
          <button
            id={student.id}
            type="button"
            onClick={handleOutClick}
            class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            CheckOut
          </button>
        )}
      </td>
    </tr>
  );
};

export default Student;
