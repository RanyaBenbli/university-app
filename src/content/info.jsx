import Image from './photo.jpg'
import './info.css'

function FicheEtudiant(){
    const etudiant={
        nom:"Benbli",
        prenom:"Ranya",
        img: Image,
        email:"ranoucha434@gmail.com",
        tel:27216040,
        fil:"Génie logiciel & systèmes d'information",
        anne:"2026/2027",
        grp:"DLSI D",
        ville:"Mahdia",
    }
    return (
        <div>
            <h1>Fiche Etudiant ♡</h1>
            <img src={Image} alt="my photo" />
            <p>Prénom: {etudiant.prenom}</p>
            <p>Nom: {etudiant.nom}</p>
            <p>Email: {etudiant.email}</p>
            <p>Telephone: {etudiant.tel}</p>
            <p>Filière: {etudiant.fil}</p>
            <p>Année d'étude: {etudiant.anne}</p>
            <p>Groupe: {etudiant.grp}</p>
            <p>Ville: {etudiant.ville}</p>

    </div>

    )
}
export default FicheEtudiant