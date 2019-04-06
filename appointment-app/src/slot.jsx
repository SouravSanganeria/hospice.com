import React, { Component } from "react";
// import "../css/Table.css";
// import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

class Table1 extends Component {
  state = {
    slots: [
      { id: 1, time: "9:00-9:30", value: 0 },
      { id: 2, time: "9:30-10:00", value: 0 },
      { id: 3, time: "10:00-10:30", value: 1 }
    ]
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Slot Time</th>
              <th scope="col">Available</th>
              <th scope="col">Book</th>
            </tr>
          </thead>
          <tbody>
            {this.state.slots.map(slots => (
              <tr key={slots.id}>
                <th scope="row">{slots.id}</th>
                <td>{slots.time}</td>
                <td bgcolor={slots.value === 1 ? "green" : "red"}>
                  {slots.value}
                </td>
                <td>
                  <button type="button" className="btn btn-primary">
                    book
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table1;
