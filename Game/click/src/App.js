import React, { Component } from 'react';
import Redhead from './components/Redhead';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import pics from './pics.json';
// import './App.css';

class App extends Component {
 state = {
    score: 0,
    highscore:0,
    message:"Pick a Redhead to start",
    pics
 };

shufflePic = id => {
 console.log(id)
 this.setState({
   pics:this.shuffle(this.state.pics)
  })
 
};
// thank you stackoverflow
shuffle = array => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// Map over this.state.friends and render a FriendCard component for each friend object
render() {
  return (
    <Wrapper>
      <Title>Redhead Game</Title>
      {this.state.pics.map(pic => (
        <Redhead
          shufflePic={this.shufflePic}
          id={pic.id}
          key={pic.id}
          name={pic.name}
          image={pic.image}
          
        />
      ))}
    </Wrapper>
  );
};
};

export default App;
