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

  - layout with functionality of fill, responsive etc also deprecated within the <Image> tag

  ### to add markdown file install react-markdown

  - npm install react-markdown
  - to mark every text it should enclosed with <ReactMarkDown>
  - saved as a .md file
  - to map an image the .md file should be same as the image folder name

  ### gray- matter package

  - used this package for reading a markdown file and split that into meta data and actual markdown content
  - for accessing the image, image folder name should be same as markdown file name.

  ### getStaticPaths

  - In Next.js, getStaticPaths is used in conjunction with getStaticProps for dynamic routes to specify which paths should be pre-rendered at build time.
  - Using getStaticPaths, we return an object containing a paths-array that specifies all the possible dynamic routes that should be statically generated.
  - fallback property can have 3 types

  1. false - if page is not returned by getStaticPaths, a 404 page will show
  2. true - if page is not pre-generated on build time, nextJs will render it on demand the first time it's requested.
  3. blocking - the page will wait until the data is fetched and the page is built before showing content to the user

  ### renderers in markdown

       In markdown, renderers refers to the process or tools that convert markdown content into HTML or other formats. [ Markdown is a lightweight markup language designed to be easy to write and read and it relies on 'renderers' to transform the plain text Markdown into a formatted output-usually Html]

       In this project <img> tag is replaced with <Image> in react using 'components'
       * To present a block of code in component we can use package 'react-syntax-highlighter'
       - using this we can render code snippets with language specification and can choose various themes to present the code

  ### metadata implementation using Head

  - import Head from 'next/head'
  - then add contents as shown below,
      <Head> 
      <title>{}</title> 
      <meta name="" content="">
      </Head>
    Here title, name, content details can be hard-coded or can add dynamically

- loading page can be configured as shown below,
   <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1">
   </Head>

### use of \_document.js

- In nextJs, \_document.js file is a special file that allows us to customize the HTML document structure [ie we can define the format of html with attributes if required]. It's used to modify the default document structure that is generated for every page in the next.js app.
- its added as a class based component

### Portals usage with \_document.js

- Its a feature of React
- Portals provide a way to render children into a DOM node that exist outside the DOM hierarchy of the parent component.
- This can be useful when need to render a component outside its usual position in the component tree but still maintains its functionality and behavior
- eg: Modals, tooltips, notifications, dropdowns
- implemented using ReactDOM.createPortal
