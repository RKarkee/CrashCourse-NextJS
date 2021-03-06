import styles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem';
function ArticleList({articles}) {
  return (
    <div className={styles.grid}>
      {articles.map((article)=>(
       <ArticleItem article={article}/>       
      ))}
    </div>
  )
}

export default ArticleList
