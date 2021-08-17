import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Data Analytics & Machine Learning", 159, 6.0, 24, 4.0),
  createData("Financial Decision Making", 237, 9.0, 37, 4.3),
  createData("Business Innovation & Management", 262, 16.0, 24, 6.0),
  createData("Algorithmic Trading", 305, 3.7, 67, 4.3),
  createData("Database Management", 356, 16.0, 49, 3.9),
];

export default function CourseTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <b>Course Name</b>
            </TableCell>
            <TableCell align="left">
              <b>Credits </b>
            </TableCell>
            <TableCell align="right">
              <b>Actions</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="left">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteIcon fontSize="small" />
                </IconButton>

                <IconButton aria-label="edit" className={classes.margin}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
