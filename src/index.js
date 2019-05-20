import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";
import AddAuthorForm from "./AddAuthorForm";
import * as serviceWorker from "./serviceWorker";
import { shuffle, sample } from "underscore";

const authors = [
  {
    name: "Mark Twain",
    imageUrl: "images/authors/marktwain.jpg",
    imageSource: "Wikimedia Commons",
    books: [
      { id: 1, title: "The Adventures of Huckleberry Finn" },
      { id: 2, title: "My little Pony" },
      { id: 3, title: "Pokémon Detective Pikachu" },
      { id: 4, title: "Darkness At Noon" }
    ]
  },
  {
    name: "Joseph Conrad",
    imageUrl: "images/authors/josephconrad.png",
    imageSource: "Wikimedia Commons",
    books: [{ id: 1, title: "Heart of Darkness" }]
  },
  {
    name: "J.K. Rowling",
    imageUrl: "images/authors/jkrowling.jpg",
    imageSource: "Wikimedia Commons",
    imageAttribution: "Daniel Ogren",
    books: [{ id: 1, title: "Harry Potter and the Sorcerers Stone" }]
  },
  {
    name: "Stephen King",
    imageUrl: "images/authors/stephenking.jpg",
    imageSource: "Wikimedia Commons",
    imageAttribution: "Pinguino",
    books: [{ id: 1, title: "The Shining" }, { id: 2, title: "IT" }]
  },
  {
    name: "Charles Dickens",
    imageUrl: "images/authors/charlesdickens.jpg",
    imageSource: "Wikimedia Commons",
    books: [
      { id: 1, title: "David Copperfield" },
      { id: 1, title: "A Tale of Two Cities" }
    ]
  },
  {
    name: "William Shakespeare",
    imageUrl: "images/authors/williamshakespeare.jpg",
    imageSource: "Wikimedia Commons",
    books: [
      { id: 1, title: "Hamlet" },
      { id: 2, title: "Macbeth" },
      { id: 3, title: "Romeo and Juliet" }
    ]
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce((acc, currentAuthor, i) => {
    return acc.concat(currentAuthor.books.map(book => book.title));
  }, []);

  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find(author =>
      author.books.some(book => book.title === answer)
    )
  };
}

function onAnswerSelected(answer) {
  const isCorrected = state.turnData.author.books.some(
    book => book.title === answer
  );
  state.highlight = isCorrected ? "correct" : "wrong";
  render();
}

let state = resetState();

function resetState() {
  return {
    turnData: getTurnData(authors),
    highlight: ""
  };
}

const AuthorWrapper = withRouter(({ history }) => (
  <AddAuthorForm
    onAddAuthor={author => {
      authors.push(author);
      history.push("/");
    }}
  />
));

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <Route
          exact
          path="/"
          render={() => (
            <App
              state={state}
              onAnswerSelected={onAnswerSelected}
              onContinue={() => {
                state = resetState();
                render();
              }}
            />
          )}
        />
        <Route path="/add" component={AuthorWrapper} />
      </React.Fragment>
    </BrowserRouter>,
    document.getElementById("root")
  );
}
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
