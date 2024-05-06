import style from './Card.module.css'
import ButtoB from './ButtonB'
function Card({img, title, tech, descriptio, repo, site}){
    return(
        <div className={style.card}>
            <a href={site}>
                <img src={img} alt='ERRO'/>
            </a>    
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia:</strong>{tech}</p>
                <p>{descriptio}</p>
                <ButtoB text='Acesse o Repositorio ' link={repo}/>
            </section>
        </div>
    )
}
export default Card