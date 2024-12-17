import styles from './colorPicker.module.css'
import React, {useState} from 'react';


function ColorPicker()
{
    const[color, setColor]=useState('black')
   const handleColorChange=(event)=>
   {
    setColor(event.target.value)
   }
    return(
        <div className={styles.colorPickerContainer}>
            <h1 >
                Color Picker
            </h1>
            <div className={styles.colorDisplay}style={{backgroundColor:color}}>
            <p> selected color: {color}</p>

            </div>
            <label>select a color </label>
            <input type="color" value={color}
            onChange={handleColorChange}></input>
        </div>
        
    )



}
export default ColorPicker;