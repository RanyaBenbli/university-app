import './App.css';
import StudentCard from './component/StudentCard.jsx';
import photo1 from '../src/assets/photo1.jpg';
import Header from './component/Header.jsx';
import Navbar from './component/Navbar.jsx';
import Footer from './component/Footer.jsx';

const etudiants=[
    {
        nom:"Benbli",
        prenom:"Ranya",
        img: photo1,
        email:"ranoucha434@gmail.com",
        tel:27216040,
        fil:"Génie logiciel & systèmes d'information",
        anne:"2ème année",
        grp:"GLSI B",
        ville:"Mahdia",
    },
    {
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra@gmail.com",
    tel: "22123457",
    fil: "Génie logiciel & systèmes d'information",
    anne:"2ème année",
    grp:"GLSI c",
  },
  {
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariem@gmail.com",
    tel: "22123458",
    fil: "Génie logiciel & systèmes d'information",
    anne:"2ème année",
    grp:"GLSI d",
    ville:"Mahdia",
  }
  ]

function App() {
  return (
    <div className='container'>
      <Header />
      <Navbar />
      {etudiants.map((etudiant) => (
        <StudentCard
          key={etudiant.email}
          image={etudiant.img}
          prenom={etudiant.prenom}
          nom= {etudiant.nom}
          email= {etudiant.email}
          telephone= {etudiant.tel}
          filiere= {etudiant.fil}
          annee= {etudiant.anne}
          groupe= {etudiant.grp}
          ville= {etudiant.ville}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
