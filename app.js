const desc = "I just learned to render react elements to a page.";
const myTitleId = 'main-title';
const name = 'Guil';


const header = (
    <header>
        <h1 id={ myTitleId }>{ name }'s First React App</h1>
        <p className="main-desc">{ desc }</p>
    </header>
);

ReactDOM.render(
    header, 
    document.getElementById('root')
    );
