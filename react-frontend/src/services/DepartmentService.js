import axios from 'axios';

const DEPARTMENTS_API_BASE_URL = "http://localhost:8082/api/v1/departments";

class DepartmentService {

    getDepartments(){
        return axios.get(DEPARTMENTS_API_BASE_URL);
    }

    createDepartments(department) {
        return axios.post(DEPARTMENTS_API_BASE_URL,department);
    }

    getDepartmentById(departmentId) {
        return axios.get(DEPARTMENTS_API_BASE_URL+"/"+departmentId);
    }

    updateDepartment(department, departmentId){
        return axios.put(DEPARTMENTS_API_BASE_URL + "/" + departmentId, department);
    }

    deleteDepartment(departmentId){
        return axios.delete(DEPARTMENTS_API_BASE_URL+'/'+departmentId);
    }
    
}

export default new DepartmentService();