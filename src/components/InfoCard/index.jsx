import './style.css'

export default function InfoCard({name, imgPath, age, profession}) {

    return(
        <div className="info-card-container">
            <img src={imgPath} alt="Avatar do Usuário" />
            <p><strong>Nome: </strong> {name}</p>
            <p><strong>Idade: </strong> {age}</p>
            <p><strong>Profissão:  </strong>{profession}</p>
        </div>
    )
}