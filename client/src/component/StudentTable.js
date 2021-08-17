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
import Chip from "@material-ui/core/Chip";
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
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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
            {/* <TableCell align="right" colSpan={4}>
              Courses
            </TableCell> */}
            <TableCell align="right" colSpan={1}>
              Contact Number
            </TableCell>
            <TableCell align="right" colSpan={1}>
              Email
            </TableCell>
            <TableCell align="right" colSpan={3}>
              Age
            </TableCell>
            <TableCell align="right" colSpan={1}>
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
              {/* <TableCell align="right" colSpan={4}>
                <Chip label={row.fat} />
              </TableCell> */}
              <TableCell align="right" colSpan={1}>
                {row.mobileNumber}
              </TableCell>
              <TableCell align="right" colSpan={1}>
                {row.email}
              </TableCell>

              <TableCell align="right" colSpan={3}>
                {row.age}
              </TableCell>
              <TableCell align="right" colSpan={1}>
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
