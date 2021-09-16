import Header from './Header';
import Footer from './Footer';
import Article from './Article';
import './App.css';



function App(){
    return(
        // <h1>Helloww</h1>
        <div className="container">
          <Header></Header>
          <Article/>
          <Footer></Footer>
        </div>
        
    );
}

export default App;