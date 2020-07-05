import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';

const Blog = ({ posts }) => {
  return (
    <div className="container">
      <p>
        <Link to="/">Home</Link> / <span>Blog</span>
      </p>

      {posts.length > 0 ? (
        posts.map(blog => (
          <div className="blog-card" key={blog.id}>
            <h3 style={{ marginTop: 0 }}>{blog.title}</h3>
            <TextTruncate
              line={1}
              element="span"
              text={blog.desc}
              textTruncateChild={<Link to={`/blog/${blog.id}`}>read more</Link>}
            />
          </div>
        ))
      ) : (
        <h3>no posts yet</h3>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

export default withRouter(connect(mapStateToProps)(Blog));
