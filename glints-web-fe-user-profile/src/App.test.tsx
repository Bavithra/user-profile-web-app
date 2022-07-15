import React from "react";

import App from "./App";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import renderer from "react-test-renderer";

const mockStore = configureStore();
let store;

const initialState = {user:{
  user: {
    name: '',
    email: '',
    age: '',
    'profile-image': '',
    'work-experience': [],
  }
}}

describe("App Block", () => {
  it("renders correctly", () => {
    store = mockStore(initialState);

    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
