import React from 'react'

function SearchBar({onSubmit, queryString, setQueryString}) {

  const handleTextChange = (e) => {
    setQueryString(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={handleTextChange} type='text' className='search-bar' placeholder='&#xf002;  Enter ingredients here...' defaultValue={queryString} />
      <style jsx='true'>
        {`
        .search-bar {
          font-family: system-ui, 'Font Awesome 5 Free';
          font-size: 20px;
          width: 640px;
          height: 37px;
          z-index: 1;
          padding: 0px 15px;
          border-radius: 50px;
          border: 4px solid #D2AE69;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
        `}
      </style>
    </form>
  )
}

export default SearchBar
