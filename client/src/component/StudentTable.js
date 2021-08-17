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
import ChipArray from "../utils/ChipArray";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function StudentTable(props) {
  const classes = useStyles();
  console.log("object", props);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={1}>Name</TableCell>
            <TableCell align="right" colSpan={1}>
              Program Name
            </TableCell>
            <TableCell align="right" colSpan={6}>
              Courses
            </TableCell>
            <TableCell align="right" colSpan={1}>
              Contact Number
            </TableCell>
            <TableCell align="right" colSpan={1}>
              Email
            </TableCell>

            <TableCell align="right" colSpan={4}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" colSpan={1}>
                {row.name}
              </TableCell>
              <TableCell align="right" colSpan={1}>
                {row.program}
              </TableCell>
              <TableCell align="right" colSpan={6}>
                <ChipArray
                  data={row.courseId}
                  setselectedCourses={props.setselectedCourses}
                />
              </TableCell>
              <TableCell align="right" colSpan={1}>
                {row.mobileNumber}
              </TableCell>
              <TableCell align="right" colSpan={1}>
                {row.email}
              </TableCell>

              <TableCell align="right" colSpan={4}>
                <IconButton
                  onClick={(e) => props.deleteItem(e, row._id, "student")}
                  aria-label="delete"
                  className={classes.margin}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>

                <IconButton aria-label="edit" className={classes.margin}>
                  <EditIcon
                    onClick={(e) =>
                      window.location.replace(`/editStudent/${row._id}`)
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
