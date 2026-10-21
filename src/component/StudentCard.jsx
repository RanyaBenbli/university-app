import defaultImage from '../assets/photo2.jpg'
import './StudentCard.css'

function StudentCard(props){
    const ville = props.ville || "Non renseignée";
    return (
        <div className="student-card">
        <img src={props.image || defaultImage} alt="Photo de l'étudiante" />
        <h2>{props.prenom} {props.nom}</h2>
        <p>Email : {props.email}</p>
        <p>Téléphone : {props.telephone}</p>
        <p>Filière : {props.filiere}</p>
        <p>Année : {props.annee}</p>
        <p>Groupe : {props.groupe}</p>
        <p>Ville : {ville}</p>
    </div>
        

    )
}
export default StudentCard