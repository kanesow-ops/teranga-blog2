import { Navigate, useOutletContext } from "react-router";

function Connexion() {
  const { connecte, setConnecte } = useOutletContext();

  if (connecte) {
    return <Navigate to="/mon-espace" replace />;
  }

  return (
    <section>
      <h1>Connexion</h1>
      <p>Connexion simulée : aucun mot de passe nécessaire.</p>
      <button className="bouton" onClick={() => setConnecte(true)}>
        Se connecter
      </button>
    </section>
  );
}

export default Connexion;