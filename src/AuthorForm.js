import React, { Component } from "react";

class AuthorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      books: [],
      booksTemp: ""
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
  }

  onFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddAuthor(this.state);
  }
  handleAddBook(e) {
    this.setState({
      books: this.state.books.concat([this.state.booksTemp]),
      booksTemp: ""
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-1 col-form-label" htmlFor="name">
            Name
          </label>
          <input
            className="col-sm-4 form-control"
            type="text"
            name="name"
            placeholder="Enter Author's Name"
            value={this.state.name}
            onChange={this.onFieldChange}
          />
        </div>
        <div className="form-group row">
          <label className=" col-sm-1 col-form-label" htmlFor="imageUrl">
            Image URL
          </label>
          <input
            className="col-sm-4 form-control"
            type="text"
            name="imageUrl"
            placeholder="Select photo"
            value={this.state.imageUrl}
            onChange={this.onFieldChange}
          />
        </div>
        <div className="form-group row">
          <label className=" col-sm-1 col-form-label" htmlFor="booksTemp">
            Books
          </label>
          <input
            className="col-sm-4 form-control"
            type="text"
            name="booksTemp"
            value={this.state.booksTemp}
            onChange={this.onFieldChange}
          />
          <button
            type="button"
            className="col-sm-1 btn btn-warning"
            onClick={this.handleAddBook}
          >
            +
          </button>
        </div>
        <div className="row">
          <span className="offset-sm-1" />
          {this.state.books.map(book => (
            <p className="col-sm-1" key={book}>
              {book}
            </p>
          ))}
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}

export default AuthorForm;
