import React, { useState } from "react";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import {
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Box,
  Grid,
  Paper,
  Autocomplete,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { loginValidationSchema } from "../../utils/validations";
import { api } from "../../services/api";
import { API_ENDPOINTS } from "../../utils/apiEndpoints";
import { getDecrypted, getEncrypted } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  // color: theme.palette.text.secondary,
}));

const SearchFlight = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // const getFlightList=()=>{
  //   api.post(API_ENDPOINTS.SEARCH_FLIGHT_AIRPORT,)
  // }

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log({ values });
    // setIsLoading(true);
    // const encryp = getEncrypted(values);
    // console.log({ encryp });

    // api
    //   .post(API_ENDPOINTS.LOGIN, encryp)
    //   .then(({ data }) => {
    //     // console.log({ data: getDecrypted(data.response_data) });

    //     if (data?.main_data?.res_code === 201) {
    //       navigate(ROUTES.SEARCH_FLIGHT);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: handleSubmit,
  });

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4">Search Flight</Typography>
      {/* <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
          required
          // {...formik.getFieldProps("email")}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          label="Password"
          margin="normal"
          size="small"
          variant="outlined"
          type="text"
          required
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  disableRipple
                  // onClick={handleTogglePasswordVisibility}
                >
                  <VisibilityOff />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? "Please wait..." : "Submit"}
        </Button>
      </form> */}

      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  size="small"
                  options={top100Films}
                  // sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                  )}
                />
              </Item>
            </Grid>{" "}
            <Grid item xs={1}>
              <Item>xs=6 md=8</Item>
            </Grid>{" "}
            <Grid item xs={4}>
              <Item>xs=6 md=8</Item>
            </Grid>{" "}
            <Grid item xs={3}>
              <Item>xs=6 md=8</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid item xs={6} md={8}>
              <Item>xs=6 md=8</Item>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Container>
  );
};

export default SearchFlight;
