import styles from "./ButtonA.module.css"

function ButtonA({text , link}){
    return(
        <a href={link}>
            <button className={styles.btnA}> {text} </button>
        </a>
    )
}

export default ButtonA