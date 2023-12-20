import React from "react";
import "./Styles.css";

const ImportData = () => {
  const handleImport = () => {
    const fileInput = document.getElementById("csvInput");

    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];

      if (file) {
        parseCsv(file);
      }
    });

    fileInput.click();
  };

  const parseCsv = (file) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const csvData = e.target.result;
      const rows = csvData.split("\n");
      const headers = rows[0].split(",");

      const tableContainer = document.getElementById("tableContainer");
      tableContainer.innerHTML = "";

      const table = document.createElement("table");
      const thead = document.createElement("thead");
      const tbody = document.createElement("tbody");

      const headerRow = document.createElement("tr");
      headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);

      let formattedData = "";

      for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(",");
        const tr = document.createElement("tr");

        for (let j = 0; j < headers.length; j++) {
          const td = document.createElement("td");
          td.textContent = row[j];
          tr.appendChild(td);

          // Check for the 2nd row and 2nd column
          if (i === 2 && j === 1) {
            formattedData += `[${row[j]}, `;
          }
        }

        tbody.appendChild(tr);
      }

      // Close the formattedData string
      formattedData = formattedData.slice(0, -2) + "]\n";

      table.appendChild(thead);
      table.appendChild(tbody);
      tableContainer.appendChild(table);

      // Send the data to the server
      sendDataToServer(formattedData);
    };

    reader.readAsText(file);
  };

  const sendDataToServer = (data) => {
    fetch("http://127.0.0.1:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/text",
      },
      mode: 'cors',
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Server response:", result);
        // Handle the server response as needed
      })
      .catch((error) => {
        console.error("Error sending data to server:", error);
      });
  };

  return (
    <>
      <div id="app">
        <input type="file" id="csvInput" style={{ display: "none" }} accept=".csv" />
        <label htmlFor="csvInput">
          <button id="importButton" onClick={handleImport}>
            Import CSV
          </button>
        </label>

        <div id="tableContainer"></div>
      </div>
    </>
  );
};

export default ImportData;
