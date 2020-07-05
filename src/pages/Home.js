import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  state = { title: '', desc: '' };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, desc } = this.state;
    if (!title.length || !desc.length) return;

    this.props.dispatch({
      type: 'PUBLISH',
      title: title,
      desc: desc,
      id: Date.now()
    });
    this.setState({ title: '', desc: '' });
  };

  render() {
    return (
      <div className="container">
        <h2 className="title">
          Create post{' '}
          <span style={{ fontWeight: 'normal' }}>
            #{this.props.posts.length + 1}
          </span>
        </h2>

        <form className="blog-form" onSubmit={this.handleSubmit}>
          <div className="flex-column">
            <label htmlFor="title" className="blog-form__label">
              Title:
            </label>
            <input
              className="blog-form__title"
              name="title"
              id="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div className="flex-column">
            <label htmlFor="desc" className="blog-form__label">
              Description:
            </label>
            <textarea
              className="blog-form__description"
              name="desc"
              id="desc"
              value={this.state.desc}
              onChange={this.handleChange}
            />
          </div>
          <button className="blog-form__btn">add</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { posts: state.posts };
};

export default withRouter(connect(mapStateToProps)(Home));
