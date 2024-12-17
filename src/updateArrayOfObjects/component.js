import React, {useState} from "react";

function Component()
{
    const [cars, setCars]= useState([]);
    const [carYear, setCarYear]=useState(new Date().getFullYear());
    const [carMake, setCarMake]=useState('');
    const [carModel, setCarModel]=useState('');

    function handleAddCar()
    {
      const  newCar={year: carYear,make: carMake, model: carModel}
      setCars(c=>[...c,newCar]);

      setCarYear(new Date().getFullYear());
      setCarMake("");
      setCarModel("");
    }
    function handleRemoveCar(index)
    {
        setCars(c=>c.filter((_, i)=> i!==index))
    
    }
    function handleYearChange(event)
    {
        setCarYear(event.target.value);
    };
    function handleMakeChange(event)
    {
        setCarMake(event.target.value);
    };
    function handleModelChange(event)
    {
        setCarModel(event.target.value);
    };

    return(
        <>
        <h2> cars list</h2>
        <div>
            <ol>
                {cars.map((car,index)=>
                <li key={index} onClick={()=>handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>
                )}
            </ol>
            
        </div>
        <input type="number" value={carYear} onChange={handleYearChange}/>
        <br></br>
        <br></br>
        <input type="text" value={carMake} placeholder="add car make" onChange={handleMakeChange}/>
        <br>
        </br>
        
        <br>
        </br>
        <input type="text" placeholder="add car model" value={carModel} onChange={handleModelChange}/>
        <br></br>
        <br></br>
        <button onClick={()=>handleAddCar()} >add car</button>
        </>
    )


};
export default Component;