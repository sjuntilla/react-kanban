import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{
        title: 'what is a kanban',
        message: 'ay yo what the fuck is going on',
        author: 'me, bitch'
      },
      {
        title: 'i still dont know',
        message: 'apparently its good for productivity',
        author: 'please absolve me of responsibility'
      },
      {
        title: 'a title',
        message: 'a message',
        author: 'still me, bitch'
      }]

    };
  }

  render() {
    const { cards } = this.state;
    return (<div>
      {cards.map(card => (<Cards
        title={this.title}
        message={this.message}
        author={this.author}
      />
      ))}
    </div>)


    function Cards(props) {
      return (
        <div>
          {props.title}
          {props.message}
          {props.author}
        </div>
      );
    }
  }

  // FILM LIST CODE-- DELETE THIS LATER
  // class App extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       films: [{
  //         title: 'aaauuuhhh',
  //         director: 'noooooo'
  //       },
  //       {
  //         title: 'oh god',
  //         director: 'aaaaaa'
  //       }
  //       ],
  //       title: '',
  //       director: ''
  //     };
  //   }

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     const films = this.state.films;
  //     films.push({
  //       title: this.state.title,
  //       director: this.state.director
  //     });
  //     this.setState({
  //       films
  //     });
  //   };

  //   handleChange = e => {
  //     const name = e.target.name;
  //     this.setState({
  //       [name]: e.target.value
  //     });
  //   };

  //   balete = title => {
  //     const films = this.state.films.filter(film => title !== film.title);
  //     this.setState({
  //       films
  //     });
  //   };

  //   render() {
  //     const {
  //       films
  //     } = this.state;

  //     return (<div>
  //       <form onSubmit={this.handleSubmit}>
  //         <input name="title" onChange={this.handleChange} type="text" />
  //         <input name="director" onChange={this.handleChange} type="text" />
  //         <input type="submit" />
  //       </form>
  //       {films.map(film => (
  //         <Film
  //           title={film.title}
  //           director={film.director}
  //           balete={this.balete}
  //         />
  //       ))}
  //     </div>
  //     );
  //   }
  // }

  // function Film(props) {
  //   return (
  //     <div>
  //       {props.title} | {props.director}
  //       <button onClick={() => props.balete(props.title)}>baleted!!</button>
  //     </div>
  //   );
  // }

}
export default App;