import React, { Component } from 'react';
import './App.css'
import NavBar from './NavBar';
import JobList from './JobList';

class App extends Component {
  state = {
    lists: this.props.jobs.reduce((acc, item) => {
      if(!acc.includes(item.listID)) {
        acc.push(item.listID)
      } 
      return acc;
    },[]),
    jobs: this.props.jobs,
    addNew: <i className="fa fa-plus"></i>
  }

  editList = () => {
    this.setState({
      addNew: <AddNewList cancelAdding={this.cancelAdding} addList={this.addList}/>
    })
  }
  addList = () => {
    this.setState({
      lists: this.state.lists.concat({}),
      addNew: '+'
    })
  }
  cancelAdding = () => {   
    this.setState({
      addNew: <i className="fa fa-plus"></i>
    })
  }
  
  render() {
    return (
      <div>                  
        <NavBar />         
        <div style={{display: 'flex'}}>
          {
            this.state.lists.map((list, i) => {
              return <JobList key={i} jobs={this.state.jobs} listID={list} />
            })
          }
          <div style={{marginTop: 10, cursor: 'pointer'}}  onClick={this.editList}>{this.state.addNew}</div>
        </div> 
      </div>
    );
  }
}


const AddNewList = props => {
  return (
    <div>
      {/* <textarea cols="30" rows="5" onChange={props.handleChange}></textarea> */}
      <div style={{display: 'flex',justifyContent: 'space-between'}}>
        <button className='button is-success' onClick={props.addList}>Add</button>
        <button className='button is-danger' onMouseDown={props.cancelAdding}>X</button>
      </div>
    </div> 
  )
}

export default App;
