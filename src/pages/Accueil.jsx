import { useState } from "react";
import { articlesDeTest, commentairesDeTest } from "../donnees-test";
import BarreRecherche from "../components/BarreRecherche";
import ListeArticles from "../components/ListeArticles";
import CommentaireForm from "../components/CommentaireForm";
import ListeCommentaires from "../components/ListeCommentaires";

function Accueil() {
  const [favoris, setFavoris] = useState([]);
  const [recherche, setRecherche] = useState("");
  const [commentaires, setCommentaires] = useState(commentairesDeTest);

  const articlesFiltres = articlesDeTest.filter((a) =>
    a.title.toLowerCase().includes(recherche.toLowerCase())
  );

  function toggleFavori(id) {
    if (favoris.includes(id)) {
      setFavoris(favoris.filter((f) => f !== id));
    } else {
      setFavoris([...favoris, id]);
    }
  }

  function ajouterCommentaire({ name, body }) {
    const nouveau = { id: Date.now(), postId: 1, name, body };
    setCommentaires([...commentaires, nouveau]);
  }

  return (
    <section>
      <h1>Accueil</h1>
      <p>Favoris : {favoris.length}</p>

      <BarreRecherche valeur={recherche} onChange={setRecherche} />
      <ListeArticles
        articles={articlesFiltres}
        favoris={favoris}
        onToggleFavori={toggleFavori}
      />

      <h2>Commentaires</h2>
      <ListeCommentaires commentaires={commentaires} />
      <CommentaireForm onAjouter={ajouterCommentaire} />
    </section>
  );
}

export default Accueil;