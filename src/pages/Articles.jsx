import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import EtatRequete from "../components/EtatRequete";
import BarreRecherche from "../components/BarreRecherche";
import ListeArticles from "../components/ListeArticles";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [recherche, setRecherche] = useState("");
  const [favoris, setFavoris] = useState([]); // provisoire : remonté dans le layout à l'étape 5

  useEffect(() => {
    const controller = new AbortController();

    async function charger() {
      try {
        const res = await fetch(`${API_URL}/posts?_limit=12`, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`Le serveur a répondu ${res.status}`);
        }
        const data = await res.json();
        setArticles(data);
        setErreur(null);
        setChargement(false);
      } catch (e) {
        if (e.name === "AbortError") return;
        setErreur(e.message || "Impossible de charger les articles.");
        setChargement(false);
      }
    }

    charger();
    return () => controller.abort();
  }, []);

  const articlesFiltres = articles.filter((a) =>
    a.title.toLowerCase().includes(recherche.toLowerCase())
  );

  function toggleFavori(id) {
    if (favoris.includes(id)) {
      setFavoris(favoris.filter((f) => f !== id));
    } else {
      setFavoris([...favoris, id]);
    }
  }

  return (
    <section>
      <h1>Articles</h1>
      <p>Favoris : {favoris.length}</p>
      <BarreRecherche valeur={recherche} onChange={setRecherche} />
      <EtatRequete chargement={chargement} erreur={erreur}>
        <ListeArticles
          articles={articlesFiltres}
          favoris={favoris}
          onToggleFavori={toggleFavori}
        />
      </EtatRequete>
    </section>
  );
}

export default Articles;