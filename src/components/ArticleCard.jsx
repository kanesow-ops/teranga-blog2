function ArticleCard({ article, estFavori, onToggleFavori }) {
  const extrait =
    article.body.length > 100
      ? article.body.slice(0, 100) + "…"
      : article.body;

  return (
    <article>
      <h3>{article.title}</h3>
      <p>{extrait}</p>
      <button onClick={() => onToggleFavori(article.id)}>
        {estFavori ? "Retirer des favoris" : "Ajouter aux favoris"}
      </button>
    </article>
  );
}

export default ArticleCard;