import React, { Component } from 'react';
import DepartmentService from '../../services/DepartmentService';


class CreateDepartmentComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            departmentId: this.props.match.params.id,
            departmentName:"",
            departmentAddress:"",
            departmentCode:""
        };

         this.changeDepartmentNameHandler= this.changeDepartmentNameHandler.bind(this);
         this.changeDepartmentAddressHandler= this.changeDepartmentAddressHandler.bind(this);
         this.changeDepartmentCodeHandler= this.changeDepartmentCodeHandler.bind(this);
    }

    componentDidMount(){
        console.log(this.state.departmentId);
        if(this.state.departmentId === "_add" ){
            console.log("NOW I WILL RETURN");
            return;
        } else {
            DepartmentService.getDepartmentById(this.state.departmentId).then( res => {
                let department = res.data;
                this.setState({...department});  
                //console.log(this.state);
            });
        }
    } 

    changeDepartmentNameHandler = e =>{
        //e.preventDefault();
        this.setState({departmentName:e.target.value});
    }

    changeDepartmentAddressHandler = e => {
       // e.preventDefault();
        this.setState({departmentAddress:e.target.value});
    }

    changeDepartmentCodeHandler = e => {
        //e.preventDefault();
        this.setState({departmentCode:e.target.value});
    }

    saveOrUpdateDepartment = e =>{
        e.preventDefault();
        const {departmentId,departmentName,departmentAddress,departmentCode} = this.state;
        let department = {
            departmentName: departmentName,
            departmentAddress:departmentAddress,
            departmentCode:departmentCode
        }
        console.log(departmentId);
        if(departmentId === "_add" ){
            DepartmentService.createDepartments(department).then(res => {
                this.props.history.push("/departments");
            });
        } else {
            DepartmentService.updateDepartment(department,departmentId).then(res => {
                this.props.history.push("/departments");
            });
        }
    }

    cancel() {
        this.props.history.push("/departments");
    }


    render() {
        return (
            <div>
               <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">{this.state.departmentId === '_add' ? "Add Department": "Update Department"}</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Department Name:</label>
                                    <input type="text" 
                                    placeholder="Department name" 
                                    name="departmentName" 
                                    className="form-control"
                                    value={this.state.departmentName} 
                                    onChange={this.changeDepartmentNameHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Department Address:</label>
                                    <input type="text" 
                                    placeholder="Department address" 
                                    name="departmentAddress" 
                                    className="form-control"
                                    value={this.state.departmentAddress} 
                                    onChange={this.changeDepartmentAddressHandler}/>
                                </div>

                                <div className="form-group">
                                    <label>Department Code:</label>
                                    <input type="text" 
                                    placeholder="Department code" 
                                    name="departmentCode" 
                                    className="form-control"
                                    value={this.state.departmentCode} 
                                    onChange={this.changeDepartmentCodeHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.saveOrUpdateDepartment.bind(this)}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>

                            </form>
                        </div>
                    </div>
                </div>
               </div> 
            </div>
        );
    }
}

export default CreateDepartmentComponent;