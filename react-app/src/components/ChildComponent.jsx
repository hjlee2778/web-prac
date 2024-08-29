import React from 'react';

const ChildComponent = (props) => {




    function updateValue(e) {
        console.log(e.target.value);

        props.onAddData(e.target.value)
    }

    return (
        <>
            <h3>
                입력 : <input type='text' onChange={updateValue}/>
            </h3>
        </>
    );
};

export default ChildComponent;