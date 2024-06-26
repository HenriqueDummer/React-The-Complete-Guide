import reactImg from "../assets/react-core-concepts.png"

const Header = () => {

    const reactDescriptions = ["Funtamentals", "Crucial", "Core"]

    function genRandomInt(max){
        return Math.floor(Math.random() * (max + 1))
    }

    return(
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app yu are going to build!
            </p>
        </header>
    )
}

export default Header