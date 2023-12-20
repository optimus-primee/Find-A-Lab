"use client"
import React, { useState, useEffect } from "react";

const Searchh = () => {
  const [jsonData, setJsonData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch JSON data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3031/labs");
        const data = await response.json();
        
        console.log(data)
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);



  return (
    <div>
     
    </div>
  );
};

export default Searchh;
