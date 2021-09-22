import React from 'react'
import styles from './Style/styles.module.css'
import BlogContent from './components/blogContents'
import NewsLetter from './components/newLetterSection'
import Comments from './components/Comment'
import RelatedArticles from './components/relatedArticle'
import Footer from '../../components/externalPagesComponents/Footer/Footer'
import Header from '../../components/externalPagesComponents/Header'
const index = () => {
  return (
    <>  
      <Header />
      <div className={styles.Blog_container}>
        <div className={styles.Blog_text}>
          <BlogContent />
          <NewsLetter />
          <Comments />
        </div>
        <div className={styles.keep_reading}>
          <RelatedArticles />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default index