import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';

const Blog = ({ posts }) => {
  return (
    <div className="container">
      {posts.length > 0 ? (
        posts.map(blog => (
          <div className="blog-card" key={blog.id}>
            <h3 style={{ marginTop: 0 }}>{blog.title}</h3>
            <TextTruncate
              line={1}
              element="span"
              text={blog.description}
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

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(Blog);
