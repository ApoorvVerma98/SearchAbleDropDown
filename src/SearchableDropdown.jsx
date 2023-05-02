import React, { useState, useRef } from 'react';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
  { label: 'Option 5', value: 'option5' },
  { label: 'Option 6', value: 'option6' },
  { label: 'Option 7', value: 'option7' },
  { label: 'Option 8', value: 'option8' },
  { label: 'Option 9', value: 'option9' },
  { label: 'Option 10', value: 'option10' },

];

const SearchableDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setSearchTerm('');
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dropdownMenuStyles = {
    display: isOpen ? 'block' : 'none',
    maxHeight: '200px',
    overflowY: 'auto',
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={handleToggle}>
        {selectedOption ? selectedOption.label : 'Select an option'}
      </button>
      <div className="dropdown-menu" style={dropdownMenuStyles}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        {filteredOptions.map((option) => (
          <button
            key={option.value}
            className="dropdown-item"
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchableDropdown;
