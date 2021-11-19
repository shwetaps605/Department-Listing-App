import React, { Component } from 'react';
import DepartmentService from '../../services/DepartmentService';

class ViewDepartmentComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            departmentId:this.props.match.params.id,
            employee:{}
        }
    }

    goBacktoHome() {
        this.props.history.push('/departments');
    }

    componentDidMount() {
        DepartmentService.getDepartmentById(this.state.departmentId).then( res => {
            this.setState({employee:res.data});
        });

    }


    render() {
        const {departmentName,departmentAddress,departmentCode} = this.state.employee;
        return (
            <div>
                <div className="card col-md-8 offset-md-3">
                    <h2 className="text-center">Department Details</h2>
                    <div className="card-body">
                        <div className="row">
                            <label>Department Name:</label>
                            <div>{departmentName}</div>
                        </div>
                        <div className="row">
                            <label>Department Address:</label>
                            <div>{departmentAddress}</div>
                        </div>
                        <div className="row">
                            <label>Department Code:</label>
                            <div>{departmentCode}</div>
                        </div>
                    </div>
                    <button className="btn btn-danger btn-sm" onClick={this.goBacktoHome.bind(this)}>Back</button>
                </div>
            </div>
        );
    }
}

export default ViewDepartmentComponent;