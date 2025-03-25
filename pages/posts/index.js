import AllPosts from "../../components/posts/all-posts";

function AllPostsPage() {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
      time: "2025-02-10",
    },
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with NextJS",
      image: "next-js-vs-react.png",
      excerpt:
        "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
      time: "2025-02-10",
    },
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with NextJS",
      image: "next.png",
      excerpt:
        "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
      time: "2025-02-10",
    },
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with NextJS",
      image: "next-js-vs-react.png",
      excerpt:
        "NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
      time: "2025-02-10",
    },
  ];
  return <AllPosts posts={DUMMY_POSTS} />;
}
export default AllPostsPage;
