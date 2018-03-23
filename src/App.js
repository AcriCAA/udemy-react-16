import React, { Component } from 'react';

import './App.css';

 

import Person from './Person/Person'; 

class App extends Component {

  state = {

    persons: [

      {id: '1dfdsfd', name: 'Rockem', age:28 },
      {id: '2dfsdfs', name: 'Sockem', age:29},
      {id: 'ssad3', name: 'Maggie', age:12}
    ],

    showPersons: false

  }

  switchNameHandler = () => {

    // console.log('was clicked'); 
    // DONT DO THIS this.state.persons[0].name = 'Coreylicious';

    this.setState( 
        { persons: [

          {id: '', name: 'Max', age:28 },
          {name: 'Manu', age:29}


          ]


        }

        )

  }


  nameChangedHandler = (event, id) => {
      console.log("ran name changed handler");
      // get the person based on the key id by using findIndex()
      const personIndex = this.state.persons.findIndex(p => {
          // return true or false if it was the person you were looking for
          return p.id === id; 
      }); 

      // now get the individual person using spread operator which will prevent the mutating of the original object
      const person = {...this.state.persons[personIndex]}; 

      
      // update the name with the content of the index box
      person.name = event.target.value; 

      //make a copy of the original state persons object
      const persons = [...this.state.persons]; 

      // now update the persons array with the new person at th index
      persons[personIndex] = person; 


     this.setState( 

        //update the state with the new persons array you just updated and created
        { persons: persons }

        );


  }


  deletePersonHandler = (personIndex) => {

    // fetch all the persons 
    //old way of copying an array using  .slice() creates a copy to the array 
    // const persons = this.state.persons.slice(); 

    // instead of using .slice you can do the modern ES6 approach of spread ... 
    const persons = [...this.state.persons]; 
    
    //splice removes one element from the array at the personIndex
    persons.splice(personIndex, 1); 

    this.setState({persons: persons}); 


  }

  togglePersonsHandler = (event) => {

    const doesShow = this.state.showPersons; 
    this.setState({showPersons: !doesShow}); 


  }

  render() {


    let persons = null; 



    if (this.state.showPersons){



    //this is the equivalent of an for loop  
       persons = this.state.persons.map((person, index) => {

          return <Person
                  click = {() => this.deletePersonHandler(index)}
                  name = {person.name}
                  age = {person.age}

                  // you have to define a key so that react can keep track of the list
                  // it is usually the element id
                  key = {person.id}
                  changed = {(event) => this.nameChangedHandler(event, person.id)}
                   />
                  
                  


       }); 

      // persons = (<div>
          
      //     <Person 
 
      //         name={this.state.persons[0].name} 
      //         age={this.state.persons[0].age}
      //         click={this.switchNameHandler.bind(this,'Corey!')}/>


      //     <Person 

      //         name={this.state.persons[1].name} 
      //         age={this.state.persons[1].age}
      //         changed={this.nameChangedHandler}
      //        >
      //         Hobbies racing</Person>

      //       alernate syntax 
      //          <Person 

      //         name={this.state.persons[0].name} 
      //         age={this.state.persons[0].age}
      //         click={() => this.switchNameHandler('Mr. Nervous')}/>

      //     </div>); 

    }

    return (
      <div className="App">
        <h1>Hi This is a react app</h1>
        <p>This is really working</p>

      {/* <button onClick={this.switchNameHandler.bind(this,'Max!')}>Switch Name</button>*/}

      <button onClick={this.togglePersonsHandler}>Toggle Name</button>
        

     

    {/*


      This is outputting the conditional value in the if statement*/
      persons


    }

    {/*using traditional logic by creating a variable */}

    {/*using ternary logic here*/}
          {/*this.state.showPersons ? <div>
          
          <Person 
 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this,'Corey!')}/>


          <Person 

              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}
             >
              Hobbies racing</Person>

            alernate syntax 
               <Person 

              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              click={() => this.switchNameHandler('Mr. Nervous')}/>

          </div> : null */} 

      </div>
    );
  }
}

export default App;
