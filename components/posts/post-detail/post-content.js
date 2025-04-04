import ReactMarkDown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// import { solarizedLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import a11yDark from "react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark";

import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import html from "react-syntax-highlighter/dist/cjs/languages/prism/markup";

SyntaxHighlighter.registerLanguage("js", javascript); //js is the name defined in .md file
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("html", html);

function PostContent(props) {
  const { postData } = props;
  const imagePath = `/images/posts/${postData.slug}/${postData.image}`;

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${postData.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={500}
    //       height={350}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        //console.log(image);
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${postData.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={500}
              height={350}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={a11yDark}
          language={language}
          children={children}
        />
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={postData.title} image={imagePath} />
      <ReactMarkDown components={customRenderers}>
        {postData.content}
      </ReactMarkDown>
    </article>
  );
}
export default PostContent;
