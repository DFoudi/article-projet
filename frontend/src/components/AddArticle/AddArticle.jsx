import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import baseURL from '../../config';
import './AddArticle.css';

// Utilisation de la bibliotheque axios afin de faire les requetes http : Gey, Post, Delete ...
// On envoi avec la méthode Post notre Url, notre données qui contient notre objet avec le body et l'article
const createArticles = async (baseURL, formValues) => {
    await axios({
      method: 'post',
      url: baseURL + 'api/articles/',
      data: {
        ...formValues
      }
    });
}

// On utilise également useState ici et on a mit par défaut les 3 champs vide
// Le formValues c'est un objet qui contient ce qu'on écrit dans le formulaire que ce soit name, image ou description, pour qu'on puisse envoyer dans l'api
const AddArticle = () => {
   const initialValues = {name: '', imageUrl: '', description: ''};
   const [formValues, setFormValues] = useState(initialValues);
   const navigate = useNavigate(); // useNavigate est importé avec import { useNavigate } from 'react-router-dom'
   // C'est une fonction prédéfini de la bibliothèque 'react-router-dom'


   const handleChange = (e) => {
       const {name, value} = e.target; // evenement e.target pour detecter ce qui est écrit et par defaut il renvoi le nom du champs et sa valeur
       setFormValues({ ...formValues, [name]: value }) // Dans le setFormValues, les 3 points = le Spread pour extraire l'objet, sans le Spread formValues il n'y a que le champs rempli qui est modifié dans la console alors les autres champs sont ignorés. Sans ça si on modifie par exemple que le nom les autres champs sont ignorés on dit qu'il distract les autres champs, il les détourne ou les distraits
   }


   const handleSubmit = async (e) => {
       e.preventDefault(); // Pour ne pas faire un refresh de la page automatiquement afin de garder la valeur dans la vue
       await createArticles(baseURL, formValues); // On créait l'article on envoi le baseUrl et le et après formValues qui contient l'objet le name, l'imageUrl, la description, le body
       navigate('/'); // Redirection à la page d'accueil une fois créé
       setFormValues(initialValues); // C'est pour chargé les valeurs rapidement après le clique de l'ajout, c'est optionel
   }

   return (
    <div className="form" >
        <h2>Ajouter un article</h2>
        <form className="admin-form ajouter-recette" onSubmit={handleSubmit}>
        {/* input pour le name que l'on renseigne, ici le formValues.name, à chaque click il lance un onChange=handleChange et met à jour en cas de changement dans l'input  */}
        <input type="text" name="name" value={formValues.name} onChange={handleChange} placeholder="Nom de l'article*" />

        {/* idem pour l'image */}
        <input type="text" name="imageUrl" value={formValues.imageUrl} onChange={handleChange} placeholder="Adresse de l'image - URL" />

        {/* idem pour la description  */}
        <textarea rows="3" name="description" value={formValues.description} onChange={handleChange} placeholder="Description de l'article*" ></textarea>

        <button className='form__submit' type="submit">Ajouter un article</button>
        </form>
	</div>
  )
}


export default AddArticle;