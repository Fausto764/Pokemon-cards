import { useState, useEffect} from "react"

const useCharacter = () => {
    const [data, updateData] = useState([]);
  
    useEffect(() =>{
        fetch(`https://rickandmortyapi.com/api/character`)
          .then((response) => response.json())
          .then(({results}) => updateData(results))
    }, [])

    return { data }
}



export { useCharacter} 