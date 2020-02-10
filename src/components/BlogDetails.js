import React, {Component} from 'react'
import { connect } from "react-redux";
import { withRouter  } from "react-router-dom";



class BlogDetails extends Component{
  componentDidMount(){
    const id = this.props.match.params.id;
    const foundblog = this.props.blog.find(foundblog =>  foundblog.id === id);
    console.log(foundblog)
    return {
    foundblog
    }
  } 
  render (){
    const blogDetail = this.props.blog
    return (
      <div>
       {
        blogDetail && 
        <div className="blog-card">
          <h4>{blogDetail.title}</h4>
          <p>{blogDetail.desc}</p>
        </div>
       }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blog:  state.blog
  }
}
export default  withRouter(connect (mapStateToProps)(BlogDetails));






