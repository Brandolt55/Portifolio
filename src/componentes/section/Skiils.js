import styles from './Skiils.module.css'
import css from '../../images/skills/css.svg'
import django from '../../images/skills/django.svg'
import flask from '../../images/skills/flask.svg'
import html from '../../images/skills/html.svg'
import javascript from '../../images/skills/javascript.svg'
import python from '../../images/skills/python.svg'
import react from '../../images/skills/react.svg'
import typescript from '../../images/skills/typescript.svg'


function Skills(){
    return(
        <div className={styles.skills} >
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}/> 
                <img src={html}/> 
                <img src={css}/> 
                <img src={typescript}/> <br/>
                <img src={python}/> 
                <img src={react}/> 
                <img src={flask}/> 
                <img src={django}/> 
            </div>
        </div>
    )
}

export default Skills