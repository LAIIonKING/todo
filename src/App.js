import Navbar from './component/Navbar'
import Footer from './component/Footer'
import TodoList from './todoComponent/TodoList'
import useFetch from './util/useFetch'
import './App.css';
import CalendarList from './calendarComponent/CalendarList';

function App() {
  const [lists] = useFetch("http://localhost:3001/lists/");

  return (
    <div className="app">
      <Navbar lists={lists}/>
        <div className='content'>
          {/* <CalendarList/> */}
          <TodoList lists={lists}/>
        </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
