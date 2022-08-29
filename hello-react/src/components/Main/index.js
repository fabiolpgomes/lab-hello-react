import tool from "../../images/icon1.png";
import computer from "../../images/computer.png";
import desk from "../../images/desk.png";
import program from "../../images/program.png";



function Main () {

    return (
        <>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular
        frontend library, and become a super Ninja developer
        </p>
        <button>Awesome!</button>

        <div className="body">
            <div> 
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive Uls.</p>
        <img src={tool} alt="Logo tool" />
            </div>
            <div>
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
        <img src={computer} alt="Computer logo"/>
            </div>
            <div>
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component`s.</p>
        <img src={desk} alt ="Desk logo" />
            </div>
            <div>
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
        <img src={program} alt ="Program logo"/>
            </div>
        </div>
        </>
    )
}

export default Main;