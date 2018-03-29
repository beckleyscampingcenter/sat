import React, { Component } from 'react';
import { Table, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class CreateForm extends Component {
    render() {
      return (
        <Form>
            
            <FormGroup>
          <Label for="">Key Tag #</Label>
          <Input type="text" name="keyTag" id="" size="5" className="form-control-sm" maxLength="3" placeholder="key tag #" />
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
      );
    }
  }
  
  export default CreateForm;