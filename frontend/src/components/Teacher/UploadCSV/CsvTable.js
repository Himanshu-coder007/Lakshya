import React, { useState } from "react";
import Papa from "papaparse";
import "bootstrap/dist/css/bootstrap.min.css";

const CsvTable = () => {
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);

  const handleFileUpload = (data) => {
    setHeaders(data[0].data);
    const parsedData = data.slice(1).map((row) => row.data);
    const extractedValues = parsedData.map((row) => row[1]);
    const formattedData = `[${extractedValues.join(", ")}]`;

    console.log(formattedData);
    setCsvData(parsedData);
  };

  const handleError = (error) => {
    console.error("CSV parsing error:", error);
  };

  return (
    <div className="container mt-4">
      <Papa.CSVReader onFileLoad={handleFileUpload} onError={handleError}>
        <button className="btn btn-primary">Import CSV</button>
      </Papa.CSVReader>

      {csvData.length > 0 && (
        <table className="table mt-4">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CsvTable;
