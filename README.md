# Giphysearch

Hosted on Firebase: https://giphysearch-danb.firebaseapp.com/

Giphysearch is a code demo and learning project which allows you to search the Giphy API within a super snappy UI.

For this project, I wanted to just go with the default Create React App setup as opposed to spending ages setting up my own boilerplate, and to concentrate on implementing some some standard UI/frontend tasks in the 'React way'.  

It's currently using the Giphy open beta API key which still seems to work, and removes the need to protect a private key in some way.
(As in my other gif-related project: https://github.com/danb-cws/giphyvision).

The app gets 100% PWA score in Lighthouse!


## I'm liking:

- React 16.3 and the whole 'CRA' experience.
- Prettier (with defaults) is a little strange first off but I have quickly grown to love it.
- This is a great project to use with grid

## React

- It's been 18 months or so since I had a look at React (it just wasn't a requirement in my last role) and I have really enjoyed the improved experience of working with 16.3, particularly 'object properties' proposal and the generally 'terse' style of coding.
- React.fragment is a welcome addition so as not to have to keep adding arbitrary wrappers.
- I have some content in place for the 'pre-boot' of React, test with a throttled connection to see.

## CSS

- Challenges with unknown size and aspect ratio of the gifs.
- Uses grid with portrait/landscape views set in media queries.
- Fluid sized type between a min and max (entire UI scales on the base font size).

##### IE11 :(

The React code all functions fine, the layout doesn't, but it could if I could be bothered... via:

- The grid prefixes for IE11 are not added by Autoprefixer, to resolve this one would need to pass 'grid: true' to
  the Webpack config, however you don't have access to this with the default Create React App setup without 'ejecting'
  which I don't want to do at this stage.
- IE11 has no support for custom properties ('css variables'). In this case, I am not currently doing anything (although
  I have plans) with runtime changes, so a Post CSS/Sass type setup could be used to compile at build time. But... the developer experience is just so good, actually having these 'variables' to edit live right in dev tools.
