import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Pagination,
  Stack,
  TextField,
} from "@mui/material";

const FilterBar = () => {
  const [option, setoption] = useState("");
  const [openPrice, setOpenPrice] = useState(false);
  const [openProperty, setOpenProperty] = useState(false);
  const [homeType, setHomeType] = useState("");

  const homeTypeClickOpen = () => {
    setHomeType(true);
  };

  const homeTypeClickClose = () => {
    setHomeType(false);
  };

  const handlePriceClickOpen = () => {
    setOpenPrice(true);
  };

  const handlePropertyClickOpen = () => {
    setOpenProperty(true);
  };

  const handlePriceClose = (event, reason) => {
    setOpenPrice(false);
  };

  const handlePropertyClose = () => {
    setOpenProperty(false);
  };

  const handleChange = (event) => {
    setoption(event.target.value);
  };

  return (
    <div className="flex items-center justify-start">
      <FormControl sx={{ mt: 3, minWidth: 105 }} size="small">
        <InputLabel id="demo-select-small-label">Status</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={option}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value="for-ale">For sale</MenuItem>
          <MenuItem value="for-rent">For rent</MenuItem>
          <MenuItem value="sold">sold</MenuItem>
        </Select>
      </FormControl>

      <div className="ml-2">
        <Button
          className="h-10"
          variant="outlined"
          color="inherit"
          onClick={handlePriceClickOpen}
          sx={{ mt: 3 }}
        >
          Price
        </Button>

        <Dialog
          disableEscapeKeyDown
          open={openPrice}
          onClose={handlePriceClose}
          sx={{ width: "100%" }}
        >
          <DialogTitle>Price Range</DialogTitle>
          <DialogContent sx={{ width: "100%" }}>
            <Box
              component="form"
              sx={{ flexWrap: "wrap" }}
              className="items-center flex"
            >
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <TextField id="outlined-select-currency" select label="Min">
                  <MenuItem value={1542}>{`$-${1542}`}</MenuItem>
                  <MenuItem value={845}>{`$-${845}`}</MenuItem>
                  <MenuItem value={239}>{`$-${239}`}</MenuItem>
                  <MenuItem value={859}>{`$-${859}`}</MenuItem>
                  <MenuItem value={487}>{`$-${487}`}</MenuItem>
                </TextField>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <TextField id="outlined-select-currency" select label="Max">
                  <MenuItem value={1542}>{`$-${1542}`}</MenuItem>
                  <MenuItem value={845}>{`$-${845}`}</MenuItem>
                  <MenuItem value={239}>{`$-${239}`}</MenuItem>
                  <MenuItem value={859}>{`$-${859}`}</MenuItem>
                  <MenuItem value={487}>{`$-${487}`}</MenuItem>
                </TextField>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePriceClose}>Cancel</Button>
            <Button onClick={handlePriceClose}>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>

      <div className="ml-2">
        <Button
          className="h-10"
          variant="outlined"
          color="inherit"
          onClick={handlePropertyClickOpen}
          sx={{ mt: 3 }}
        >
          Props
        </Button>

        <Dialog
          //   disableEscapeKeyDown
          open={openProperty}
          onClose={handlePropertyClose}
          sx={{ width: "100%" }}
        >
          <DialogTitle>Number of Bedrooms</DialogTitle>
          <DialogContent sx={{ width: "100%" }}>
            <Box
              component="form"
              sx={{ flexWrap: "wrap" }}
              className="items-center flex"
            >
              <Stack spacing={2}>
                <b>Bedrooms</b>
                <Pagination count={5} variant="outlined" shape="rounded" />
              </Stack>
            </Box>
          </DialogContent>

          <DialogTitle sx={{ bgcolor: "primary" }}>
            Number of Bathrooms
          </DialogTitle>
          <DialogContent sx={{ width: "100%" }}>
            <Box
              component="form"
              sx={{ flexWrap: "wrap" }}
              className="items-center flex"
            >
              <Stack spacing={2}>
                <b>Bathrooms</b>
                <Pagination count={5} variant="outlined" shape="rounded" />
              </Stack>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePropertyClose}>Cancel</Button>
            <Button onClick={handlePropertyClose}>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>

      <div className="ml-2">
        <Button
          className="h-10"
          variant="outlined"
          color="inherit"
          onClick={homeTypeClickOpen}
          sx={{ mt: 3 }}
        >
          type
        </Button>

        <Dialog
          open={homeType}
          onClose={homeTypeClickClose}
          sx={{ width: "100%" }}
        >
          <DialogTitle>Home Type</DialogTitle>
          <DialogContent sx={{ width: "100%" }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Houses"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Apartments/Condos/Co-ops"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Townhomes"
              />
            </FormGroup>
          </DialogContent>

          <DialogTitle>Space</DialogTitle>
          <DialogContent sx={{ width: "100%" }}>
            <Box
              component="form"
              sx={{ flexWrap: "wrap" }}
              className="items-center flex"
            >
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Entire place"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Room"
                />
              </FormGroup>
            </Box>
          </DialogContent>

          <DialogActions>
            <Button onClick={homeTypeClickClose}>Cancel</Button>
            <Button onClick={homeTypeClickClose}>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default FilterBar;
