import ReactMarkDown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

function PostContent(props) {
  const { postData } = props;
  const imagePath = `/images/posts/${postData.slug}/${postData.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={postData.title} image={imagePath} />
      <ReactMarkDown>{postData.content}</ReactMarkDown>
    </article>
  );
}
export default PostContent;
