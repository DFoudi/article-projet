import { NavLink } from "react-router-dom";
// On appelle notre fichier navigation.css pour stylisé notre page
import './Navigation.css';


const Navigation = () => (
  <div className="navBar">
    {/* Avec la propriété CSS active lorsque l'on clique sur Accueil on est redirigé vers la page accueil avec l'attribut to="/" et de la même façon si l'on clique sur ajouter on est redirigé vers "addArticle" donc la page ajouter un article */}
    <NavLink activeClassName='active' to="/">Accueil</NavLink>
    <NavLink activeClassName='active' to="addArticle">Ajouter</NavLink>
  </div>
)


export default Navigation;