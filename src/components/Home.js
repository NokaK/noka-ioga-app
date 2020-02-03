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
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit() {
    const  { title , desc } = this.state
    this.props.dispatch ({
      type: "PUBLISH",
      blog_title: title,
      dlog_tesc: desc
    })
  
  }

  render (){
    return (
      <div>
        <h3 className="title">Add blog</h3>
        <form className="blog-form"  onSubmit={() => this.handleSubmit({ title: this.state.title, desc: this.state.desc })}>
          <div className="flex-column">
            <label >Title</label>
            <input className="blog-title" type="text"  name="title" value={this.state.title}   onChange={this.handleChange}/>
          </div>
          <div className="flex-column">
            <label >Description</label>
            <textarea className="blog-desc"  name="desc" value={this.state.desc} onChange={this.handleChange} ></textarea>
          </div>
          <button  value="Submit" >add</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
   
  }
}

export default  withRouter(connect (mapStateToProps)(Home));