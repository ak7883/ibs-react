

// step-1 : create compoenent class

// class HelloWorld extends React.Component {
//     render() {
//         // must return 1 React Element
//         let h1Element = React.createElement('h1', null, "Hello World");
//         let divElement = React.createElement('div', { className: 'well' }, h1Element);
//         return divElement;
//     }
// }

// or

// with JSX syntax 

class HelloWorld extends React.Component {
    render() {
       return (
           <div className="alert alert-info">
               <h1> HelloWorld </h1>
           </div>
       );
    }
}



// step-2 : instantiate component & render

// let helloWorld = React.createElement(HelloWorld, null, null);
// or
let helloWorld=<HelloWorld />

ReactDOM.render(helloWorld, document.getElementById('root'));