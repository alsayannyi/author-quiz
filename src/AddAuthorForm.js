import React from "react";
import AuthorForm from "./AuthorForm";

const AddAuthorForm = ({ match, onAddAuthor }) => {
  return (
    <React.Fragment>
      <h1 className="ml-sm-3">Add Author</h1>
      <AuthorForm onAddAuthor={onAddAuthor} />
    </React.Fragment>
  );
};

export default AddAuthorForm;
