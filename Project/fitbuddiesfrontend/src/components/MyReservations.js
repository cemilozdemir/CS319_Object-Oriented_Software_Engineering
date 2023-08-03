import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../store/actions/login.actions.js";
import {
    bringSportActivityTimes,
    reserve,
    bringMyReservations,
} from "../store/actions/reservation.actions.js";
import ReactPhoneInput from "react-phone-input-material-ui";
import { useNavigate } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
    stepConnectorClasses,
} from "@mui/material/StepConnector";

import MyReservationCard from "./MyReservations/MyReservationCard";
import * as SportHalls from "../constants/SportHallsConstants";
import * as SportActivities from "../constants/SportActivityConstants";
import { SportActivityImages } from "../images/SportActivityImages";
import { SportHallsImages } from "../images/SportHallsImages";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { cancelReservation } from "./../store/actions/reservation.actions.js";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
const theme = createTheme();

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function MyReservations() {
    const [values, setValues] = useState({
        choosedReservation: {},
    });
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const sportActitiviesLeftCapacities = useSelector((state) => {
        return state.reservations.bringedSportActivitiesLeftCapacities;
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        //dispatch(userRegister(user, navigate));
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const currentUser = useSelector((state) => {
        if (state.login.user != null) return state.login.user;
        return null;
    });

    const currentState = useSelector((state) => {
        console.log(state);
        return state;
    });

    function zeroPad(num, places) {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }
    useEffect(() => {
        if (currentState.login.user == null) return;
        console.log("dispatch from my reservations");
        dispatch(
            bringMyReservations({ user_id: currentState.login.user.user_id })
        );
    }, [currentState.login.user]);
    const handleCancellation = () => {
        setOpen(false);
        let data = {
            session_id: values.choosedReservation.session.session_id,
            user_id: currentState.login.user.user_id,
        };
        dispatch(cancelReservation(data));
        setOpen2(true);
    };

    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Do you approve the reservation?"}</DialogTitle>
                <DialogContent>
                    {Object.keys(values.choosedReservation).length == 0 ? (
                        <>
                            <CircularProgress />
                        </>
                    ) : (
                        <DialogContentText id="alert-dialog-slide-description">
                            You are about to cancel a{" "}
                            {values.choosedReservation.sportActivity.name}{" "}
                            session on{" "}
                            {values.choosedReservation.sportCenter.name} between{" "}
                            {values.choosedReservation.session.time_interval} on{" "}
                            {values.choosedReservation.session.activity_day}
                        </DialogContentText>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="error"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            handleCancellation();
                        }}
                        color="success"
                        variant="contained"
                    >
                        Cancel Reservation
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={open2}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose2}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Response from server"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {"msg" in
                        currentState.reservations
                            .cancelReservationServerResponse ? (
                            currentState.reservations
                                .cancelReservationServerResponse.msg
                        ) : (
                            <CircularProgress />
                        )}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            dispatch(
                                bringMyReservations({
                                    user_id: currentState.login.user.user_id,
                                })
                            );
                            setOpen2(false);
                        }}
                        color="success"
                        variant="contained"
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
            <ThemeProvider theme={theme}>
                <h1 style={{ textAlign: "center", marginTop: "20px" }}>
                    My Reservations
                </h1>
                <Box
                    xs={{ mt: 10 }}
                    style={{
                        margin: "auto",
                        marginTop: "50px",
                        maxWidth: "1200px",
                    }}
                >
                    <Grid
                        container
                        spacing={4}
                        alignItems="center"
                        justifyContent="center"
                    >
                        {Object.keys(
                            currentState.reservations.myReservations
                        ).map((key, index) => {
                            let reservation =
                                currentState.reservations.myReservations[key];
                            return (
                                <>
                                    <Grid
                                        item
                                        key={reservation.session.session_id}
                                    >
                                        <span>
                                            <Card
                                                sx={{
                                                    maxWidth: 345,
                                                    width: 345,
                                                }}
                                            >
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="140"
                                                        image={
                                                            SportActivityImages[
                                                                reservation
                                                                    .sportActivity
                                                                    .sport_activity_id
                                                            ]
                                                        }
                                                        alt={
                                                            reservation
                                                                .sportActivity
                                                                .name
                                                        }
                                                    />
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h5"
                                                            component="div"
                                                        >
                                                            {
                                                                reservation
                                                                    .sportActivity
                                                                    .name
                                                            }
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary"
                                                        >
                                                            {
                                                                reservation
                                                                    .sportCenter
                                                                    .name
                                                            }
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary"
                                                        >
                                                            {
                                                                reservation
                                                                    .session
                                                                    .activity_day
                                                            }
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary"
                                                        >
                                                            {
                                                                reservation
                                                                    .session
                                                                    .time_interval
                                                            }
                                                        </Typography>
                                                        <Button
                                                            xs={{ p: 3 }}
                                                            onClick={() => {
                                                                setValues({
                                                                    ...values,
                                                                    ["choosedReservation"]:
                                                                        reservation,
                                                                });
                                                                setOpen(true);
                                                            }}
                                                            variant="contained"
                                                            color="error"
                                                        >
                                                            Cancel
                                                        </Button>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </span>
                                    </Grid>
                                </>
                            );
                        })}
                    </Grid>
                </Box>
            </ThemeProvider>
        </>
    );
}

export default MyReservations;
