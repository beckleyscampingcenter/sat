import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from 'reactstrap';
import CreateForm from './components/CreateForm';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Table className="text-center table-responsive-sm table-sm">
        <thead className="thead-dark">
          <tr>
            <th>Key Tag #</th>
            <th>Name</th>
            <th>Unit</th>
            <th>WO #</th>
            <th>Arrival Date</th>
            <th>WIP</th>
            <th>Warranty</th>
            <th>PRE-AUTH</th>
            <th>Sublet</th>
            <th>Follow Up</th>
            <th>Completed Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>451346</td>
            <td>3/27/2018</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>3/30/2018</td>
            <td>Complete</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>451346</td>
            <td>3/27/2018</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>3/30/2018</td>
            <td>Complete</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>451346</td>
            <td>3/27/2018</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>3/30/2018</td>
            <td>Complete</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>451346</td>
            <td>3/27/2018</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>3/30/2018</td>
            <td>Complete</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>451346</td>
            <td>3/27/2018</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>3/30/2018</td>
            <td>Complete</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>451346</td>
            <td>3/27/2018</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>3/30/2018</td>
            <td>Complete</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>451346</td>
            <td>3/27/2018</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>3/30/2018</td>
            <td>Complete</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>451346</td>
            <td>3/27/2018</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>3/30/2018</td>
            <td>Complete</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>451346</td>
            <td>3/27/2018</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>3/30/2018</td>
            <td>Complete</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>451346</td>
            <td>3/27/2018</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>3/30/2018</td>
            <td>Complete</td>
          </tr>
        </tbody>
      </Table>
      <div>
        <CreateForm />
      </div>
      </div>
      
    );
  }
}

export default App;
