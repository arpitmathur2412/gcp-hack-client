import './HeroStyles.css'

const Hero = (props) => {
    return (
        <>
            <div className={props.cName}>
                <img src={props.heroImg} alt="HeroImg"/>
            </div>

            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.btnText}
                </a>
            </div>
        </>
    )
}

export default Hero






