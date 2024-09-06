import React from 'react';

/* const Submit = () => {
    function submitHandler(e) {
        e.prventDefault();
        console.log("submit 이벤트 발생");
    }
    return (
        <div>
            <h1>Submit 이벤트</h1>
            <form onSubmit={submitHandler}>
                <input type="submit" value="확인"/>
            </form>
        </div>
    );
};
 */


const Submit = () => {
    const [form, setForm] = useState("");

    function changeHandler(e) {
        setForm(e.target.value)
    }

    function submitHandler() {
        e.preventDefault();
        console.log("submit으로부터 받은 데이터 : ", form);
    }

    return (
      <div>  
       <form onSubmit={submitHandler}>
            <h1>이름 : {}</h1>
            <input type="text" onChange={changeHandler}/>
      </form>  
     </div> 
    )    
}

export default Submit;
