import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getAllPostFiles } from "../../helper/post-utils";
import { Fragment } from "react";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.postDetails.title}</title>
        <meta name="description" content={props.postDetails.excerpt} />
      </Head>
      <PostContent postData={props.postDetails} />
    </Fragment>
  );
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
