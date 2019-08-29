class List extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <content>
          <ul>
            {this.props.tasks.map((task, index) => (
              <li key={index}>
                <p
                  onClick={e => this.props.changeStatus(index)}
                  style={{
                    textDecoration: task.status ? "line-through" : "none"
                  }}
                >
                  {task.title}                
                </p>
                <button onClick={e => this.props.deleteItem(index)}>
                 x 
                </button>
              </li>
            ))}
          </ul>
        </content>
      );
    }
  }
  
  class Header extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        value: "",
        tasks: [
          {
            title: "Tasok 1",
            status: true,
            id: 1
          },
          {
            title: "Task 2",
            status: false,
            id: 2
          },
          {
            title: "Task 3",
            status: false,
            id: 3
          },
          {
            title: "Task 4",
            status: false,
            id: 4
          },
          {
            title: "Task 5",
            status: false,
            id: 5
          }
        ]
      };
    }
  
    handleTask = e => {
      this.setState({ value: e.target.value });
    };
  
    addTask = e => {
      this.setState({
        value: "",
        tasks: [
          ...this.state.tasks,
          {
            title: this.state.value,
            status: false,
            id: this.state.tasks.length + 1
          }
        ]
      });
      e.preventDefault();
    };
  
    deleteTask = index => {
      let array = [...this.state.tasks];
  
      array.splice(index, 1);
  
      this.setState({
        tasks: array
      });
    };
  
    changeStatus = index => {
      let task = this.state.tasks[index];
  
      this.setState({
        task: task.status ? (task.status = false) : (task.status = true)
      });
    };
  
    render() {
      return (
        <div>
          <header>
            <div className="logo">
              <a href="https://icons8.com/icon/123603/react-native">
                <img src="https://img.icons8.com/color/100/000000/react-native.png" />React
                Native icon by Icons8
              </a>
            </div>
            <h2>TODO in React JSX</h2>
            <div id="addNew">
              <form onSubmit={this.addTask}>
                <input
                  type="text"
                  placeholder="Add task to do"
                  value={this.state.value}
                  onChange={this.handleTask}
                />
                <button type="submit">+</button>
              </form>
            </div>
          </header>
          <List
            tasks={this.state.tasks}
            deleteItem={this.deleteTask}
            changeStatus={this.changeStatus}
          />
        </div>
      );
    }
  }
  
  class TODO extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Header />
        </div>
      );
    }
  }
  
  ReactDOM.render(<TODO />, document.getElementById("app"));
  