import { Link } from "react-router";

function Introuvable() {
  return (
    <section className="page-404">
      <h1>404 : page introuvable</h1>
      <p>Cette adresse n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </section>
  );
}

export default Introuvable;