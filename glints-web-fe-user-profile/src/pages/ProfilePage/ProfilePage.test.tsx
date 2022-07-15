import React from "react";

import ProfilePage from "./ProfilePage";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

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

describe("ProfilePage Block", () => {
  it("renders correctly", () => {
    store = mockStore(initialState);

    const tree = renderer
      .create(
        <Provider store={store}>
          <ProfilePage />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Check test render', () => {
  store = mockStore(initialState);

  it('Shows "Hello world!"', () => {
    store = mockStore(initialState)
    const { getByText } = render(<Provider store={store}><ProfilePage /></Provider>)

    expect(getByText('Please remember to save all the changes(name, image, email, age and work experience) you have made to the profile by clicking the below button')).not.toBeNull();
    expect(getByText('Add Work Experience')).not.toBeNull();
    expect(getByText('WORK EXPERIENCE')).not.toBeNull();
    expect(getByText('SAVE CHANGES')).not.toBeNull();
    expect(getByText('77.9% of employers surveyed consider work experience to be a crucial data point in job applications. So be sure to fill up this section to raise your chances of securing an interview!')).not.toBeNull();


  })
})
