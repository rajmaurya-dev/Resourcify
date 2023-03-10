import React from "react";

const Button = ({ btn, custom }) => {
  return (
    <>
      <button
        className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-[10px] lg:text-[18px] px-2 lg:px-5 py-2.5 text-center mr-2 mb-2 ${custom}`}
      >
        {btn}
      </button>
    </>
  );
};

export default Button;
