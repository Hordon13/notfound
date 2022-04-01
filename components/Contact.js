import styles from "../styles/contact.module.scss";

const Contact = () => {
  const details = {
    name: "unknown",
    email: "unknown",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/inquiry", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>contact</h1>
        <div className={styles.contact}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi,
            voluptatem tempore! Reiciendis suscipit eveniet dolorum, quis soluta
            corporis odit alias?
          </p>
          <a href="mailto:hor.donat@gmail.com">send an email</a>
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
