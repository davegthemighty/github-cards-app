
const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
    {
      name: "Daveg",
      company: null,
      avatar_url: "https://avatars0.githubusercontent.com/u/20857652?v=4",
    }
];

const CardList = (props) => {
  return (
    <div>
      {
        props.profiles.map(profile => <Card {...profile}/>)
      }
    </div>
  );
}

class Card extends React.Component {
	render() {
    const profile = this.props
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

class Form extends React.Component {

 state = { userName: "" };

 submitUser = async (event) =>  {
   event.preventDefault();
   const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
   this.props.onSubmit(response.data);
 } ;

 render() {
     return(
         <form onSubmit={this.submitUser}>
           <input
             placeholder='Username'
             required
             value={this.state.userName}
             onChange={
               event => {
                 this.setState({userName: event.target.value})
               }
           }
           />
           <button>Find User</button>
         </form>
     );
 }
}

class App extends React.Component {

  state = {
      profiles: testData
  };

  addNewProfile = (newProfile) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, newProfile]
    }));
  };

	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles}/>
    	</div>
    );
  }
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);
