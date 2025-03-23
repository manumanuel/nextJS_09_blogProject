import Link from "next/link";
import Logo from "./logo";

import classes from "./main-nav-header.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/">
        {/* <a> */}
        <Logo />
        {/* </a> */}
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">All Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainHeader;
