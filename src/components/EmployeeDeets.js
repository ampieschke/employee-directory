import React from "react";

// class App extends Component {
//   state = {
//     emps,
//   };

//   render() {
//     return (
//       <Wrapper>
//         <h2>Employee List</h2>
//         {this.state.emps.map((emp) => (
//           <EmpCard
//             id={emp.id.value}
//             name={emp.name.first}
//             email={emp.email}
//             location={emp.location.city}
//           />
//         ))}
//       </Wrapper>
//     );
//   }
// }

function EmpDeets(props) {
  return (
    <div className="text-center">
      <h3>
        Name: {props.results.name.first} {props.results.name.last}
      </h3>
      <h3>Email: {props.results.email}</h3>
      <h3>City: {props.results.location.city}</h3>
    </div>
  );
}

export default EmpDeets;
