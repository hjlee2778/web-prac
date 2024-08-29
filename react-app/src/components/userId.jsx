import React from 'react';

const userId = (props) => {

    function updateValue(e) {
        props.onAddId(e.target.value);
    }
    return (
        <div>
            ID : <input type="text" onChange={updateValue}/>
        </div>
    );
};

export default userId;