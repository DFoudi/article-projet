import Accueil from './components/Accueil/Accueil';
import AddArticle from './components/AddArticle/AddArticle';
import Navigation from './components/Navigation/Navigation';
//utilisation du router et installation de la bibliotheque react-router-dom
//Si je clique sur accueil ou bien ajouter il m'affiche la vue de l'élément que j'ai besoin d'appeler
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        {/* navigation pour se déplacer dans une nouvelle page */}
        <Navigation />
        <Routes>
           {/* Le path="/" va charger le composent page d'Accueil */}
          <Route path="/" element={<Accueil />} />
          {/* Le path="/addArticle" va charger le composent addArticle */}
          <Route path="/addArticle" element={<AddArticle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
