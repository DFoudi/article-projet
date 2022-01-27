import { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../../config';
import './Accueil.css';

// Utilisation de la bibliotheque axios afin de faire les requetes http : Gey, Post, Delete ...
// En allant dans baseURL on peut voir localhost 4000
const fetchArticles = async () =>
  await axios({
    method: 'get',
    url: baseURL + 'api/articles',
  });

// On récupére le jour: getDate, le mois: date.toLocaleString() et l'année: date.getFullYear()
const formatDate = (date) => `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;

const Accueil = () => {
  const [articles, setArticles] = useState(); // setArticles qui permet d'ajouter les valeurs que l'on veut dans la variable articles, c'est un setter. Utilisation d'un Hook useState() permet créer variable globale qui peut etre utilisé dans tout le composant

  // Utilisation de la bibliotheque axios afin de faire les requetes http : Gey, Post, Delete ...
  // ici requête Delete
// En allant dans baseURL on peut voir localhost 4000
  const deleteArticle = async (id) => {
    await axios({
      method: 'delete',
      url: baseURL + `api/articles/${id}`, // l'id dans l'url afin de supprimer l'élément appelé
    });
    const newArticles = articles.filter(article => article._id !== id); // Met à jour la page après la suppression
    setArticles(newArticles)
  }

  // Si le composant accueil ca charge il execute le code de useEffect
  // Et useEffect set les articles pour les afficher dans la vue
  // Puis on va chercher les data avec fetch ici les articles qui sont bien dans le constante articles qui est un tableau
  useEffect(async () => {
    const articles = await fetchArticles();
    setArticles(articles.data); // Charge les données ajouté à articles et les récupère dans la variable articles (Utilisation d'un hook useState())
  }, []);
  if (!articles) return <p>Loading...</p> // Si il n'y a pas d'articles fait un "Loading..."

  return (
    <div className="box">
      <div className="cards">
        {articles.length ? articles.map((article) => ( // Si on a des articles alors on map les articles, dans le tableau articles, on les liste
          <div key={article._id} className="card">
          <div className="image">
            {/* on affiche imageUrl */}
            <img src={article.imageUrl} alt={article.name} /> 
             
          </div>
          <div className="article">
             {/* on affiche name */}
              <ul className="article__name">{article.name}</ul>
              <div>
                <div>
                  <strong> Date de création: </strong>
                   {/* on affiche date et le format jj/mm/aaaa avec la fonction formatDate()*/}
                  {formatDate(new Date(article.date))}
                </div>
                <div>
                  <strong> Description: </strong>
                   {/* on affiche la description */}
                  <div> {article.description} </div>
                </div>
              </div>
            </div>
            {/* Suppression : Evenement 'onClick' lorsque l'on clique sur le bouton on déclanche la fonction deleteArticle() en selectionnant l'id qui supprimera l'article selectionné avec submit */}
            <div className='card__delete'>
            <button className='card__delete' onClick={() => deleteArticle(article._id)} type="submit">Supprimer</button>
            </div>
          </div>
        )) : 'Aucun articles' }
     </div>
     </div>
)}

export default Accueil;