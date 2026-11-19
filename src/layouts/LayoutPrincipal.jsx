import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

function LayoutPrincipal() {
  const [favoris, setFavoris] = useState([]);

  function toggleFavori(article) {
    if (favoris.some((f) => f.id === article.id)) {
      setFavoris(favoris.filter((f) => f.id !== article.id));
    } else {
      setFavoris([...favoris, { id: article.id, title: article.title }]);
    }
  }

  return (
    <>
      <header>
        <Link to="/">
          <img src="/logo-teranga-blog.png" alt="Teranga Blog" height="40" />
        </Link>
        <nav>
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/auteurs">Auteurs</NavLink>
          <NavLink to="/favoris">Favoris ({favoris.length})</NavLink>
        </nav>
      </header>
      <main>
        <Outlet context={{ favoris, toggleFavori }} />
      </main>
    </>
  );
}

export default LayoutPrincipal;