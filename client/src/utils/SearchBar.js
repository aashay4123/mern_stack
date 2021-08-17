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
    if (name1 === "") {
      props.searchName(props.list);
    } else {
      // eslint-disable-next-line array-callback-return
      let newValues = props.list.filter((info) => {
        if (info.name.toLowerCase().includes(name1.toLowerCase().trim())) {
          return info;
        }
      });
      console.log("object", name1, props.list, newValues);

      props.searchName(newValues);
    }
  };

  return (
    <div
      style={{
        height: "20px",
        justifyContent: "center",
        textAlign: "center",
        float: "center",
      }}
    >
      <div className="input-group mb-3">
        <Typeahead
          id="typeaheadBar"
          options={props.nameList}
          minLength={1}
          placeholder={`Search A ${props.role}`}
          onChange={handleChange}
          onInputChange={handleInputChange}
          ref={ref}
          style={{ height: "50px" }}
        />
      </div>
    </div>
  );
};
