'use esversion: 6';

class App extends React.Component{
    render(){
        const welc = <p>Welcome!</p>;
        return welc;
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root')
)