import HelloWorld from '../Components/HelloWorld';

function Home(){
    return(
        <div>
            <h1 className="font-bold text-2xl">Esta es la página de inicio</h1>
            <HelloWorld name="Nardog"></HelloWorld>

        </div>
    )
}

export default Home