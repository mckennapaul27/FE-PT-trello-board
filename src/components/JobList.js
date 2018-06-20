import React, { Component } from 'react';
import Job from './Job';
import {deleteJob} from '../state/stateUpdaters';

class JobList extends Component {
  state = {
    title: 'Enter list title..',
    jobs: this.props.jobs.filter((job) => job.listID === this.props.listID),
    newJob: 'Add a job...',
    job: ''    
  }

  changeTitle = () => {   
    this.setState({
      title: <textarea onMouseLeave={this.setTitle}/>
    })
  }
  setTitle = (e) => {
    let newTitle;
    e.target.value.length > 0 ? newTitle = e.target.value :  newTitle = <textarea/>;
    this.setState({
      title: newTitle
    })
  }
  editJobList = () => {
    this.setState({
      newJob: <AddNewJob handleChange={this.handleChange} addJob={this.addJob} cancelAdding={this.cancelAdding} /> 
    })
  }
  handleChange = (e) => {
    this.setState({
      job: e.target.value
    })
  }
  addJob = () => {    
    this.setState({
      jobs: this.state.jobs.concat({task: this.state.job, completed: false})
    })
  }
  cancelAdding = () => {   
    this.setState({
      newJob: 'Add a job...',
      job: ''
    })
  }
  deleteJob = (id) => {    
    this.setState({
      jobs: deleteJob(this.state.jobs, id)
    })
  }
  

  render () {
    let jobs;
    if(this.state.jobs) {
      jobs = this.state.jobs;
    } else {
      jobs = [{"task": "Example Task", "completed": false}]
      this.setState({
        jobs: jobs
      })
    }
    return (
      <div style={{width: '20%', height: '90%', margin: '10px'}}>       
       <div className='card' style={{backgroundColor: '#e2e4e6'}}>
        <header className='card-header'>
          <div className='card-header-title'>
             <h2 onClick={this.changeTitle} style={{cursor: 'pointer'}}>{this.state.title}</h2>             
          </div>
          <a className='card-header-icon' aria-label='more-options'>
            <span className='icon'>
              <i className='fa fa-angle-down' aria-hidden='true'></i>
            </span>
          </a>
        </header>
       
        {jobs.map((job, i) => { 
          return <Job key={i} index={i} id={job.id} task={job.task} completed={job.completed} 
          deleteJob={this.deleteJob}  />          
        })}

        <footer className='card-footer'>
          <div className='card-footer-item' style={{cursor: 'pointer'}} onClick={this.editJobList}>{this.state.newJob}</div>
        </footer>

       </div>
      </div>        
    )
  }
}

const AddNewJob = props => {
  return (
    <div>
      <textarea cols="30" rows="5" onChange={props.handleChange}></textarea>
      <div style={{display: 'flex',justifyContent: 'space-between'}}>
        <button className='button is-success' onClick={props.addJob}>Add</button>
        <button className='button is-danger' onMouseDown={props.cancelAdding}>X</button>
      </div>
    </div> 
  )
}

export default JobList;