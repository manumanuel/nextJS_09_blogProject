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

## nextJS Deployment options

1. Standard Build
2. Full Static Build

### standard build

- command -> next build
- Produces optimized production bundles and a server-side app; requires nodejs server
- Pages are pre-rendered(if possible) but nodeJs server requires for API routes, server side pages and page re-validations

### full static build

- command -> next export [add in package.json, if not there]
- produces 100% static app; no nodeJS server required
- doesn't work if the app has API routes, server-side pages or use page re-validations

## Deployment steps & considerations

1. Add page meta-data, optimize code, remove unnecessary dependencies
2. Use environment variables for variable data
   eg: db credentials, API keys...
3. Do a test build and test the production ready app locally or some test server
4. Deploy

### next.config.js

- add in the root folder of react application
- it provide a flexible & powerful way to configure various aspects of application, from routing & image optimizations to environment variables and webpack configurations
- use cases

1. Environment variables
2. Custom webpack configurations
3. Server-side rendering (SSR) settings
4. Redirects, rewrites and headers
5. image optimization settings
6. internationalization(i18n) settings

## Host nextJS in a node server

1. ship the whole project to the node supporting web server
2. npm install [to use the supporting packages]
3. npm start [to deploy the app on a url]

## Vercel deployment

1. create a github connected account [free use]
2. try to add project from github [from main branch]
3. deploy

## next export

- In next js, next export command is used to export our next js app as static site. This means that next js app is pre-rendered to static html files, and any dynamic features (like API routes, SSR) will be removed.
- consider to add next.config.js file which is configured to support static export.
  eg: module.exports = {
  // Enable static export
  target: 'serverless', // Optional but recommended
  }
