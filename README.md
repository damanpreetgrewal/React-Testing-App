# React: Customer List

The component must have the following functionalities:

- The input should initially be empty.
- If no value is entered, clicking on the 'Add Customer' button should not do anything.
- Clicking on the 'Add Customer' button should add the input value to the list below. For this, add `<li>{input}</li>` to the `<ul data-testid="customer-list">` element.
- After adding the value to the list, clear the value of the input box.
- Please note that the customer list, `<ul>` element should only be rendered if it has at least one customer added (i.e. at least one `<li>` child). So initially when app is mounted, since no customers are added, `<ul>` element should not be rendered.
- All the values added by the button should be rendered in the list below.

## Testing Requirements

- Input should have data-testid attribute 'app-input'.
- Button should have data-testid attribute 'submit-button'.
- Customer list `<ul>` should have data-testid attribute 'customer-list'.
- Elements in the list should have data-testid attributes as 'list-item0', 'list-item1', 'list-item2', 'list-item3', and so on.

## Project Specifications

**Read Only Files**
- src/App.test.js

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
