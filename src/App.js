import Navbar from './component/Navbar'
import Footer from './component/Footer'
import TodoList from './todoComponent/TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className='content'>
          {/* <TodoList/> */}
        </div>
      <Footer/>
    </div>
  );
}

export default App;
