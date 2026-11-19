import { useEffect, useState } from "react";
import { Link } from "react-router";
import { API_URL } from "../constants";
import EtatRequete from "../components/EtatRequete";

function Auteurs() {
  const [auteurs, setAuteurs] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function charger() {
      try {
        const res = await fetch(`${API_URL}/users`, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(`Le serveur a répondu ${res.status}`);
        }
        setAuteurs(await res.json());
        setErreur(null);
        setChargement(false);
      } catch (e) {
        if (e.name === "AbortError") return;
        setErreur(e.message || "Impossible de charger les auteurs.");
        setChargement(false);
      }
    }

    charger();
    return () => controller.abort();
  }, []);

  return (
    <section>
      <h1>Auteurs</h1>
      <EtatRequete chargement={chargement} erreur={erreur}>
        <ul>
          {auteurs.map((a) => (
            <li key={a.id}>
              <Link to={`/auteurs/${a.id}`}>{a.name}</Link> (@{a.username}) :{" "}
              {a.company.name}
            </li>
          ))}
        </ul>
      </EtatRequete>
    </section>
  );
}

export default Auteurs;