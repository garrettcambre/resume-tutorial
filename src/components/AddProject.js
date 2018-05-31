import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
constructor(){
  super();
  this.state = {
    newProject:{}
  }
}

  static defaultProps = {
    categories: ['javaScript', 'React.js', 'Ruby on Rails' ]
  }
  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('title is required');
    }else{
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value,
        inspiration: this.refs.inspiration.value

      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
    });
    }
    e.preventDefault();
  }
  render(){
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return(
      <div>
        <h3> add project </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label> <br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label> <br />
            <select ref="category" >
              {categoryOptions}
            </select>
          </div>
          <div>
            <label> Inspiration</label> <br/>
              <input type= "text" ref="inspiration"/>
          </div>

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
AddProject.propTypes= {
  categories:PropTypes.array,
  addProject:PropTypes.func
}﻿

export default AddProject;
