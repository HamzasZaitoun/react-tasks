import React ,{useState} from "react";
function EventComponent()
{
    const [name,setName]=useState('');
    const handleNameChange =(event)=>
    {
  setName(event.target.value)
    }

    return(
      <> 
      <div>
      <input value={name} onChange={handleNameChange}/ >
      </div>
                
       <p>name: {name}</p>
       </>
    )

}
export default EventComponent