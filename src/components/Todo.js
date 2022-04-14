import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CustomDialog from "./CustomDialog";

function Todo() {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(0);

  const handleAddOpen = () => {
    setAddOpen(true);
  };

  const handleAddClose = () => {
    setAddOpen(false);
    setText("");
  };

  const handleEditOpen = index => {
    setEditIndex(index);
    setText(todos[index].text);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleChange = event => {
    const { value } = event.target;
    setText(value);
  };

  const addTodo = () => {
    if (text === "") return;
    let newTodo = {
      text: text,
      isCompleted: false
    };
    setTodos(prev => {
      return [...prev, newTodo];
    });
    setAddOpen(false);
    setText("");
  };

  const remove = index => {
    const copy = [...todos];
    copy.splice(index, 1);
    setTodos(copy);
    setText("");
  };

  const completed = index => {
    const copy = [...todos];
    copy[index].isCompleted = copy[index].isCompleted ? false : true;
    setTodos(copy);
  };

  const editTodo = () => {
    if (text === "") return;
    let copy = [...todos];
    copy[editIndex].text = text;
    setTodos(copy);
    setEditOpen(false);
    setText("");
  };

  const deleteAll = index => {
    const copy = [...todos];
    copy.splice(index, todos.length);
    setTodos(copy);
  };

  return (
    <>
      <Button
        onClick={handleAddOpen}
        color="success"
        variant="contained"
        startIcon={<AddIcon />}
        style={{ marginBottom: 10 }}
      >
        Add
      </Button>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Text</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Completed</TableCell>
              <TableCell align="right">Edit</TableCell>

              <TableCell onClick={deleteAll} align="center">
                <span style={{ cursor: "pointer", color: "blue" }}>
                  DELETE ALL
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((elem, index) => (
              <TableRow
                key={elem}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <p
                    style={
                      elem.isCompleted ? { textDecoration: "line-through" } : {}
                    }
                  >
                    {elem.text}
                  </p>
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => remove(index)} color="info">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => completed(index)} color="error">
                    <CheckIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => handleEditOpen(index)}
                    color="warning"
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog Add */}
      <CustomDialog
        addEdit={addTodo}
        open={addOpen}
        text={text}
        handleChange={handleChange}
        handleClose={handleAddClose}
        addEditTitle={"Добавление"}
        addEditText={"Добавить"}
      />

      {/* Dialog Edit */}
      <CustomDialog
        addEdit={editTodo}
        open={editOpen}
        text={text}
        handleChange={handleChange}
        handleClose={handleEditClose}
        addEditTitle={"Изменение"}
        addEditText={"Изменить"}
      />
    </>
  );
}

export default Todo;
