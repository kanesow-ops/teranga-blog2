function EtatRequete({ chargement, erreur, children }) {
  if (chargement) {
    return <p>Chargement…</p>;
  }
  if (erreur) {
    return <p role="alert">Erreur : {erreur}</p>;
  }
  return children;
}

export default EtatRequete;