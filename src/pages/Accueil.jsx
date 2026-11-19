import ArticleCard from "../components/ArticleCard";
import { articlesTest } from "../donnees-test";

function Accueil() {
  return (
    <section>
      <h1>Accueil</h1>
      <ArticleCard article={articlesTest[0]} />
      <ArticleCard article={articlesTest[1]} />
      <ArticleCard article={articlesTest[2]} />
    </section>
  );
}

export default Accueil;