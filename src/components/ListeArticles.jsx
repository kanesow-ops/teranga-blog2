import ArticleCard from "./ArticleCard";

function ListeArticles({ articles, favoris, onToggleFavori }) {
  if (articles.length === 0) {
    return <p>Aucun article ne correspond à la recherche.</p>;
  }

  return (
    <div>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          estFavori={favoris.some((f) => f.id === article.id)}
          onToggleFavori={onToggleFavori}
        />
      ))}
    </div>
  );
}

export default ListeArticles;