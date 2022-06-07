const title = <h1>My First react element!</h1>;
const desc = <p>I just learned to render react elements to a page.</p>;

const header = React.createElement(
    'header',
    null,
    title,
    desc
);

ReactDOM.render(
    header, 
    document.getElementById('root')
    );
