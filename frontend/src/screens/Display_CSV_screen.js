import React, { useState, useEffect } from 'react';

function Display_CSV_Screen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/passenger-data/');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Passenger Data</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={tableCellStyle}>PassengerId</th>
            <th style={tableCellStyle}>Pclass</th>
            <th style={tableCellStyle}>Name</th>
            <th style={tableCellStyle}>Sex</th>
            <th style={tableCellStyle}>Age</th>
            <th style={tableCellStyle}>SibSp</th>
            <th style={tableCellStyle}>Parch</th>
            <th style={tableCellStyle}>Ticket</th>
            <th style={tableCellStyle}>Fare</th>
            <th style={tableCellStyle}>Cabin</th>
            <th style={tableCellStyle}>Embarked</th>
          </tr>
        </thead>
        <tbody>
          {data.map((passenger, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{passenger.PassengerId}</td>
              <td style={tableCellStyle}>{passenger.Pclass}</td>
              <td style={tableCellStyle}>{passenger.Name}</td>
              <td style={tableCellStyle}>{passenger.Sex}</td>
              <td style={tableCellStyle}>{passenger.Age}</td>
              <td style={tableCellStyle}>{passenger.SibSp}</td>
              <td style={tableCellStyle}>{passenger.Parch}</td>
              <td style={tableCellStyle}>{passenger.Ticket}</td>
              <td style={tableCellStyle}>{passenger.Fare}</td>
              <td style={tableCellStyle}>{passenger.Cabin}</td>
              <td style={tableCellStyle}>{passenger.Embarked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: '#f2f2f2',
};

export default Display_CSV_Screen;
