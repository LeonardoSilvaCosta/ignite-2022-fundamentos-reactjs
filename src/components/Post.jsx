import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/LeonardoSilvaCosta.png"
          />
          <div className={styles.authorInfo}>
            <strong>Leonardo Costa</strong>
            <span>Fullstack developer</span>
          </div>
        </div>

        <time title="19 de junho às 09:48h" dateTime="2022-06-19 09:48:00">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galera 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat.
          </p>
          <p>
            👉 <a href="#">jane.design/doctorcare 🚀 </a>
          </p>
          <p>
            <a href="#">#novoprojeto</a> <a href="#"> #nlw #rocketseat</a>
          </p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
