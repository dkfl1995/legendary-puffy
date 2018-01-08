'use esversion: 6';
const xhttp = new XMLHttpRequest();

class App extends React.Component{
    render(){
        const welc = <p>Welcome!</p>;
        return welc;
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root')
)