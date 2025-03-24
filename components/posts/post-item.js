import Image from "next/image";
import Link from "next/link";

import classes from "./post-item.module.css";

function PostItem(props) {
  const { title, image, time, excerpt, slug } = props.post;
  const formattedTime = new Date(time).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div>
          {" "}
          <Image
            className={classes.image}
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />{" "}
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedTime}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
export default PostItem;
