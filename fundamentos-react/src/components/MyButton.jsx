const MyButton = ({text}) => {

    const handleClick = (title) => {console.log(title)};
    
    return <button onClick = {() => handleClick(text)}>{text}</button>;
};

export default MyButton;