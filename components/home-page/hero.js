import React from "react";
import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile-generic.jpg"
          alt="me"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Josef</h1>
      <p>I blog about web development - especially React and Vue</p>
    </section>
  );
}

export default Hero;
