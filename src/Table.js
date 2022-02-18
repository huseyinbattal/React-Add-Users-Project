import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead style={{color:"red"}}>
      <tr style={{fontStyle:"italic"}}>
        <th>Name</th>
        <th>Job</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
};



const TableBody = (props) => {
  const handleDelete=(name)=>{
    console.log(name)
    props.deleteUser(name)
  }
  return (
    <tbody style={{ color: "blue" }}>
      {props.users.map((user, index) => {
        return (
          <tr key={index}>
            <td>{user.name.toUpperCase()}</td>
            <td>{user.job.toUpperCase()}</td>
            <td><button style={{ backgroundColor: "red" }} onClick={()=>handleDelete(user.name)}>Delete</button></td>
          </tr>
        );
      })}
    </tbody>
  );
};

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody users={this.props.users} deleteUser={this.props.deleteUser} />
      </table>
    );
  }
}

export default Table;
