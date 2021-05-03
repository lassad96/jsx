

import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import imageInSrc from "./imageInSrc.jpg";
import './style.css';

function App() {
  
    
      return (
      
        <div>
          <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
            <h1 className="title red">TAJOURI LASSAD</h1>
            
            <img src={imageInSrc}/>
            <br />
            <img src="/imageInPublic.jpg" />
          </div>
          <video width="320" height="240" controls>
            <source src="https://youtu.be/-OmuP6t9Rjo.mp4" type="video/mp4" />
          </video>
        </div>
  );
}
  

export default App;

