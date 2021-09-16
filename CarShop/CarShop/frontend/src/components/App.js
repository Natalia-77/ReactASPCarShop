import Header from './Header';
import Footer from './Footer';
import Article from './Article';
import Sidebar from './Sidebar';
import './App.css';



function App(){
    return(
        // <h1>Helloww</h1>
        <div className="container">
          <Header></Header>
          <Article/>
          <Sidebar/>
          <Footer></Footer>
        </div>
        
    );
}

export default App;