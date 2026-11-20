function ListeCommentaires({ commentaires }) {
  if (commentaires.length === 0) {
    return <p className="message-etat">Aucun commentaire pour le moment.</p>;
  }

  return (
    <ul className="commentaires">
      {commentaires.map((c) => (
        <li key={c.id} className="commentaire">
          <strong>{c.name}</strong> : {c.body}
        </li>
      ))}
    </ul>
  );
}

export default ListeCommentaires;