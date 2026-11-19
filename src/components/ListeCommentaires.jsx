function ListeCommentaires({ commentaires }) {
  if (commentaires.length === 0) {
    return <p>Aucun commentaire pour le moment.</p>;
  }

  return (
    <ul>
      {commentaires.map((c) => (
        <li key={c.id}>
          <strong>{c.name}</strong> : {c.body}
        </li>
      ))}
    </ul>
  );
}

export default ListeCommentaires;