import React from 'react';

const fetchTodo = () => {
    return fetch("http://localhost:5000/api/todo")
        .then((response) => response.json())

};

function TodoFetchingNode() {
  const {data, error, isLoading} = useQuery({
    queryKey:["todos"], // 쿼리 키
    queryFn: fetchTodo, // 데이터를 가져오는 함수
  });

    // 로딩상태처리
    if (isLoading) return <div className="spinner"></div>;
    // 에러상태처리
    if (error) return <div>An error occurred: {error.message}</div>;

    return (
    <>
        <h3>이번주할일리스트</h3>
        {data.map((todo) => (
          <p key={todo.id}>
              <input type="checkbox" checked={todo.status}/>
              {todo.text}
          </p>
        ))}
    </>    
   );
 };

export default TodoFetchingNode;