// Write your tests here

// - Using `codegrade_mvp.test.js` as inspiration, write 5 tests inside `frontend/components/App.test.js`:
//   - From inside the test file, import a component of your choosing, either `AppClass.js` or `AppFunctional.js`.
//   - Test that the visible texts in headings, buttons, links... render on the screen.
//   - Test that typing on the input results in its value changing to the entered text.
import React from 'react';
import {render} from "@testing-library/react";
// import userEvent from '@testing-library/user-event'
import AppClass from './AppClass';



// test('sanity', () => {
//   expect(true).toBe(false)
// })

test('renders without errors', () => {
  render(<AppClass />)
})
