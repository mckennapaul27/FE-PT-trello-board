import React, { Component } from 'react';

class Job extends Component {

    state = {
        task: this.props.task,
        completed: this.props.completed
    }

    toggleCompleted = () => {
        this.setState({
            completed: !this.state.completed
        })
    }

    render () {
        return (        
        <button className='card-content' style={{margin: '10px', backgroundColor:'white', borderColor: '#e2e4e6', width:'90%'
        }} >
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <a className='button is-small is-danger is-outlined' style={{float: 'right', margin: '-20px'}} onClick={() => this.props.deleteJob(this.props.id)}>x</a> 
            {/* Have to use () => this.props.deleteJob(this.props.index) in the onClick to make this work */}
        </div>    
        <div className='content'> 
            <p style={{textDecoration: this.state.completed ? 'line-through': 'none'}}>{this.state.task}</p>
            <p>{this.state.completed}</p>
            <div>            
            <label htmlFor="checkbox" style={{marginRight: '5px'}}>Select to mark completed</label>
            <input type="checkbox" className='checkbox' onChange={this.toggleCompleted} style={{marginRight: '5px'}}/>
            </div>            
            </div>`
        </button>
        )
    }
}

export default Job;