import React from 'react';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';

function App() {
  const items = [
    'Lucknow',
    'Delhi',
    'Bengaluru'
  ];
  const handleSelectedItem = (item:string)=>{
    console.log(item);
    
  }
  return (
    <div>
      <Alert text='Hello'/>
      <ListGroup items={items} heading='Cities' onSelectItem={handleSelectedItem}/>
    </div>
  );
}

export default App;
