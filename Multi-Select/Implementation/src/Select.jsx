import React, { useState, useRef, useEffect } from 'react';

const options = [
  { value: 'first', label: 'First' },
  { value: 'second', label: 'Second' },
  { value: 'third', label: 'Third' },
  { value: 'fourth', label: 'Fourth' }
];

const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOptions((prev) =>
      prev.find((o) => o.value === option.value)
        ? prev.filter((o) => o.value !== option.value)
        : [...prev, option]
    );
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-72" ref={dropdownRef}>
      <div
        className="flex flex-wrap items-center border border-gray-300 rounded p-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedOptions.map((option) => (
          <span
            key={option.value}
            className="flex items-center bg-gray-200 rounded px-2 py-1 m-1"
          >
            {option.label}
            <button
              className="ml-2"
              onClick={(e) => {
                e.stopPropagation();
                handleOptionClick(option);
              }}
            >
              ×
            </button>
          </span>
        ))}
        <span className="ml-auto">▼</span>
      </div>
      {isOpen && (
        <div className="absolute left-0 w-full mt-1 border border-gray-300 bg-white z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className={`p-2 cursor-pointer ${
                selectedOptions.find((o) => o.value === option.value)
                  ? 'bg-gray-200'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
