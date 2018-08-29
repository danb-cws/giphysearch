# Giphysearch

Giphysearch is a code demo which allows you to search the Giphy API within a super snappy UI.

Hosted on Firebase: https://giphysearch-danb.firebaseapp.com/

For this project, I wanted to just go with the default Create React App setup as opposed to spending ages setting up my own boilerplate, and to concentrate on implementing some some standard UI/frontend tasks in the 'React way'.  

It's currently using the Giphy open beta API key which still seems to work, and removes the need to protect a private key in some way.
(As in another gif-related project: https://github.com/danb-cws/giphyvision).


## I'm liking:

- React 16.3, the whole CRA experience, object properties.
- Prettier (with defaults) is a little strange first off but I have quickly grown to love it.
- Grid is just grrreat!

## React

- It's been 18 months or so since I had a look at React (it just wasn't a requirement in my last role) and I must say I have really enjoyed the experience of working with React 16.3, particularly 'object properties' style coding seems much more reasonable to me.
- Gets 100% PWA score in Lighthouse!

## CSS

- Challenges with unknown size and aspect ratio of the gifs.
- Uses grid with portrait/landscape views set in media queries.
- Fluid sized type between a min and max (entire UI scales on the base font size).

#### IE11 :(

The React code all functions fine, the layout doesn't, but it could... because:

- The grid prefixes for IE11 are not added by Autoprefixer, to resolve this one would need to pass 'grid: true' to
  the Webpack config, however you don't have access to this with the default Create React App setup without 'ejecting'
  which I don't want to do at this stage.
- IE11 has no support for custom properties ('css variables'). In this case, I am not currently doing anything (although
  I have plans) with runtime changes, so a Post CSS/Sass type setup could be used to compile at build time. I wont be
  doing so because its just a demo... and the developer experience is so good - actually having these 'variables' to edit live right in dev tools.
