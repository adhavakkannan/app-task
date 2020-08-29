import React from 'react';

const Data= ({data}) => {
  return (
    <div>
    
      <tbody>
        <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td>{data.gender}</td>
          <td>{data.email}</td>
          <td>{data.phoneNo}</td>
        </tr>
      </tbody>
    
    </div>
  )
}

export default Data
