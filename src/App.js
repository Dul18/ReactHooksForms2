import logo from './logo.svg';
import './App.css';

import React,{useState}  from 'react';

import { useForm} from "react-hook-form";

function App() {

  const[user,setUser]=useState([])
  const[employee,setEmployee]=useState({firstName:'',lastname:'',department:''})
  const addEmployee=(e)=>{ 
      
      e.preventDefault();
      setUser([...user,
      {firstName:employee.firstName,
      lastName:employee.lastName,
      department:employee.department}]) }
      
      
     
      const { register, handleSubmit } = useForm();

      const onSubmit = employee=> {
        var temp=(JSON.stringify(employee));
        var obj = JSON.parse(temp);
    }


  return(
      <div>
          <form onSubmit={handleSubmit(onSubmit)} align="center" >
              <h2>Employee Details</h2>
              
              <input type='text' placeholder = "First Name" value={employee.firstName} onChange={e => setEmployee({...employee,firstName : e.target.value})} ref={register}/><br/>
            
              <input type='text' placeholder = "Last Name "value={employee.lastName} onChange={e => setEmployee({...employee,lastName : e.target.value})} ref={register}/><br/>
              
              <select name="category" value={employee.department} onChange={e => setEmployee({...employee,department : e.target.value})} ref={register}><br/>
                  <option value="">Department</option>
                  <option value="IT">HR</option>
                  <option value="Accounting and Finance">Accounting and Finance</option>
                  <option value="Marketing">Marketing </option>
                  <option value="Research and Development">Research and Development</option>
              </select>
             
              <button onClick={addEmployee}>Add</button>
              </form>
          
         <br/>

         <br/>
          <table border="1" align="center">
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Department</th>
                  
              </tr>
                  {
                      user.map(Employee => (
                      <tr>
                          <td>{Employee.firstName}</td>
                          <td>{Employee.lastName}</td>
                          <td>{Employee.department}</td>
                          
                      </tr>
                      ))
                  } 
             
          </table>
          <h4>Your First Name is = { employee.firstName}</h4>
          <p><h4>Your Last Name is = { employee.lastName}</h4></p> 
          <p><h4>Your Department Name is = { employee.department}</h4></p>
         


      </div>
  );
}

export default App;
