import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About WEBEYECRAFT</h2>
        <h2 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h2>
        <p className={styles.desc}>
          Webeyecraft Technologies pvt Ltd is a IT solution company that
          specializes in providing a wide range of digital services, including web
          development, software solutions, and IT consulting. We are known for
          creating innovative and customized solutions tailored to meet the
          unique needs of businesses across various industries. We focuses on
          delivering high-quality, scalable, and secure technology solutions
          that help clients improve their online presence and achieve their
          business goals. Our team of experts is dedicated to staying up-to
          date with the latest industry trends, ensuring that clients receive
          cutting-edge services.
        </p>
        <p className={styles.desc}>
          Our journey began with a simple mission to empower
          businesses with the tools and technologies they need to thrive in a
          rapidly changing world. We work closely with our clients to
          understand their unique goals and challenges, ensuring that every
          project we undertake is a step towards achieving their vision.
          Whether you're a small startup or a large enterprise, we're here to
          help you succeed
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.gif"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;