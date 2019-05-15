import React from "react";
import ReactDOM from "react-dom";
import AuthorQuiz from "./AuthorQuiz";
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { exportAllDeclaration } from "@babel/types";

Enzyme.configure({ adapter: new Adapter() });

const state = {
  turnData: {
    books: [
      "The Adventures of Huckleberry Finn",
      "My little Pony",
      "Pokémon Detective Pikachu",
      "Harry Potter and the Sorcerers Stone",
      "Heart of Darkness",
      "Darkness At Noon",
      "The Shining"
    ],
    author: {
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
    highlight: "wrong"
  }
};

describe("Author Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("When no answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => {}} />);
    });

    it("it should have no background color", () => {
      expect(
        wrapper
          .find("div.answer.alert")
          .first()
          .props().style.color
      ).toBe("#555");
    });
  });
});
