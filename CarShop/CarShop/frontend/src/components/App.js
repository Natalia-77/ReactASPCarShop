import Header from './Header';
import Footer from './Footer';
import Article from './Article';
import Sidebar from './Sidebar';
import { Switch } from 'react-router';
import Chat from './Chat';
import {BrowserRouter as Router,Route }from 'react-router-dom';
import './App.css';



function App(){
    return(        
        <div className="container">
          <Header/>
          <Router>
                <Switch>
                    <Route exact path="/chat" component={Chat}/>
                </Switch>
            </Router>
          <Article/>
          <Sidebar/>
          <Footer/> 
        </div>
        
    );
}

export default App;