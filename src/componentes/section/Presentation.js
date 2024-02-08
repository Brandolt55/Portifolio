import style from './Presentation.module.css'
import ButtonA from '../Buton.js/ButtonA'
import ButtonB from '../Buton.js/ButtonB'
import {useEffect, useState } from 'react'

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Gabriel Brandolt!' , 'Desenvolvedor FullStack']
    const [loop ,setLoop] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const period = 100;
    const [delta , setDelta] = useState(100)


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}
    }, [text]) 
    
    const toType = () =>{
        let i = loop % toRotate.length;
        let FullText = toRotate[i]
        let updateText = isDeleting ? FullText.substring(0,text.length-1) : FullText.substring(0,text.length+1)
        setText(updateText);
        
        if(!isDeleting && updateText === FullText){
            setisDeleting(true);
            setDelta(period);
        }else if (isDeleting && updateText === ''){
            setisDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }
   


    return(
        <div className={style.presentation} >
            
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>

            <h1>Olá, eu sou {text}</h1>

            <h2>Sou um apaixonado por tecnologia e soluções inovadoras.Como<br/>
            Desenvolvedor FullStack, eu tenho o compromisso de resolver<br/>
            problemas complexos e trazer resultados excepcionais para os <br/>
            negócios. Tenho como principal objetivo trazer melhorias à área de tecnologia<br/>
            estou sempre em busca de novos desafios.

            </h2>
            <br/>
            <ButtonA link='http://wa.me/5551990120666' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation