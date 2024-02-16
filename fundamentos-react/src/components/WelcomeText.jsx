const WelcomeText = ({user}) => (user ? <h3>Online</h3> : <h3>Offline</h3>);

export default WelcomeText;