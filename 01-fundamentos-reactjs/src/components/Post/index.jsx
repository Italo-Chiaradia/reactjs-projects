import styles from "./Post.module.css";
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { useState } from "react";

export function Post({author, publishedAt, content}) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");


  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault();
    
    setComments(prevState => [...prevState, newComment]);
    setNewComment("");
  }
  function deleteComment(deletedComment) {
    setComments(prevState => prevState.filter(comment => comment !== deletedComment))
  }
  function handleNewCommentChange(event) {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  }
  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}  
          />
          
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {
          content.map((line) => {
            if (line.type === "paragraph") {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type === "link") {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.contentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Escreva um comentário..."
          value={newComment}
          onChange={handleNewCommentChange} 
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button disabled={newComment.length === 0}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {
          comments.map((comment) => {
            return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
          })
        }
      </div>
    </article>
  )
}