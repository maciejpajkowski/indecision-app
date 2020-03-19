console.log('App.js is running!');

//JSX - JavaScript XML

const app = {
    title: 'Indecision App!',
    subtitle: 'Put your life in the hands of a computer!',
    options: []
}

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;

    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderApp();
    }
};

const removeAll = () => {
    app.options = [];
    renderApp();
};

// const numbers = [55, 101, 1000];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderApp = () => {
    const template = (
        <div>
          <h1>{app.title}</h1>
          {app.subtitle && <p>{app.subtitle}</p>}
          <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options :('}</p>
          <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
          <button onClick={removeAll}>Remove All</button>
          {
            //   numbers.map((number) => {
            //     return <p key={number}>Number: {number}</p>;
            //   })
          }
          <ol>
            {app.options.map((e) => <li key={e}>{e}</li>)}
          </ol>
          <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
          </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

renderApp();