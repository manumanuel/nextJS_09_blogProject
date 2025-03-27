import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData } from "../../helper/post-utils";

function PostDetailPage(props) {
  return <PostContent postData={props.postData} />;
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

export default PostDetailPage;
