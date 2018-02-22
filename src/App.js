import './App.css';

import React from 'react';
import Downshift from 'downshift';

function BasicAutocomplete({ items, onChange }) {
  return (
    <Downshift
      onChange={onChange}
      render={({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex,
      }) => (
        <div>
          <input {...getInputProps({ placeholder: 'Favorite fruit ?' })} />
          {isOpen ? (
            <div style={{ border: '1px solid #ccc' }}>
              {items
                .filter(
                  i =>
                    !inputValue ||
                    i.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <div
                    {...getItemProps({ item })}
                    key={item}
                    style={{
                      backgroundColor:
                        highlightedIndex === index ? 'gray' : 'white',
                      fontWeight: selectedItem === item ? 'bold' : 'normal',
                    }}
                  >
                    {item}
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      )}
    />
  );
}

function App() {
  return (
    <BasicAutocomplete
      items={['apple', 'orange', 'carrot']}
      onChange={selectedItem => console.log(selectedItem)}
    />
  );
}
export default App;
