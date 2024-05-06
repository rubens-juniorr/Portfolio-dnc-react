import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'

function Presentation (){
    return(
        <div className={styles.presentation} id="Presentation">
          <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
          <h1>Olá, eu sou Rubens Rodrigues!</h1>
          <p>
            Sou um apaixonado por tecnologia e soluções inovadoras. <br/>
            Como Desenvolvedor, tenho o compromisso de resolver problemas<br/>
            complexos e trazer resultados excepcionais para os negócios.<br/>
            
          </p>

          <ButtonA link='https://github.com/rubens-juniorr' text='Conecte-se comigo!!'/>
          
        </div>
    )
}
export default Presentation