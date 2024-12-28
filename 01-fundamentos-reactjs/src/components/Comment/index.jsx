import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar";

import { useState } from "react";

export function Comment({content, onDeleteComment}) {
  
  const [likes, setLikes] = useState(0);

  function handleLikeCount() {
    setLikes((state => {
      return state + 1;
    }));
  }

  return (
    <article className={styles.comment}>
      <Avatar hasBorder={false} src="https://picsum.photos/200/300" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Italo Chiaradia</strong>
              <time title="11 de Maio às 12:10h" dateTime="2024-05-11 12:10:55">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário" onClick={() => onDeleteComment(content)}>
              <Trash size={24}/>
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp size={20}/>
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </article>
  )
}