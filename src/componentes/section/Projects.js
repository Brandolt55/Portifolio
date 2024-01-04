import styles from './Projects.module.css'
import ButtonB from '../Buton.js/ButtonB'
import Cards from '../Buton.js/Cards'
import page from '../../images/Projects/page.svg' 
import page2 from '../../images/Projects/page2.svg' 

function Projects(){
    return(
        <div>
            <div className={styles.projects}>
                <h1>projetos</h1>
                <Cards
                img={page}
                title='DevVerso'
                tech='  HTML, CSS, Python e SQL'
                descripition='Projeto Back-end e front-end, este é um site de blog de programadores' 
                repo='https://github.com/Brandolt55/Devverso'
                site='https://www.canva.com/design/DAFo7lQBzME/iNOOD-jgS5ymgQnsktovIA/edit' />
                <ButtonB text='Ver repositorio Completo' link='https://github.com/Brandolt55/Devverso'/>
            </div>
            <div className={styles.projects}>
                <Cards
                img={page2}
                title='Petecenter'
                tech='Python e SQL'
                descripition='Projeto back-end feito para uma agropecuraria com ituito de controlar o estoque e as vendas' 
                repo='https://github.com/Brandolt55/petcenter?tab=readme-ov-file'
                site='https://www.canva.com/design/DAFv9vdrB8U/AIJfsPlqCcGA5zq6W76JOw/edit' />
                <ButtonB text='Ver repositorio Completo' link='https://github.com/Brandolt55/petcenter?tab=readme-ov-file'/>
            </div>
        </div>
    )
}

export default Projects