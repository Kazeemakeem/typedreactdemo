import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrimitiveProps from './components/PrimitiveProps'
import ArrayProps from './components/ArrayProps'
import DataFetchStatus from './components/DataFetchStatus'
import Children from './components/Children'
import ChildrenWrapper from './components/ChildrenWrapper'
import OptionalProps from './components/OptionalProps'
import ButtonHandler from './components/ButtonHandler'
import InputHandler from './components/InputHandler'
import Styling from './components/Styling'
import UseState from './state/UseState'
import FutureUseState from './state/FutureUseState'
import AssertiveFutureUseState from './state/AssertiveFutureUseState'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'



function App() {

  // for primitive
  const person = {
    firstName: 'Azeez',
    lastName: 'More'
  }

  // for array props

  const nameList = [{
    firstName: 'Akeem',
    lastName: 'Kazeem'
  },
  {
    firstName: 'Lasisi',
    lastName: 'Rauf'
  },
  {
    firstName: 'Ayoola',
    lastName: 'Ayokomi'
  }]

  // for useState

  const user = {
    name: 'Akeem',
    email: 'akeem@gmail.com'
  }

  // for data fetch

  // const newResult = fetch('https://......').then(res => res.json())
  // let responseStatus = newResult

  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <hr/>
      <AssertiveFutureUseState accountUser={user}/>
      <hr/>
      <FutureUseState accountUser={user}/>
      <hr/>
      <UseState />
      <hr/>
      <Styling  styles={{border: '1px solid green', padding: '1rem'}}/>
      <hr/>
      <InputHandler value = '' handleChange = {(event) => console.log(event)} />
      <hr/>
      <ButtonHandler handleClick={(event,id) => {console.log('Button Clicked', event, id)}}/>
      <hr/>
      <OptionalProps name={'Akeem'} isLoggedIn = {false}/>
      <hr/>
      <ChildrenWrapper>
        <Children>The Oscar goes to Leo Decaprio</Children>
      </ChildrenWrapper>
      <hr/>
     <Children>Placeholder Text</Children>
       <hr/>
      <DataFetchStatus status= 'success'/>
       <hr/>
       <ArrayProps names={nameList}/>
       <hr/>
       <PrimitiveProps name ={'Akeem'} messageCount= {20} person = {person}/>
    </div>
  );
}

export default App;
