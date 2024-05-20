import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import StateLogin from './components/SateLogin.jsx';
import SignUp from './components/SignUp.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <StateLogin />
      </main>
    </>
  );
}

export default App;
