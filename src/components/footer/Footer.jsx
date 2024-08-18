import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>WEBEYECRAFT</div>
      <div className={styles.text}>
        WEBEYECRAFT TECHNOLOGIES PVT LTD © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;