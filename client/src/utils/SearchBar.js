import React, { useState } from "react";

import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
const ref = React.createRef();

export const SearchBar = (props) => {
  const [name, setName] = useState("");

  const handleChange = (selectedOptions) => {
    console.log("checking for changes: ", selectedOptions[0]);
    if (!selectedOptions.length) handleInputChange(name);
    else {
      setName(selectedOptions[0]);
      checkname(selectedOptions[0]);
    }
  };

  const handleInputChange = (input, e) => {
    console.log("value: ", input);
    setName(input);
    checkname(input);
  };

  const checkname = (name1) => {
    console.log("object", props);
    if (name1 === "") {
      props.searchName(props.list);
    } else {
      // eslint-disable-next-line array-callback-return
      let newValues = props.list.filter((info) => {
        if (info.name.toLowerCase().includes(name1.toLowerCase().trim())) {
          return info;
        }
      });
      props.searchName(newValues);
    }
  };

  return (
    <div className="jumbotron searchBar" style={{ height: 5 }}>
      <div className="input-group mb-3">
        <Typeahead
          id="typeaheadBar"
          options={props.nameList}
          minLength={1}
          placeholder={`Search A ${props.role}`}
          onChange={handleChange}
          onInputChange={handleInputChange}
          ref={ref}
        />
        <div className="input-group-prepend ml-1">
          <span className="input-group-text border-0 bg-transparent">
            <i
              className="fa fa-search search-hover"
              onClick={() => {
                checkname(name);
                ref.current.clear();
              }}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
};
