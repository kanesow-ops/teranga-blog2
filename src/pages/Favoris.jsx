import { Link, useOutletContext } from "react-router";

function Favoris() {
  const { favoris, toggleFavori } = useOutletContext();

  if (favoris.length === 0) {
    return (
      <section>
        <h1>Favoris</h1>
        <p className="message-etat">Aucun favori pour le moment.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Favoris ({favoris.length})</h1>
      <ul className="liste-simple">
        {favoris.map((f) => (
          <li key={f.id} className="ligne">
            <Link to={`/articles/${f.id}`}>{f.title}</Link>
            <button
              className="bouton bouton-secondaire"
              onClick={() => toggleFavori(f)}
            >
              Retirer
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Favoris;