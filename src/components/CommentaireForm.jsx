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
    <form className="formulaire" onSubmit={handleSubmit}>
      <input
        className="champ"
        type="text"
        placeholder="Votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <textarea
        className="champ"
        placeholder="Votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {erreur && (
        <p role="alert" className="erreur">
          {erreur}
        </p>
      )}
      <button type="submit" className="bouton">
        Publier
      </button>
    </form>
  );
}

export default CommentaireForm;