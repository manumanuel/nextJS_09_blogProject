import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "contents/posts");

function getAllPostFiles() {
  return fs.readdirSync(postDirectory);
}

export function getPostData(postFile) {
  const postSlug = postFile.replace(/\.md$/, ""); // remove file extension
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8"); // utf-8 added to handle unicode data
  const { data, content } = matter(fileContent); //data is metadata, content is the actual content from .md file, both key-words are predefined

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPosts() {
  const postFiles = getAllPostFiles();
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  ); //recent posts will show first
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
