import { useState } from "react";

const ButtonState = () => {

    const [count, setCount] = useState(0);

    //const count = arrayState[0];
    //const setCount = arrayState[1];

    const handleClick = () => {
        setCount(count + 1);
    }

    return <button onClick = {handleClick}>buttonState: {count}</button>
};

export default ButtonState;