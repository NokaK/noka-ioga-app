import React, { useState } from 'react';
import { connect } from 'react-redux';
import InputWithLabel from '../components/InputWithLabel';
import { publish } from '../store/actions';

const initialState = { title: '', description: '' };

const Home = props => {
  const [inputData, setInputData] = useState(initialState);
  const { description, title } = inputData;

  const handleChange = event => {
    const { name, value } = event.target;
    setInputData(state => ({
      ...state,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!title.length || !description.length) return;

    props.publish({
      title,
      description,
      id: Date.now()
    });

    setInputData(initialState);
  };

  return (
    <div className="container">
      <h2 className="title">
        Create post{' '}
        <span style={{ fontWeight: 'normal' }}>#{props.posts.length + 1}</span>
      </h2>

      <form className="blog-form" onSubmit={handleSubmit}>
        <InputWithLabel label="title" value={title} onChange={handleChange} />

        <InputWithLabel
          type="textarea"
          label="description"
          value={description}
          onChange={handleChange}
        />
        <button className="blog-form__btn">publish</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({ posts: state.posts });

const mapDispatchToProps = dispatch => ({
  publish: args => dispatch(publish(args))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
