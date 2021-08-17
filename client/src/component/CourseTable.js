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
          {props.rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="left">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.credits}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete" className={classes.margin}>
                  <DeleteIcon
                    onClick={(e) => props.deleteItem(e, row._id, "course")}
                    fontSize="small"
                  />
                </IconButton>

                <IconButton aria-label="edit" className={classes.margin}>
                  <EditIcon
                    onClick={(e) =>
                      window.location.replace(`/editCourse/${row._id}`)
                    }
                    fontSize="small"
                  />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
