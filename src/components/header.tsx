'use client'
import React, { useState, useEffect } from "react";

export default function Header() {
  const [timeLeft, setTimeLeft] = useState<number>(20 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => Math.max(0, prevTime - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="z-50 text-center mx-auto bg-opacity-75 w-full fixed top-0 left-0 bg-red-700 text-white">
      <div className="w-full relative p-2">
        <div className="flex items-center h-full justify-center w-full">
          <div className="flex items-center flex-wrap">
            <h1 className="text-4xl">{formattedTime}</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="36px"
              height="36px"
              className="mx-4"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div className="text-sm font-medium">Oferta por tempo limitado</div>
          </div>
        </div>
      </div>
    </div>
  );
}
