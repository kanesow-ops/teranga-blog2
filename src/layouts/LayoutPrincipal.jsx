import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

function LayoutPrincipal() {
  const [favoris, setFavoris] = useState([]);
  const [connecte, setConnecte] = useState(false);

  function toggleFavori(article) {
    if (favoris.some((f) => f.id === article.id)) {
      setFavoris(favoris.filter((f) => f.id !== article.id));
    } else {
      setFavoris([...favoris, { id: article.id, title: article.title }]);
    }
  }

  return (
    <>
      <header className="site-header">
        <Link to="/" className="logo-lien">
          <img src="/logo-teranga-blog.png" alt="Teranga Blog" className="logo" />
        </Link>
        <nav className="nav-principal">
          <NavLink to="/" end className="nav-lien">Accueil</NavLink>
          <NavLink to="/articles" className="nav-lien">Articles</NavLink>
          <NavLink to="/auteurs" className="nav-lien">Auteurs</NavLink>
          <NavLink to="/favoris" className="nav-lien">
            Favoris ({favoris.length})
          </NavLink>
          <NavLink to="/mon-espace" className="nav-lien">Mon espace</NavLink>
        </nav>
      </header>
      <main className="contenu">
        <Outlet context={{ favoris, toggleFavori, connecte, setConnecte }} />
      </main>
    </>
  );
}

export default LayoutPrincipal;