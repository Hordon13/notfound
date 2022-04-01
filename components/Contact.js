import styles from "../styles/contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>contact</h2>
        <div className={styles.contact}>
          <p>
            If you have any questions about the working process, prices, or
            other details, you may find answers on our FAQ page. <br /> <br />
            Please feel free to contact us at any time. Don't worry if you don't
            know exactly what you want, we will help you figure it out.
          </p>
          <a href="mailto:page@notfound.hu">send an email</a>
        </div>
        <footer>
          <p>{`${new Date().getFullYear()} Budapest`}</p>
          <p>page@notfound.hu</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
