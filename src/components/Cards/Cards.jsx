import "./Cards.css";
import { useState } from "react";
import { useCharacter } from "../Peticion/useCharacter";
import { MapList } from "./MapList";
const ItemList = () => {
    const {data} = useCharacter();
    const [gender, setGender] = useState('Male');
    const filtrada = data.filter(item => item.gender == gender);
  return (
    <main>
        <h2>CHARACTERS</h2>
        <button className={gender === 'Male' ? "main__buttons button-active" : "main__buttons" } onClick={()=>setGender('Male')}>Male</button>
        <button className={gender === 'Female' ? "main__buttons button-active" : "main__buttons" } onClick={()=>setGender('Female')}>Female</button>
        <section className="main__section">  
        {filtrada.map((item, index)=>{
                        return(   
                            <MapList item={item} key={index} />
                        )
                    })}          
        </section>
    </main>
    )
    
};

export { ItemList };
                    