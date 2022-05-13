import './index.css'
import Tweet from './Tweet';
import Task from './Input';



function App() {
  return (
    <div className='app'>
      <h1 className='header p-5 text-center fw-bold'>Task Tracker</h1>
      <Task />
      <Tweet date='friday the 7th' todo='do the dishes' />
      <Tweet date='friday the 8th' todo='shopping'/>
      <Tweet date='friday the 9th' todo='date night'/>
    </div>
  );
}

// delete task


export default App;
