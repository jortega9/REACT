import imgUno from './assets/images/sulley.png'
import ButtonState from './components/ButtonState.jsx';
import MyButton from './components/MyButton.jsx';
import WelcomeText from './components/WelcomeText.jsx'
import ListFruts from './components/fruts/ListFruts.jsx'

const App = () => {

    const title = "Mi titulo desde una constante";
    const classTitle = 'text-center';
    const user = false;
    //Windows + . para iconos
    const fruts = ["🍌","🍎","🍐"]; 
    const frutsTwo = ["🍑","🍉","🍇"]; 

    return (
        <>
            <ButtonState></ButtonState>
            <h1 className = {classTitle}>{title.toUpperCase()}</h1>
            <img src={imgUno} alt =""></img>

            <MyButton text = 'boton 1' />
            <MyButton text = 'boton 2' />
            <MyButton text = 'boton 3' />

            <WelcomeText user = {user}/>

            <ListFruts fruts ={fruts}/>
            <ListFruts fruts ={frutsTwo}/>
        </>
    );
};

export default App;