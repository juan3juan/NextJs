// const TodoForm = ({ addTodo }) => {
//   // Input tracker
//   let input;

//   return (
//     <div>
//       <input
//         ref={node => {
//           input = node;
//         }}
//       />
//       <button
//         onClick={() => {
//           addTodo(input.value);
//           input.value = "";
//         }}
//       >
//         +
//       </button>
//     </div>
//   );
// };

// const TodoList = ({ todos, remove }) => {
//   // Map through the todos
//   //   const todoNode = todos.map(todo => {
//   //     return <Todo todo={todo} key={todo.id} remove={remove} />;
//   //   });
//   //   return <ul>{todoNode}</ul>;
//   return (
//     <div>
//       {todos.map(todo => (
//         <Todo todo={todo} key={todo.id} remove={remove} />
//       ))}
//     </div>
//   );
// };

// const Todo = ({ todo, remove }) => {
//   // Each Todo
//   return (
//     <li
//       onClick={() => {
//         remove(todo.id);
//       }}
//     >
//       {todo.text}
//     </li>
//   );
// };

// const Title = () => {
//   return (
//     <div>
//       <div>
//         <h1>to-do</h1>
//       </div>
//     </div>
//   );
// };

// // Contaner Component
// // Todo Id
// let iid = 0;
// class TodoApp extends React.Component {
//   constructor(props) {
//     // Pass props to parent class
//     super(props);
//     // Set initial state
//     this.state = {
//       data: []
//     };
//   }

//   // Add todo handler
//   addTodo(val) {
//     // Assemble data
//     const todo = { text: val, id: iid++ };
//     // Update data
//     this.state.data.push(todo);
//     // Update state
//     this.setState({ data: this.state.data });
//   }
//   // Handle remove
//   handleRemove(id) {
//     // Filter all todos except the one to be removed
//     const remainder = this.state.data.filter(todo => {
//       if (todo.id !== id) return todo;
//     });
//     // Update state with filter
//     this.setState({ data: remainder });
//   }

//   render() {
//     // Render JSX
//     return (
//       <div>
//         <Title />
//         <TodoForm addTodo={this.addTodo.bind(this)} />
//         <TodoList
//           todos={this.state.data}
//           remove={this.handleRemove.bind(this)}
//         />
//       </div>
//     );
//   }
// }
// export default TodoApp;
class Child extends React.Component {
  render() {
    const { renderer } = this.props;
    return <div>{renderer(3)}</div>;
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Child renderer={index => <div ref="test">{index}</div>} />
      </div>
    );
  }
}
export default App;
