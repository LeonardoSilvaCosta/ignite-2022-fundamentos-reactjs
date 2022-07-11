import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';

import './global.css';

//author: { avatar_url: "", name: "", role: ""}
//publishedAt: Date
//content: string"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/LeonardoSilvaCosta.png",
      name: "Leonardo Costa",
      role: "CTO Psiecode"
    },
    content: [
      { type: 'paragraph', content: `Fala galera 👋` },
      { type:'paragraph', content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
      no NLW Return, evento da Rocketseat.`},
      {type: 'link', content: `👉 jane.design/doctorcare 🚀`},
    ],
    publishedAt: new Date('2022-07-11 04:24:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: `Fala galera 👋` },
      { type:'paragraph', content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
      no NLW Return, evento da Rocketseat.`},
      {type: 'link', content: `👉 jane.design/doctorcare 🚀`},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App;

