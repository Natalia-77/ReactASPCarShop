import './Article.css';
import articles from '../data/article.json';
// console.log(articles);

function Article(){
    return(
        <div className="article">
            {articles.map(item=>
            <section>
            <h2>{item.title}</h2>
            <div>{item.body}</div>
            </section>)}
        </div>
    );
}

export default Article;