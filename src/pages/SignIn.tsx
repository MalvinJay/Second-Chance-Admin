"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import AdminImg from "../assets/images/SecondChanceAdmin.jpg";
import ImgLogo from "/images/img_img60591.png";
import { Img } from "components";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import AXIOS_INSTANCE from "api/axios";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { setUser } from "store/UserSlicer/userSlice";
import Cookies from "js-cookie";
import { TAlertMsgProp } from "types/shared.type";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="www.secondchancetv.tv">
        Second Chance TV
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState<TAlertMsgProp>({
    msg: "",
    status: "success",
  });

  const handleClose = () => {
    setShowAlert(false);
    setAlertMsg({
      msg: "",
      status: "success",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const payload = {
      email_or_phone: data.get("email_or_phone"),
      password: data.get("password"),
    };

    setLoading(true);
    AXIOS_INSTANCE.post("/auth/users/login", payload)
      .then((res) => {
        const data = res.data;
        console.log("login response:", data);

        switch (res.status) {
          case 200:
            if (data) {
              const userData = data.data.user;
              userData.token = data.data.token;

              dispatch(setUser(userData));
              Cookies.set("token", data.data.token);
              navigate("/");
            }
            break;

          default:
            break;
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setAlertMsg({
          status: "error",
          msg: "Error logging in",
        });
        setShowAlert(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${AdminImg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
              <Img
                className="h-[46px] md:h-auto ml-8 md:ml-[0] mr-[93px] mt-[23px] object-cover w-[36%]"
                src={ImgLogo}
                alt="img60591"
              />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email_or_phone"
                label="Email Address or Phone"
                name="email_or_phone"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
              >
                Sign In
                {loading && (
                  <CircularProgress color="inherit" size={24} sx={{ ml: 1 }} />
                )}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar */}
      <Snackbar
        open={showAlert}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={handleClose}
          severity={alertMsg.status}
          sx={{ width: "100%" }}
        >
          {alertMsg.msg}
        </Alert>
      </Snackbar>
    </>
  );
}
