import React from 'react';

function CustomerList() {
  const [userList, setUserList] = React.useState([]);

  const inputRef = React.useRef();

  const btnSubmitHandler = () => {
    if (inputRef.current.value !== '') {
      setUserList([...userList, inputRef.current.value]);
    }
    inputRef.current.value = '';
  };

  return (
    <div className='mt-75 layout-column justify-content-center align-items-center'>
      <section className='layout-row align-items-center justify-content-center'>
        <input
          type='text'
          className='large'
          placeholder='Name'
          data-testid='app-input'
          ref={inputRef}
        />
        <button
          type='submit'
          className='ml-30'
          data-testid='submit-button'
          onClick={btnSubmitHandler}
        >
          Add Customer
        </button>
      </section>

      {userList.length !== 0 && (
        <ul className='styled mt-50' data-testid='customer-list'>
          {userList.map((customer, index) => (
            <li
              key={index}
              id={index}
              className='slide-up-fade-in'
              data-testid={`list-item${index}`}
            >
              {customer}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomerList;
