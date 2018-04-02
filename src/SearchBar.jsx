import React from 'react';

const SearchBar = (props) => (
  <div className="row-fluid">
   <form className="form" onSubmit={props.submit}>
     <div className="form-group form-group-lg">
       <label htmlFor="keyword"></label>
       <input type="text" className="form-control" id="keyword" placeholder="Search for keywords" onChange={props.change}/>
     </div>
     <button className="btn btn-block btn-primary" type="submit">Search</button>
   </form>
  </div>
);

export default SearchBar;