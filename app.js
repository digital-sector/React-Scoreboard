const players = [  {
    name: "Guil",
    score: 50,
    id: 1,
  },
  {
    name: "Treasure",
    score: 85,
    id: 2,
  },
  {
    name: "Ashley",
    score: 95,
    id: 3,
  },
  {
    name: "James",
    score: 80,
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
    constructor() {
        super();
        this.state = {
            score: 0
        }
    }


    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ this.props.score }</span>
                <button className="counter-action decrement"> + </button>
            </div>
        );   
    }
}

function Player(props) {
    return (
        <div className="player">
            <span className="player-name">{ props.name }</span>
            <Counter 
                score={ props.score }
            />
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
                score={ player.score }
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
