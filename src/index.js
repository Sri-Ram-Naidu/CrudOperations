import React from 'react';
import ReactDOM from 'react-dom';
class AppDemo extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateName = this.updateName.bind(this);
        this.editPlease = this.editPlease.bind(this);
        //this.updateTask=this.updateTask.bind(this);

        this.state = {
            todos: [],
            title: "Welcomr To ReactJs",
            counter: 0,
            index: ''
        }
    }
    removeTodo(index) {
        let todos = this.state.todos;
        let todo = todos.find(function(todo) {
            return todo.counter === index
        });
        todos.splice(todo, 1);
        this.setState({
            todos: todos
        });
    }
    addTodo(event) {
        event.preventDefault();
        var name = this.refs.name.value;
        let address = this.refs.address.value;
        let counter = this.state.counter;
        //  let newValue = this.state.newValue;
        let todo = {
            name,
            address,
            counter,
            //  newValue
        };
        counter += 1;
        let todos = this.state.todos;
        todos.push(todo);
        this.setState({
            todos: todos,
            counter: counter
        });
        this.refs.todoform.reset();
    }
    updateName(event) {
        this.setState({
            name: event.target.value,
            address: event.target.value
        })
    }
    editPlease(i) {
        let todos = this.state.todos;
        let todo = todos[i];
        this.refs.name.value = todo.name;
        this.refs.address.value = todo.address;
        this.setState({
            counter: 1,
            index: i
        })
    }


    //updateTask(newValue) {
    //    this.setState({
    //        currentTask: newValue.target.value

    //    })

    //  }
    render() {
        let title = this.state.title;
        return (
          <div>
            <form ref = "todoform">
            <p>{ title }</p>
            <input type = "text" ref = "name" placeholder = "Enter Ur name" />
            <input type = "text" ref = "address" placeholder = "Enter Ur Address" / >
            <button onClick = { this.addTodo } > Submit < /button>
            </form>
            <ol type="1">
             {
                this.state.todos.map((todo => < li key = { todo.counter } > { todo.name }, { todo.address }
                    <button onClick = { this.removeTodo } > Remove </button>
                    <button onClick = { this.editPlease } > Edit </button>
                    <button onClick = {this.updateName}>Update</button></li> ))}
                     </ol>
                     </div >
        );
    }
}
ReactDOM.render(<AppDemo / > , document.getElementById('root'));
