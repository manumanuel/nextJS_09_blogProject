## Project structure

- Pages
  - index
  - contact
  - posts
    - index
    - [slug] (dynamically loading)
- Components

  - Hero
  - Featured-posts

  ### use of Link compared to <a> tag in react

  - if a link(app resource) is specified in <a> tag, it will send a new request to server and also cause the page reload [because it's handled by browser]
  - when using Link from react, it helps automatic prefetching of data if required
  - Keeps the app as SPA means without reload the entire page, it changes the content ie page is loaded only in the initial render,
    all other details are rendered as content to that page
  - we can specify the resource link as a href property to Link component
  - eg: <Link href="/link/to/resource"> Name </Link>

  ##### note- when using react version <13 : when passing a component within a Link component, we should specify the <a> tag for the wrapping of that component, because only for the plain text like '/link/resource', it will pass <a> tag automatically.

  - eg: <Link href="/"> <a> <Logo /> </a> </Link>

  ### to add markdown file install react-markdown

  - npm install react-markdown
  - to mark every text it should enclosed with <ReactMarkDown>
  - saved as a .md file
  - to map an image the .md file should be same as the image folder name

  ### gray- matter package

  - used this package for reading a markdown file and split that into meta data and actual markdown content
