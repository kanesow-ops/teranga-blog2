function EtatRequete({ chargement, erreur, children }) {
  if (chargement) {
    return <p className="message-etat">Chargement…</p>;
  }
  if (erreur) {
    return (
      <p role="alert" className="message-erreur">
        Erreur : {erreur}
      </p>
    );
  }
  return children;
}

export default EtatRequete;