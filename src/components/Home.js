import React, {Component} from 'react'
import '../App.css'
import { connect } from "react-redux";
import { withRouter  } from "react-router-dom";

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {title: '',desc:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({title: event.target.value});
      console.log( this.state.title);
  }

  handleSubmit(event) {
    event.preventDefault();
  }


  render (){
    return (
      <div>
        <h3 className="title">Add blog</h3>
        <form className="blog-form"  onSubmit={this.handleSubmit}   >
          <div className="flex-column">
            <label htmlFor="title">Title</label>
            <input className="blog-title" type="text" id="title" value={this.state.title}   onChange={this.handleChange}/>
          </div>
          <div className="flex-column">
            <label htmlFor="desc">Description</label>
            <textarea className="blog-desc" id="desc"   ></textarea>
          </div>
          <button type="submit" value="Submit">add</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    
  }
}

export default  withRouter(connect (mapStateToProps)(Home));