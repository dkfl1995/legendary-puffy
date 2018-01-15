'use esversion: 6';

function user(){
    name = "Vlad";
    return name;
}

//Creating main vendor to render React data... It will be called App... rendering in div#root
class App extends React.Component{
    //one of most used and needed class-method that ables us to get and bring props downstairs the react.component tree
    constructor(props){
        super(props); 
    }
    //custom method to injected into class... capable to not to use this...
    user(){
        name = "Vlad";
        return name;
    }
    //main and neccesary method in every react component that says to reactjs and dom what they have to render dom inside
    render(){
        return (
            <div>
                <User user={this.user()} {/*JSX... syntax exceeding and let us to use html syntax inside*/} /> 
            </div>
        );
    } 
}

class User extends React.Component{
    constructor(props){
        super(props); 
    }
    render(){
        return (
            <h5>Welcome, {this.props.user}!</h5>     
        );  
    }
}

var userinfo = JSON.stringify(User);

const xhttp = new XMLHttpRequest();
if(!window.XMLHttpRequest) {
    const xhttp = new ActiveXObject("Microsoft.XMLHTTP");
} 

xhttp.open("POST","localhost:5050",true); 
xhttp.send(userinfo);

ReactDOM.render(
    <App/>, document.getElementById('root')
)