// clickHandler = id => {
//         //searches array for id that matches
//         this.state.characters.find((character, i) => {
//             if (character.id === id) {
//                 //checks clicked and toggles true
//                 if(characters[i].clicked === false) {
//                     characters[i].clicked = true
//                     //adds to score and update message
//                     this.setState({score : this.state.score + 1, message: "Good job, Keep it up!!"});
//                     //shuffles characters
//                     this.state.characters.sort(() => Math.random() - 0.5);
//                     return true; 
//                 } else {
//                 this.gameOver();
//                 }
//             }
//             return false;
//         });
//     }



// Collapse 