import React from 'react';

export default props => {
    // console.log("Field Props:", props);
    return (
        <div className="form-group">
            <label> { props.label } </label>
            <input className="form-control" {...props}/>
        </div>
    )
}