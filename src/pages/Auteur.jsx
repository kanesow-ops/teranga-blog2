import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { API_URL } from "../constants";
import EtatRequete from "../components/EtatRequete";

function Auteur() {
  const { id } = useParams();
  const [auteur, setAuteur] = useState(null);
  const [articles, setArticles] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setChargement(true);
    setErreur(null);

    async function charger() {
      try {
        const [resAuteur, resArticles] = await Promise.all([
          fetch(`${API_URL}/users/${id}`, { signal: controller.signal }),
          fetch(`${API_URL}/posts?userId=${id}`, { signal: controller.signal }),
        ]);
        if (!resAuteur.ok) {
          throw new Error(`Auteur introuvable (code ${resAuteur.status})`);
        }
        if (!resArticles.ok) {
          throw new Error(`Articles indisponibles (code ${resArticles.status})`);
        }
        setAuteur(await resAuteur.json());
        setArticles(await resArticles.json());
        setChargement(false);
      } catch (e) {
        if (e.name === "AbortError") return;
        setErreur(e.message || "Impossible de charger l'auteur.");
        setChargement(false);
      }
    }

    charger();
    return () => controller.abort();
  }, [id]);

  return (
    <EtatRequete chargement={chargement} erreur={erreur}>
      {auteur && (
        <section>
          <h1>{auteur.name}</h1>
          <p>
            @{auteur.username} · {auteur.email} · {auteur.company.name}
          </p>
          <h2>Ses articles</h2>
          <ul>
            {articles.map((a) => (
              <li key={a.id}>
                <Link to={`/articles/${a.id}`}>{a.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </EtatRequete>
  );
}

export default Auteur;