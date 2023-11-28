import logo from './logo4.png';
import './App.css';
/*const mysql = require('mysql');

const connection = mysql.createConnection({
	host : '192.168.65.92',
	user : 'root',
	password : 'root',
	database: 'reactjs',

})

conection.connect((err) => {
	if(err){
		console.error("Erreur de connection",err);
		throw err;
	}
	console.log("Connecté à la BDD");
});*/

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App() {
  return (
    <div className="App">
      <h1>My First App</h1>
      {/* <input type="text" placeholder='username'/><br></br>
      <input type="password" placeholder='password' /><br style={{ marginTop: '5px' }}></br>
      <input type="submit" value="Se connecter" style={{ marginTop: '15px' }} /> */}
      <img src={logo} className="App-logo" style={{ marginTop: '225px' }} alt="logo" /><div class="login-box">
        <h2 style={{ fontSize: '25px' }}>Login</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
}

export default App;
