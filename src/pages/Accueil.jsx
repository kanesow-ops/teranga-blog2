import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { API_URL } from "../constants";
import EtatRequete from "../components/EtatRequete";
import ListeArticles from "../components/ListeArticles";

function Accueil() {
  const { favoris, toggleFavori } = useOutletContext();
  const [articles, setArticles] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function charger() {
      try {
        const res = await fetch(`${API_URL}/posts?_limit=3`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Le serveur a répondu ${res.status}`);
        setArticles(await res.json());
        setChargement(false);
      } catch (e) {
        if (e.name === "AbortError") return;
        setErreur(e.message);
        setChargement(false);
      }
    }

    charger();
    return () => controller.abort();
  }, []);

  return (
    <section>
      <h1>Derniers articles</h1>
      <EtatRequete chargement={chargement} erreur={erreur}>
        <ListeArticles
          articles={articles}
          favoris={favoris}
          onToggleFavori={toggleFavori}
        />
      </EtatRequete>
    </section>
  );
}

export default Accueil;