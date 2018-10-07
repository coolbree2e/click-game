import React, { Component } from 'react';
import Redhead from './components/Redhead';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import pics from './pics.json';
// import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
 state = {
    score: 0,
    highscore:0,
    pics,
    message:""
 };
// function to shuffle all the pictures
shufflePic = id => {
 console.log(id)
 this.setState({
   pics:this.shuffle(this.state.pics)
  });
 
};

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
findPicById = id => {
  // TODO search this.state.pics[] for element matching id
  // return that element
 return this.state.pics.find(e =>{
    if(e.id === id){
      return true
    } 
  });
 
};


// for the counter to go up and keep the high score
onClickIncrease= (id)=>{
  console.log('Image ID:', id);
  const clickedPic = this.findPicById(id);
  console.log("Clicked Pic:", clickedPic);
  if(clickedPic.clicked) {
    console.log('Has been clicked before');
      this.setState({
        score:0,
        message:"game over"
      });
    
  } else {
    this.setState({ score: this.state.score+1, pics: this.state.pics });

    console.log('Has not been clicked');
    clickedPic.clicked = true;
  }
console.log(clickedPic.clicked,"=====")
  console.log("=====",this.state.score);
};
// function to reset game



// single function to run all on click funtions
shuffleAndPoint=(id)=>{
  this.shufflePic(id);
  this.onClickIncrease(id);
};



// Map over this.state.friends and render a FriendCard component for each friend object
render() {
  return (

    <Wrapper>
      <Navbar score = {this.state.score}
      message = {this.state.message}
>
      </Navbar>
      <Title>Redhead Game </Title>

      {this.state.pics.map(pic => (
        <Redhead
          shufflePic={this.shufflePic}
          shuffleAndPoint = {this.shuffleAndPoint}
          id={pic.id}
          key={pic.id}
          name={pic.name}
          image={pic.image}
          message={this.message}
         
        />
      ))}
    </Wrapper>
  );
};
};

export default App;
