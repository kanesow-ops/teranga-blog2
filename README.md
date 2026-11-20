# Teranga Blog

Mini-blog multipage réalisé avec React dans le cadre du cours React (projet individuel).
Les étudiants peuvent lire des articles, découvrir leurs auteurs, laisser des commentaires
et garder leurs articles préférés. Les données viennent de l'API publique JSONPlaceholder
(les textes en latin sont des données d'essai).

## Fonctionnalités
- Navigation sans rechargement avec React Router, le lien de la page courante est mis en valeur
- Liste d'articles avec recherche par titre en direct
- Page de détail d'un article (`/articles/3`) avec ses commentaires
- Formulaire de commentaire validé : le commentaire s'ajoute localement, sans envoi à l'API
- Favoris conservés d'une page à l'autre, avec compteur dans la barre de navigation
- Liste des auteurs et fiche de chaque auteur avec ses articles
- Messages de chargement et d'erreur, page 404 pour les adresses inconnues
- Niveau Or : connexion simulée et route protégée « Mon espace »

## Lancer le projet
```bash
git clone <adresse de mon dépôt GitHub>
cd teranga-blog
npm install
npm run dev
```
Ouvrir ensuite l'adresse affichée dans le terminal (par défaut http://localhost:5173).

Pour vérifier la version de production : `npm run build`.

## Adresse en ligne
<colle ici le lien de ton site déployé>

## Technologies
React 19, Vite, React Router, API JSONPlaceholder.

## Ce que j'ai appris
1. **Faire remonter l'état et le partager entre les pages.** Les favoris sont gardés dans le
   layout, le parent commun de toutes les pages. Ils survivent donc à la navigation, et les
   pages les récupèrent avec `useOutletContext`. Le compteur n'est pas stocké : il se calcule
   avec `favoris.length`. Je ne modifie jamais un tableau en place, je crée un nouveau tableau
   avec `filter` ou `[...favoris, nouveau]`.
2. **Charger des données proprement avec `useEffect` et `fetch`.** Une requête a trois états :
   chargement, erreur, données. `fetch` ne rejette pas la promesse sur un code 404, donc je
   teste `res.ok` moi-même. Le retour de l'effet appelle `controller.abort()` pour annuler
   l'ancienne requête quand l'identifiant change, afin qu'elle n'écrase pas la nouvelle.
3. **Organiser une application multipage avec React Router.** Le routeur associe chaque adresse
   à une page, `Outlet` affiche la page courante dans le layout, `Link` et `NavLink` changent
   de page sans recharger, et `useParams` lit l'identifiant dans l'adresse (toujours sous forme
   de texte). `path: "*"` attrape les adresses inconnues, et en ligne il faut une règle de
   redirection vers `index.html` pour que recharger `/articles/3` ne donne pas de 404.