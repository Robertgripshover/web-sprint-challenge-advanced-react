// Write your tests here

// - Using `codegrade_mvp.test.js` as inspiration, write 5 tests inside `frontend/components/App.test.js`:
//   - From inside the test file, import a component of your choosing, either `AppClass.js` or `AppFunctional.js`.
//   - Test that the visible texts in headings, buttons, links... render on the screen.
//   - Test that typing on the input results in its value changing to the entered text.

import React from 'react';
import {render, screen} from "@testing-library/react";
import AppClass from './AppClass';

test('sanity', () => {
  expect(true).toBe(false)
})

test('Render without errors', () => {
  render(<AppClass />)
})

// test('When app mounts, header Welcome to the GRID exists on the screen', () => {
//   //Arrage, -->>
//   // that is getting the AppClass rendered to the screen
//   //for it to be able to be tested
//   render(<AppClass />)

//   //Act, -->>
//   const leftButton = screen.getByTestId('left')
//   //if we were to do queryByText it would move on to 

//   //Assert -->>
//   expect(leftButton).toBeInTheDocument()
//   expect(leftButton).toHaveTextConent(/left/i)


// })




