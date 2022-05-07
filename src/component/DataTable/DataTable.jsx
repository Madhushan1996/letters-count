import React, { useEffect } from "react";
import "./DataTable.css";

const DataTable = ({ response }) => {
  const [tableData, setTableData] = React.useState([]);

  useEffect(() => {
    if (response) {
      setTableData(response);
    }
  }, [response]);
  return (
    <div className="tester__table">
      <div className="tester__table__container">
        <div className="table">
          <table style={{ width: "100%", padding: 5 }}>
            <tr>
              <th>Name</th>
              <th>Characters</th>
              <th>Frequency</th>
            </tr>
            {tableData
              ? tableData.map((element) => (
                  <tr>
                    <td>{element.name}</td>
                    <td>{element.length}</td>
                    <td>{element.count}</td>
                  </tr>
                ))
              : ""}
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
