import React, { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Button,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import {
  Search as SearchIcon,
  Delete as DeleteIcon,
  FileCopy as FileCopyIcon,
} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { TextInput, MultiSelect, DatePicker, SelectItem } from "../../Widgets";
import { useStyles } from "./styles";
import { Grid } from "@material-ui/core";

const initialState = {
  productName: "",
  categories: [],
  productType: "",
};

const ProductList = () => {
  const classes = useStyles();

  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [state, setState] = useState(initialState);
  const data = useSelector((state) => state.createProduct.data);
  console.log("data", data);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //   const searchHandler = (event) => {
  //     setTerm(event.target.value);
  //   };

  const handleState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setProductData(data);
  }, [data]);

  const searchingFor = (data, key) => {
    if (!!state[key] && state[key].length > 0) {
      const filteredData = data.filter(
        (c) => c[key].toLowerCase().includes(state[key].toLowerCase()) || false
      );
      return filteredData;
    }
    return data;
  };

  //   useEffect(() => {
  //     term === ""
  //       ? setProductData(data)
  //       : setProductData(productData.filter(searchingFor(term)));
  //   }, [term]);

  const applyFilters = () => {
    let filteredData;
    filteredData = searchingFor(data, "productName");
    filteredData = searchingFor(filteredData, "productType");
    console.log("filteredData", filteredData);
    setProductData(filteredData);
  };

  const handleReset = () => {
    setProductData(data);
    setState(initialState);
  };

  return (
    <div className={classes.root}>
      <div className={classes.filter}>
        <Typography variant="h6" className={classes.title}>
          Filters
        </Typography>
        <Grid container spacing={4} className={classes.container}>
          <Grid item xs={3}>
            <TextInput
              label="Product Name"
              name="productName"
              onChange={handleState}
              className={classes.input}
              value={state.productName}
            />
          </Grid>

          <Grid item xs={3}>
            <SelectItem
              name="productType"
              value={state.productType}
              data={["Admin", "Staff", "Member"]}
              handleSelect={handleState}
              className={classes.input}
              label="Product Type"
            />
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" color="primary" onClick={applyFilters}>
              apply
            </Button>
            <Button variant="outlined" color="primary" onClick={handleReset}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">
                Product Name
              </TableCell>
              <TableCell component="th" scope="row">
                Mfg Date
              </TableCell>
              <TableCell component="th" scope="row">
                Product Type
              </TableCell>
              <TableCell component="th" scope="row">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? productData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : productData
            ).map((row) => (
              <TableRow key={row.productName}>
                <TableCell component="th" scope="row">
                  {row.productName}
                </TableCell>
                <TableCell style={{ width: 160 }}>
                  {row.mfgDate || ""}
                </TableCell>
                <TableCell style={{ width: 160 }}>
                  {row.productType || ""}
                </TableCell>
                <TableCell style={{ width: 160 }}>
                  <SearchIcon />
                  <DeleteIcon />
                  <FileCopyIcon />
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 50 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={productData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductList;
