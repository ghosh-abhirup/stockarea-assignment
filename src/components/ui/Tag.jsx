import React, { useEffect, useState } from "react";

const Tag = ({ data, bgColor, textColor }) => {
  return (
    <>
      {data && (
        <div
          className={`rounded-lg p-2 min-w-10 ${
            bgColor === undefined ? "bg-[#dee2e6]" : `bg-[${bgColor}]`
          }`}
        >
          <p
            className={`${
              textColor === undefined ? "text-[black]" : `text-[${textColor}]`
            } text-xs font-semibold`}
          >
            {data}
          </p>
        </div>
      )}
    </>
  );
};

export default Tag;
