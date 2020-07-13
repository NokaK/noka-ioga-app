import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const BlogDetails = props => {
  const [currentPost, setCurrentPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const selectedPost = props.posts.find(post => post.id === Number(id));

    setCurrentPost(selectedPost);
  }, [props.posts, id]);

  return (
    <div className="container">
      <p>
        <Link to="/blog">Blog</Link> / <span>{currentPost.title}</span>
      </p>

      <BlogPost title={currentPost.title} text={currentPost.description} />
    </div>
  );
};

const BlogPost = ({ title, text }) => (
  <div className="blog-card">
    <h3 style={{ marginTop: 0 }}>{title}</h3>
    <p>{text}</p>
  </div>
);

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(BlogDetails);
