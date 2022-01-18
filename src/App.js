import React, {useState} from 'react';
import Tabs from './components/Tabs';
import DisplayTabs from './components/DisplayTabs';

function App() {
  
  const [message, setMessage] = useState("");
  
  
  // const tabs = [
  //   {label:'tab1', content: "this is tab1"},
  //   {label:'tab2', content: "this is tab2"},
  //   {label:'tab3', content: "this is tab3"},
  // ] 
  
const passTheContent = (msg) =>{  
    return setMessage(msg)
  }

  return (
    <div className="App">
      <Tabs passTheContent={passTheContent}/>
      <DisplayTabs message={message}/>
    </div>
  );
}

export default App;
