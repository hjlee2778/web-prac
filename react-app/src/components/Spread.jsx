import React from 'react';

/* function Spread() {
    const person1 = {name : 'sooa'};
    const person2 = {name : 'sooa', age: 20};
    const person3 = {name : 'sooa', age: 20, srgion: 'seoul'};

    return (
        <div>
           <h1>{JSON.stringify(person1)}</h1>        
           <h1>{JSON.stringify(person2)}</h1>        
           <h1>{JSON.stringify(person3)}</h1>        
        </div>
    );
}

export default Spread;
 */

function Spread() {
    const person1 = {name : 'sooa'};

    const person2 = person1;
    person2.age = 20;


    const person3 = person2;
    person3.region = 'seoul';

    return (
        <div>
           <h1>{JSON.stringify(person1)}</h1>        
           <h1>{JSON.stringify(person2)}</h1>        
           <h1>{JSON.stringify(person3)}</h1>        
        </div>
    );
}

export default Spread;