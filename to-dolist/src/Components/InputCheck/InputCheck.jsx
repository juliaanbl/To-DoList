import { useState } from "react";

const InputCheck = ({id, funcion}) => {
    
    const [isChecked, setIsChecked] = useState(false);

    const marcar = () => {
        setIsChecked(!isChecked);
        funcion(id);
    }
    
    return(
        <input type="checkbox" checked={isChecked} onChange={marcar} />
    );
}

export default InputCheck;