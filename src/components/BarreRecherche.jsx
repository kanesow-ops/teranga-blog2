function BarreRecherche({ valeur, onChange }) {
  return (
    <input
      type="search"
      placeholder="Rechercher par titre"
      value={valeur}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default BarreRecherche;