import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Typography from "@material-ui/core/Typography";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionType from "../../Constant/ActionType";
import useToggle from "../../CustomHook/useToggle";
import { DatePicker, MultiSelect, SelectItem, TextInput } from "../../Widgets";
import { useStyles } from "./styles";

const initialState = {
  productName: "",
  categories: [],
  productType: "",
  mfgDate: dayjs().format("DD-MMM-YYYY"),
};

const CreateProduct = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [showSnackbar, handleSnackbar] = useToggle(false);

  const [state, setState] = useState(initialState);

  const [isSubmitValid, setIsSubmitValid] = useState(false);

  const error = useSelector((state) => state.createProduct.error);
  const data = useSelector((state) => state.createProduct.data);

  const handleState = (e) => {
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleDate = (value) => {
    setState((state) => ({ ...state, mfgDate: value }));
  };

  const checkSubmitValidity = () => {
    let count = 0;
    console.log("count", count + 1);
    const { productName, categories, productType } = state;
    if (!!productName && categories.length > 0 && !!productType) {
      setIsSubmitValid(true);
    } else setIsSubmitValid(false);
  };

  useEffect(() => {
    checkSubmitValidity();
  }, [state]);

  useEffect(() => {
    if (!error && data.length > 0) {
      setState(initialState);
      handleSnackbar(true);
    }
  }, [data]);

  const onSubmit = () => {
    dispatch({ type: ActionType.ADD_DATA, payload: state });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Create Product
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
          {error && <span className={classes.errorMsg}>{error}</span>}{" "}
        </Grid>
        <Grid item xs={3}>
          <MultiSelect
            name="categories"
            value={state.categories}
            data={["Category 1", "Category 2", "Category 3"]}
            handleMultiSelect={handleState}
            className={classes.input}
            label="Categories"
          />
        </Grid>

        <Grid item xs={3}>
          <DatePicker
            className={classes.input}
            value={state.mfgDate}
            label="Mfg Date"
            onChange={handleDate}
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
      </Grid>
      <div className={classes.btn}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => onSubmit()}
          disabled={!isSubmitValid}
        >
          Save
        </Button>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => handleSnackbar(false)}
        message="Record Successfully created"
      />
    </div>
  );
};

export default CreateProduct;
