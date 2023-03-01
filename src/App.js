import './App.css';

function App() {
  const title= 'Welcome To My Blog';
  const likes = 1000;
  const link = 'http://www.google.com';
  return (
    <div className="App">
     <div className="content">
      <h1>{ title }</h1>
      <p>{likes} times</p>
      <a href={link}>Google Site</a>

      <p>{Math.random() + 10}</p>
     </div>
    </div>
  );
}

export default App;
