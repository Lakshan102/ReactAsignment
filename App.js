
import './App.css';
import Toggle from './Togle';
import Timer  from './Timer';
import ToDoList from './ToDoList';
import CardList from './CardList';
import Form from './Form';
import Profile from './UserProfile';
import Massage from './ConditionalMessage';
import Count from './Counter';
function App() {
  return (
    <div className='App'>
      <Toggle/>
      <Timer/>
      <ToDoList/>
      <CardList/>
      <Form/>
      <Profile/>
      <Massage/>
      <Count/>
    </div>
  );
}

export default App;
