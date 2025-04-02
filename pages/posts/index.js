import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helper/post-utils";
import { Fragment } from "react";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta name="description" content="Listing all posts in blogs-manu" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
