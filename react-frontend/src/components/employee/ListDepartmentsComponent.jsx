import React, { Component } from 'react';
import DepartmentService from '../../services/DepartmentService';

class ListDepartmentsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            departments:[]
        }

        this.addDepartment = this.addDepartment.bind(this);
        this.editDepartment = this.editDepartment.bind(this);
        this.deleteDepartment = this.deleteDepartment.bind(this);
        this.viewDepartment = this.viewDepartment.bind(this);
    }

    componentDidMount() {
        DepartmentService.getDepartments().then(res => {
            this.setState({departments: res.data});
        })
    }

    addDepartment() {
        this.props.history.push('/add-department/_add');
    }

    editDepartment(id){
        this.props.history.push(`/add-department/${id}`);
    }

    deleteDepartment(id){
        DepartmentService.deleteDepartment(id).then( res => {
            this.setState({departments: this.state.departments.filter( department => department.departmentId !== id)});
        });
    }

    viewDepartment(id) {
        this.props.history.push(`/view-department/${id}`);
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">List of departments</h2>
                <button className="btn btn-primary btn-lg" style={{marginBottom:"10px", marginLeft:"0"}} onClick={this.addDepartment}>Add Department</button>
                <div className="row">
                    <table className="table table-striped borderless table-hover table-dark">
                        <thead>
                            <tr>
                                <th>Department name</th>
                                <th>Department address</th>
                                <th>Department Code</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departments.map(department => <tr key={department.departmentId}>
                                    <td>{department.departmentName}</td>
                                    <td>{department.departmentAddress}</td>
                                    <td>{department.departmentCode}</td>
                                    <td>
                                        <button className="buttons" onClick={() => this.editDepartment(department.departmentId)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-pencil-fill" >
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                            </svg>
                                        </button>

                                        <button className="buttons" onClick={ () => this.deleteDepartment(department.departmentId)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-x-lg">
                                                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                                            </svg>
                                        </button>

                                        <button className="buttons" onClick={()=> this.viewDepartment(department.departmentId)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-file-text">
                                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                                        </svg>
                                        </button>

                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

export default ListDepartmentsComponent;