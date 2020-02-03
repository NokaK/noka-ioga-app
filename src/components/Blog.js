import React, {Component} from 'react'
import { connect } from "react-redux";
import { withRouter  } from "react-router-dom";


class Blog extends Component{
  render (){
    return (
      <div>Blog</div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
  }
}

export default  withRouter(connect (mapStateToProps)(Blog));