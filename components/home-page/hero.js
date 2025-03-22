import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/anime.png"
          alt="my own image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Manu</h1>
      <p> Blog for sharing articles related to front end technologies </p>
    </section>
  );
}
export default Hero;
