import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@mui/material";

function CustomDialog(props) {
  const {
    open,
    handleClose,
    text,
    handleChange,
    addEdit,
    addEditText,
    addEditTitle
  } = props;
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{addEditTitle}</DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleChange}
            value={text}
            label="Insert"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={addEdit} autoFocus>
            {addEditText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomDialog;
