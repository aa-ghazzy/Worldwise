import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <p className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </p>
    </footer>
  );
}

export default Footer;
