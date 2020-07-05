import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class BlogDetails extends React.Component {
  state = { currentPost: [] };

  componentDidMount() {
    const id = this.props.match.params.id;

    const selectedPost = this.props.posts.find(post => post.id === Number(id));
    this.setState({ currentPost: selectedPost });
  }

  render() {
    const post = this.state.currentPost;

    return (
      <div className="container">
        <p>
          <Link to="/">Home</Link> / <Link to="/blog">Blog</Link> /{' '}
          <span>{post.title}</span>
        </p>

        <BlogPost title={post.title} text={post.desc} />
      </div>
    );
  }
}

const BlogPost = ({ title, text }) => (
  <div className="blog-card">
    <h3 style={{ marginTop: 0 }}>{title}</h3>
    <p>{text}</p>
  </div>
);

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default withRouter(connect(mapStateToProps)(BlogDetails));
