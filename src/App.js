import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        {
          keyTag: 1,
          customerName: "Brent Phillips",
          unit: "Minnie Winnie",
          workOrder: "435678",
          arrivalDate: "3/27/2018",
          wip: false,
          warranty: false,
          preAuth: false,
          sublet: false,
          followUp: false,
          completedDate: "3/30/2018",
          status: "Complete"
        }
      ]
    }

    this.keyTagInput = ""
  }



  render() {
    return (
      <div className="container-fluid">
      { Object.values(this.state.entries).map( (value) => { 
          return (
            <div>
              {/* Key Tag # {value.keyTag}
              Name: {value.customerName}
              Unit: {value.unit}
              WO #: {value.workOrder}
              Arrival Date: {value.arrivalDate}
              WIP: {value.wip || 'N/A'}
              Warranty: {value.warranty || 'N/A'}
              PRE-Auth: {value.preAuth || 'N/A'}
              Sublet: {value.sublet || 'N/A'}
              Follow Up: {value.followUp || 'N/A'}
              Completed Date: {value.completedDate}
              Status: {value.status} */}
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
                <th scope="row">{value.keyTag}</th>
                <td>{value.customerName}</td>
                <td>{value.unit}</td>
                <td>{value.workOrder}</td>
                <td>{value.arrivalDate}</td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
                <td>{value.completedDate}</td>
                <td>{value.status}</td>
              </tr>
            </tbody>
          </Table>
          </div>
          )
      })}
      <div>
      <Form>
            
            <FormGroup>
          <Label for="">Key Tag #</Label>
          <Input type="text" name="keyTag" id="" 
                 size="5" className="form-control-sm" 
                 maxLength="3" placeholder="key tag #"
                 ref={ (input) => this.keyTagInput = input }
          />
        </FormGroup>
            
            
            <FormGroup>
          <Label for="">Customer Name</Label>
          <Input type="text" name="customerName" id="" className="form-control-sm" placeholder="Customer Name" />
        </FormGroup>
            
            
            <FormGroup>
          <Label for="">Unit</Label>
          <Input type="text" name="unit" id="" className="form-control-sm" placeholder="Unit" />
        </FormGroup>
            
            
            <FormGroup>
          <Label for="">Work Order #</Label>
          <Input type="text" name="workOrder" id="" className="form-control-sm" placeholder="WO #" />
        </FormGroup>
            
            
            <FormGroup>
          <Label for="">Arrival Date</Label>
          <Input type="text" name="arrivalDate" id="" className="form-control-sm" placeholder="Arrival Date" />
        </FormGroup>
            
            
                <FormGroup check inline>
            <Input type="checkbox" className="form-control-lg" />{' '}WIP
        </FormGroup>
            
            
                <FormGroup check inline>
            <Input type="checkbox" />{' '}Warranty
        </FormGroup>
            
            
                <FormGroup check inline>
            <Input type="checkbox" />{' '}PRE-AUTH
        </FormGroup>
            
            
                <FormGroup check inline>
            <Input type="checkbox" />{' '}Sublet
        </FormGroup>
            
            
                <FormGroup check inline>
            <Input type="checkbox" />{' '}Follow Up
        </FormGroup>
            <hr />
            
            <FormGroup>
          <Label for="">Completed Date</Label>
          <Input type="text" name="completedDate" id="" className="form-control-sm" placeholder="Completed Date" />
        </FormGroup>
            
            
            <FormGroup>
          <Label for="">Status</Label>
          <Input type="text" name="status" id="" className="form-control-sm" placeholder="Status" />
        </FormGroup>
            
            <Button className="btn btn-sm">Submit</Button>
      </Form>
      </div>
      </div>
      
    );
  }
}

export default App;
