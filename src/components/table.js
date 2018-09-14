import React from 'react';

const Table = (props) => {
    const tableRows = props.data.map( (studentObj, index) => {
        console.log('Object:', studentObj);
        return (
            <tr key={index}>
                <td>{studentObj.student}</td>
                <td>{studentObj.course}</td>
                <td>{studentObj.grade}</td>
            </tr>
        )
    })

    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead> 
            <tbody>
                 {tableRows}
            </tbody> 

        </table>
    )
}

export default Table;