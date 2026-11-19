import { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { articlesDeTest } from "../donnees-test";

function Accueil() {
  const [favoris, setFavoris] = useState([]);

  function toggleFavori(id) {
    if (favoris.includes(id)) {
      setFavoris(favoris.filter((f) => f !== id));
    } else {
      setFavoris([...favoris, id]);
    }
  }

  return (
    <section>
      <h1>Accueil</h1>
      <p>Favoris : {favoris.length}</p>
      <ArticleCard
        article={articlesDeTest[0]}
        estFavori={favoris.includes(articlesDeTest[0].id)}
        onToggleFavori={toggleFavori}
      />
      <ArticleCard
        article={articlesDeTest[1]}
        estFavori={favoris.includes(articlesDeTest[1].id)}
        onToggleFavori={toggleFavori}
      />
      <ArticleCard
        article={articlesDeTest[2]}
        estFavori={favoris.includes(articlesDeTest[2].id)}
        onToggleFavori={toggleFavori}
      />
    </section>
  );
}

export default Accueil;