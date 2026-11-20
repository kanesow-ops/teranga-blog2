function BarreRecherche({ valeur, onChange }) {
  return (
    <input
      className="champ recherche"
      type="search"
      placeholder="Rechercher par titre"
      value={valeur}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default BarreRecherche;