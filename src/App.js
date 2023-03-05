import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import StateBasics from './components/StateBasics';
import CounterApp from './components/CounterApp';
import Useeffect from './components/Useeffect';
import TodoForm from './components/TodoForm';
import BookApplication from './components/BookApplication';
import ToDoFormUsingUseForm from './components/ToDoFormUsingUseForm';
import APIFetch from './components/APIFetch';
import NavigationBar from './components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import APIPost from './components/APIPost';

function App() {
  return (
    <div className="App">      
      {/* <Header></Header>
      <h1>Hi welcome to react</h1>
      <Login></Login>
      <br></br>
      <br></br>
      <StateBasics></StateBasics>
      <br></br>
      <br></br> */}
      {/* <CounterApp></CounterApp> */}
      {/* <Useeffect></Useeffect> */}
      <TodoForm></TodoForm>
      {/* <BookApplication></BookApplication> */}
      {/* <ToDoFormUsingUseForm></ToDoFormUsingUseForm> */}
      {/* <APIFetch></APIFetch> */}
      {/* <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/home" element={<Login/>}></Route>
        <Route path="/counterapp" element={<CounterApp/>}></Route>
        <Route path="/book" element={<BookApplication/>}></Route>
      </Routes> */}
      {/* <APIPost></APIPost> */}
    </div>
  );
}

export default App;
