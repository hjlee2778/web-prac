import React from 'react';

const userPw = (props) => {

    function updateValue(e) {
        props.onAddPw(e.target.value);
    }
    return (
        <div>
            PW : <input type="text" onChange={updateValue}/>
        </div>
    );
};

export default userPw;