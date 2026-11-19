import ArticleCard from "../components/ArticleCard";
import { articlesDeTest } from "../donnees-test";

function Accueil() {
  return (
    <section>
      <h1>Accueil</h1>
      <ArticleCard article={articlesDeTest[0]} />
      <ArticleCard article={articlesDeTest[1]} />
      <ArticleCard article={articlesDeTest[2]} />
    </section>
  );
}

export default Accueil;