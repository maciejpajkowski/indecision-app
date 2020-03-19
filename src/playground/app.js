class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.state = {
            options: []
        }
    }
    // lifecycle methods, won't work on stateless functional components
    componentDidMount() { // fires after loading the component
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            console.log('fetching data');
    
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) { // ^ + fires when component updates
        if (prevState.options.length  !== this.state.options.length) {
            const json  = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
        
    }

    componentWillUnmount() { // fires before component goes away
        console.log('componentWillUnmount');
    }
    // End of lifecycle methods, there are more available though

    handlePick() {
        let random = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[random]);
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleRemoveOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value to add item!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div>
              <Header subtitle={subtitle} />
              <Action 
              hasOptions={this.state.options.length > 0}
              handlePick={this.handlePick} />
              <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleRemoveOption={this.handleRemoveOption} />
              <AddOption
                handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props) => { // STATELESS FUNCTIONAL COMPONENT
    return (
        <div>
          <h1>{props.title}</h1>
          {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) => { // STATELESS FUNCTIONAL COMPONENT
    return (
        <div>
          <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}>
            What should I do?
          </button>
        </div>
    )
};

const Options = (props) => {
    return (
        <div>
          <button onClick={props.handleDeleteOptions}>Remove All!</button>
          {props.options.length === 0 && <p>Add an option to get started :)</p>}
          {
            props.options.map((option) =>(
                <Option 
                  key={option} 
                  optionText={option}
                  handleRemoveOption={props.handleRemoveOption} />
            ))
          }
          <p>Number of options: {props.options.length}</p>
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
          {props.optionText}
          <button 
            onClick={(e) => {
                props.handleRemoveOption(props.optionText)
            }}>
            Remove
          </button>
        </div>
    );
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//               <p>Option: {this.props.optionText}</p>
//             </div>
//         );
//     }
// } THIS ONE HAS BEEN DONE USING STATELESS FUNCTIONAL COMPONENT

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(event) {
        event.preventDefault();

        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ( { error }));

        if (!error) {
            event.target.elements.option.value = '';
        }
    }

    render() {
        return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button>Add Option</button>
          </form>
        </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//           <p>Name: {props.name}</p>
//           <p>Age: {props.age}</p>
//         </div>
//     );
// }

ReactDOM.render(
    <IndecisionApp options={['Devil\'s Den', 'Uniwer']}/>,
    document.getElementById('app')
);