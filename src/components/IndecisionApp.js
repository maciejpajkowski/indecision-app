import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleRemoveOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value to add item!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };

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

    

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div>
              <Header subtitle={subtitle} />
              <div className="container">
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick} />
                <div className="widget">
                    <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleRemoveOption={this.handleRemoveOption} />
                    <AddOption
                        handleAddOption={this.handleAddOption} />
                </div>
              </div>
              <OptionModal
                  selectedOption={this.state.selectedOption}
                  handleClearSelectedOption={this.handleClearSelectedOption} />            
            </div>
        );
    }
}

export default IndecisionApp;