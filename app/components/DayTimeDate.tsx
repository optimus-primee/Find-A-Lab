import React, { useState, useEffect } from "react";

const DayTimeDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the current date every second
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    day: "numeric",
    month: "long",
  };

  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <div className="flex gap-2">
      <p>{formattedDate}</p>
      <p>{formattedTime}</p>
    </div>
  );
};

export default DayTimeDate;
