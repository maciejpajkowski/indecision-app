class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility 
            }
        });
    }

    render() {
        return (
            <div>
              <h1>Visibility Toggle</h1>
              <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
              {this.state.visibility && <p>Hey, now you can see me!</p>}
            </div>
        )}
}

ReactDOM.render(
    <VisibilityToggle />,
    document.getElementById('app')
);


// console.log('it works!');
// let toggled = false;

// const buttonToggle = () => {
//     toggled = !toggled;
//     render();
// };

// const render = () => {
//     const toggledText = 'Moja pierwsza, samodzielnie napisana apka w Reakcie działa! :>';

//     const template = (
//         <div>
//           <h1>Visibility Toggle</h1>
//           <button onClick={buttonToggle}>{toggled ? 'Hide details' : 'Show details'}</button>
//           {toggled && <p>{toggledText}</p>}
//         </div>
//     );

//     ReactDOM.render(template, app);
// };

// const app = document.getElementById('app');

// render();