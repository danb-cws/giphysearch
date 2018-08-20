# Giphysearch

Giphysearch is a code demo which allows you to search the Giphy API.

Started from default Create React App, uses Firebase for hosting: https://giphysearch-danb.firebaseapp.com/

Currently using the open beta API key which still seems to work, and removes the need to protect the key in some way. 
(As I had to do in another gif-related project: https://github.com/danb-cws/giphyvision).


### IE11 :(

The React code all functions fine, but the layout does not, because:
+ The grid prefixes for IE11 are not added by Autoprefixer, to resolve this one would need to pass 'grid: true' to 
the Webpack config, however you don't have access to this with the default Create React App setup without 'ejecting' 
which I don't want to do at this stage.
+ IE11 has no support for custom properties ('css variables'). In this case, I am not currently doing anything (although 
I have plans) with runtime changes, so a Post CSS / Sass type setup could be used to compile at build time. I wont be 
doing so because its just a demo... and the developer experience is so good with these in the browser.
