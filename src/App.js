import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <button
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 30px',
          borderRadius: '5px',
        }}
        onClick={() => {
          window.location.href = 'myapp://profile/123';
        }}
      >
        Helllo
      </button>
    </div>
  );
}

export default App;
