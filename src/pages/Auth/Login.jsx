import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { loginValidationSchema } from "../../utils/validations";
import { api } from "../../services/api";
import { API_ENDPOINTS } from "../../utils/apiEndpoints";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    setIsLoading(true);
    setError("");

    api
      .post(API_ENDPOINTS.LOGIN, values)
      .then(({ data }) => {
        if (data?.main_data?.res_code === 200) {
          navigate(ROUTES.SEARCH_FLIGHT);
        } else {
          setError(data?.main_data?.response);
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,
    onSubmit: handleSubmit,
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4">Login</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
          required
          {...formik.getFieldProps("email")}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          label="Password"
          fullWidth
          margin="normal"
          variant="outlined"
          type={`${showPassword ? "text" : "password"}`}
          required
          {...formik.getFieldProps("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  disableRipple
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {error && (
          <Typography variant="caption" color="red">
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? "Please wait..." : "Log In"}
        </Button>
      </form>
    </Container>
  );
};

export default Login;
