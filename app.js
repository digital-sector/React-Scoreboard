const players = [  {
    name: "Guil",
    score: 0,
    id: 1,
  },
  {
    name: "Treasure",
    score: 0,
    id: 2,
  },
  {
    name: "Ashley",
    score: 0,
    id: 3,
  },
  {
    name: "James",
    score: 0,
    id: 4,
  }
];

function Header(props) {
    console.log(props)
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
};

class Counter extends React.Component {
    state = { 
        score: 0 
    };

    incrementScore = () => {
        this.setState({
            score: this.state.score + 1
        });
    }

    decrementScore = () => {
        this.setState({
            score: this.state.score - 1
        });
    }


    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={ this.incrementScore }> + </button>
            </div>
        );   
    }
}

function Player(props) {
    return (
        <div className="player">
            <span className="player-name">{ props.name }</span>
            <Counter />
        </div>
    );
};

function App(props) {    
    return (
        <div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalPlayers={ props.initalPlayers.length } 
            />
            {props.initalPlayers.map( player => 
            <Player 
                name={ player.name } 
                key={ player.id.toString() }
            /> 
            )}
        </div>
    );
};

ReactDOM.render(
    <App 
        initalPlayers={players}
    />, 
    document.getElementById('root')
);
