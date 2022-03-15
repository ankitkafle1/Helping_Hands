import React from 'react';
import Header from './components/header_footer/Header';
import Profile from './components/header_footer/Profile';
class App extends React.Component{
  render(){
    return(
      <div>
          <Header/>
          <Profile/>
          <Header/>
      </div>
    )
}
}
export default App;
