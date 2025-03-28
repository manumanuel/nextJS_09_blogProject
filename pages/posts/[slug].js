import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getAllPostFiles } from "../../helper/post-utils";

function PostDetailPage(props) {
  return <PostContent postData={props.postDetails} />;
}

export function getStaticProps(context) {
  const { slug } = context.params;
  const postData = getPostData(slug);
  return {
    props: {
      postDetails: postData,
    },
    revalidate: 600, //check for changes in every 10 minutes
  };
}

export function getStaticPaths() {
  const allPostFiles = getAllPostFiles();
  const slugs = allPostFiles.map((slug) => slug.replace(/\.md$/, "")); //remove file extension
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })), //create an array of objects with slug property
    fallback: false,
  };
}

export default PostDetailPage;
