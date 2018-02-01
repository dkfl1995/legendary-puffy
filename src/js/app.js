'use esversion: 6';
var newbye = {}; 
//Creating main vendor to render React data... It will be called App... rendering in div#root
class App extends React.Component{
    //one of most used and needed class-method that ables us to get and bring props downstairs the react.component tree
    constructor(props){
        super(props); 
        this.state = {clicked: false};
        this.handleClick = this.handleClick.bind(this);
    }
    //custom method to injected into class... capable to not to use this...
    handleClick(){
        this.setstate({clicked: true});
    }
    //main and neccesary method in every react component that says to reactjs and dom what they have to render dom inside
    render(){
        return (
            <div class="row">
                {this.state.clicked ? <NewUser /> : null}
                <div class="">
                    <div className="button" onClick={this.handleClick}>Sign in</div>
                </div>
                <div class="">
                    <div className="button">Log in</div> 
                </div> 
            </div>
        );
    } 
}

class NewUser extends React.Component{
    constructor(props){
        super(props);  
        this.state = {name: '', pass: ''}
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleNameChange(){
        this.setstate({name: event.target.name})
    }
    onSubmit(){

    }
    render(){
        return (
            <div class="row dialog">
                <div class="small-12 column">Register a new account</div>
                <div class="small-6 column">Type a login (it can be any free name with at least 4 characters): <input name='' onChange={this.handleNameChange} placeholder="michael"/></div>
                <div class="small-6 column">And type a password (it have to be at least 8 char. and should contain at least any one letter and digit)<input pass='' onChange={this.onChange}/></div>
            </div>    
        );  
    }
}

var userinfo = JSON.stringify(newbye);

ReactDOM.render(
    <App/>, document.getElementById('root')
)

function sender() {
    const xhttp = new XMLHttpRequest();
    if (!window.XMLHttpRequest) {
        const xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("POST", "localhost:5050", true);
    xhttp.send(userinfo);
}
