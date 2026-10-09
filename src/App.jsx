import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Image from './assets/photo.jpg'
function App() {
  const [count, setCount] = useState(0)
  
  const email="ranoucha434@gmail.com";
  const tel=27216040;
  const fil="Génie logiciel & systèmes d'information";
  const date="2026/2027";
  const grp="DLSI D";
  const ville="Mahdia";
const etudiant = {
  nom:"Benbli",
  prenom:"Ranya",
  img: Image
}
  return (
    <div>
      <h1>Fiche etudiant</h1>
      <img src={etudiant.img} alt="votre image"/>
      <h5>Nom & prènom:{etudiant.nom}{etudiant.prenom}</h5>
      <h5>Email: {email}</h5>
      <h5>Telephone: {tel}</h5>
      <h5>Filière:{fil} </h5>
      <h5>Annèe d'étude:{date} </h5>
      <h5>Groupe: {grp}</h5>
      <h5>Ville: {ville}</h5>

    </div>
  )
}

export default App
