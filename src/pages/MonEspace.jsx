import { Navigate, useOutletContext } from "react-router";

function MonEspace() {
  const { connecte, setConnecte } = useOutletContext();

  if (!connecte) {
    return <Navigate to="/connexion" replace />;
  }

  return (
    <section>
      <h1>Mon espace</h1>
      <p>Bienvenue ! Tu es connecté.</p>
      <button
        className="bouton bouton-secondaire"
        onClick={() => setConnecte(false)}
      >
        Se déconnecter
      </button>
    </section>
  );
}

export default MonEspace;