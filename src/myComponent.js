import React, {useState} from 'react';

function MyComponent()
{
 const[name, setName]= useState('hamza');
 const[age,setAge]=useState(1);

const  updateName=()=>{setName('Ahmad')};
const updateAge=()=>{setAge(age +1)
    console.log({age});
    
};


 return(
    <div> 
        <p> 
           Name: {name} 
        </p>
        <button onClick={updateName}>
            update name
        </button>
        <p>age: {age}</p>

        <button onClick={updateAge}> update age </button>
    </div>
 );
}
export default MyComponent;