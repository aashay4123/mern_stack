import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import TagFacesIcon from "@material-ui/icons/TagFaces";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray(props) {
  const classes = useStyles();

  return (
    <div>
      {props.data.map((data) => {
        return (
          <div key={data._id}>
            <Chip
              label={data.name}
              onDelete={undefined}
              className={classes.chip}
            />
          </div>
        );
      })}
    </div>
  );
}
