import Navbar from './component/Navbar'
import Footer from './component/Footer'
import TodoList from './todoComponent/TodoList'
import useFetch from './util/useFetch'
import './App.css';

function App() {
  const [lists] = useFetch("http://localhost:3001/lists/");

  return (
    <div className="App">
      <Navbar lists={lists}/>
        <div className='content'>
          <TodoList lists={lists}/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
