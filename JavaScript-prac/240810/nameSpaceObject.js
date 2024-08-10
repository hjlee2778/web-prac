var MYAPP = {};
    
MYAPP.Parent = function() {};
MYAPP.child = function() {};

MYAPP.some = "hi";

// 객체 컨테이너
MYAPP.modules = {};

MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {a: 1, b: 2};



console.log(MYAPP.some); // hi 출력
console.log(MYAPP.modules.module1.data.a); // 1 출력