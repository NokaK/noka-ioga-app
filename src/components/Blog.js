import React, {Component} from 'react'
import { connect } from "react-redux";
import { withRouter  } from "react-router-dom";
import { Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate';
import '../App.css'


class Blog extends Component{
  
  render (){
    return (
      <div>
        {
          this.props.blog.map( (blog,index) => {
            return (
              <div className="blog-card" key={index}>
                <h4>{blog.title}</h4>
                <TextTruncate
                    line={1}
                    element="span"
                    truncateText="…"
                    text={blog.desc}
                    textTruncateChild={<Link to={`/blogdetails/${blog.id}`}>read more</Link>}
                />
              </div>
             
            )
          })
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

export default  withRouter(connect (mapStateToProps)(Blog));