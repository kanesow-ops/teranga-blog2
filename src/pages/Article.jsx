import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../constants";
import EtatRequete from "../components/EtatRequete";
import ListeCommentaires from "../components/ListeCommentaires";
import CommentaireForm from "../components/CommentaireForm";

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [commentaires, setCommentaires] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setChargement(true);
    setErreur(null);

    async function charger() {
      try {
        const [resArticle, resComm] = await Promise.all([
          fetch(`${API_URL}/posts/${id}`, { signal: controller.signal }),
          fetch(`${API_URL}/posts/${id}/comments`, { signal: controller.signal }),
        ]);
        if (!resArticle.ok) {
          throw new Error(`Article introuvable (code ${resArticle.status})`);
        }
        if (!resComm.ok) {
          throw new Error(`Commentaires indisponibles (code ${resComm.status})`);
        }
        setArticle(await resArticle.json());
        setCommentaires(await resComm.json());
        setChargement(false);
      } catch (e) {
        if (e.name === "AbortError") return;
        setErreur(e.message || "Impossible de charger l'article.");
        setChargement(false);
      }
    }

    charger();
    return () => controller.abort();
  }, [id]);

  function ajouterCommentaire({ name, body }) {
    const nouveau = { id: Date.now(), postId: article.id, name, body };
    setCommentaires([...commentaires, nouveau]);
  }

  return (
    <EtatRequete chargement={chargement} erreur={erreur}>
      {article && (
        <article>
          <h1>{article.title}</h1>
          <p>{article.body}</p>

          <h2>Commentaires</h2>
          <ListeCommentaires commentaires={commentaires} />
          <CommentaireForm onAjouter={ajouterCommentaire} />
        </article>
      )}
    </EtatRequete>
  );
}

export default Article;