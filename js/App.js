class App extends React.Component
{
  render() {
    return (
      <div>
        <h1>React Dom</h1>
        <p>I am rendered via React</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
