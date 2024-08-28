import React from 'react';

// 자바스크립트 디폴트 파라미터
// 매개변수에 = 붙이고 기본설정할 거(값) 적어놓으면 됨.
const DefaultProps = ({name="가나다"}) => {
    return (
        <div>
            안녕하세요 제 이름은 {name} 입니다.
        </div>
    );
};

// 컴포넌트이름.defaultProps = { 키 : 값 }

/* DefaultProps.defaultProps = {
    name: "홍길동",
}; */

export default DefaultProps;