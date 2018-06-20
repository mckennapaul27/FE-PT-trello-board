import React from 'react';

const NavBar = () => {
    return (
      <div>        
        <div className='navbar' style={{'backgroundColor': '#026aa7', display: 'flex', justifyContent: 'space-between'}}>
          <div className='navbar-item'>
            <button className='button is-info' style={{marginRight: '5px'}}><i className="fa fa-th-large" style={{marginRight: '5px'}}></i>Boards</button>
            <input className="input" type="text" placeholder="Search.."/>  
          </div>
          <div className='navbar-item'>
            <img src={require('../logo.png')} alt="logo"/>
          </div>
          <div className='navbar-item'>
            <button className='button is-info' style={{marginRight: '5px'}}><i className="fa fa-plus"></i></button>
            <button className='button is-info' style={{marginRight: '5px'}}><i className="fa fa-info-circle"></i></button>
            <button className='button is-info' style={{marginRight: '5px'}}><i className="fa fa-bell"></i></button>            
          </div>
        </div>       
        <div className='navbar' style={{'backgroundColor': '#4286f4', display: 'flex', justifyContent: 'space-between'}}>
          <div className='navbar-item' style={{color: 'white'}}>
           <h3 style={{marginRight: '5px'}}>Welcome Board</h3>
           <i className="fa fa-star" style={{marginRight: '5px'}}> |</i>
           <h4 style={{marginRight: '5px'}}>Personal |</h4>
           <h4 style={{marginRight: '5px'}}><i className="fa fa-lock" style={{marginRight: '5px'}}></i>Private</h4>
          </div>          
          <div className='navbar-item' style={{color: 'white'}}>
             <h4>... Show Menu</h4>  
          </div>
        </div>        
      </div>        
    )
}

export default NavBar;