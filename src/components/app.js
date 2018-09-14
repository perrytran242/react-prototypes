import React from 'react';
import Table from './table';

const students = [
    {student: 'David', course: 'Math', grade: 85},
    {student: 'Perry', course: 'History', grade: 70},
    {student: 'Jaclyn', course: 'Finance', grade: 100}
];

export default () => {
    // return <h1>My first React functional component</h1>
    return <div className="container">
        <h1>Student Grade Table</h1>
        <Table data={students}/>
    </div>
    
}

