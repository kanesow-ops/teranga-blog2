import { useState } from "react";

function CommentaireForm({ onAjouter }) {
  const [nom, setNom] = useState("");
  const [message, setMessage] = useState("");
  const [erreur, setErreur] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (nom.trim() === "") {
      setErreur("Le nom est obligatoire.");
      return;
    }
    if (message.trim().length < 10) {
      setErreur("Le message doit contenir au moins 10 caractères.");
      return;
    }

    onAjouter({ name: nom.trim(), body: message.trim() });
    setNom("");
    setMessage("");
    setErreur("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <textarea
        placeholder="Votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {erreur && <p role="alert">{erreur}</p>}
      <button type="submit">Publier</button>
    </form>
  );
}

export default CommentaireForm;