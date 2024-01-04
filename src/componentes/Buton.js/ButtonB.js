import styles from "./ButtonB.module.css"

function ButtonB({text , link}){
    return(
        <a href={link}>
            <button className={styles.btnB}> {text} </button>
        </a>
    )
}

export default ButtonB