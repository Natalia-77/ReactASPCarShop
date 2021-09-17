import './Sidebar.css';
import articles from '../data/article.json';

function Sidebar(){
    return(
        <div className="sidebar">
            <nav>
                <ul>
                    {articles.map(item=>
                        <li>
                            <a href={item.href}>{item.title}</a>
                        </li>                            
                        )}                       
                </ul>
                
                <lo >
                     <a  href="/chat">Залишити відгук</a>  
               </lo>
                            
            </nav> 
        </div>
    );
}
export default Sidebar;