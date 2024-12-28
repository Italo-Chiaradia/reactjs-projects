import styles from "./Post.module.css";
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react";

interface Author {
  name: string,
  role: string,
  avatarUrl: string
}
interface Content {
  type: string,
  content: string
}
export interface PostType {
  id: number, 
  author: Author,
  publishedAt: Date,
  content: Content[],
}
interface PostProps {
  post: PostType
}

export function Post({post}: PostProps) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");


  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    
    setComments([...comments, newComment]);
    setNewComment("");
  }
  function deleteComment(deletedComment: string) {
    setComments(prevState => prevState.filter(comment => comment !== deletedComment))
  }
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  }
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={post.author.avatarUrl}  
          />
          
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {
          post.content.map((line) => {
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