import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ name, age, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

// PropTypes를 사용하여 props의 타입을 정의.
UserCard.propTypes = {
  name: PropTypes.string.isRequired, // name은 문자열, 필수 항목.
  age: PropTypes.number.isRequired,  // age는 숫자, 필수 항목.
  email: PropTypes.string            // email은 문자열, 필수는 아님.
};

/* const App = () => {
  const user = {
    name: "Lee Hee Ju",
    age: 25,
    email: "lhj2778@naver.com"
  };

  return (
    <div>
      <UserCard {...user} />
    </div>
  );
};

export default App; */

export default UserCard