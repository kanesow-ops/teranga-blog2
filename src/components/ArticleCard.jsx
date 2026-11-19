import { Link } from "react-router";

function ArticleCard({ article, estFavori, onToggleFavori }) {
  const extrait =
    article.body.length > 100
      ? article.body.slice(0, 100) + "…"
      : article.body;

  return (
    <article>
      <h3>
        <Link to={`/articles/${article.id}`}>{article.title}</Link>
      </h3>
      <p>{extrait}</p>
      <button onClick={() => onToggleFavori(article)}>
        {estFavori ? "Retirer des favoris" : "Ajouter aux favoris"}
      </button>
    </article>
  );
}

export default ArticleCard;