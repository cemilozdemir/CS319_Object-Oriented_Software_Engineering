import React, { useState } from "react";
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
import ReactPhoneInput from "react-phone-input-material-ui";
import { useNavigate } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";

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
import { cancelReservation } from "../../store/actions/reservation.actions.js";
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

function MyReservationCard({
    sportActivityName,
    sportCenterName,
    activityDay,
    img,
    timeInterval,
    session_id,
    user_id,
}) {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const dispatch = useDispatch();

    const handleCancellation = () => {
        setOpen(false);
        let data = {
            session_id: session_id,
            user_id: user_id,
        };
        dispatch(cancelReservation(data));
        setOpen2(true);
    };

    const currentState = useSelector((state) => {
        console.log(state);
        return state;
    });
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
                    <DialogContentText id="alert-dialog-slide-description">
                        You are about to cancel a {sportActivityName} session on{" "}
                        {sportCenterName} between {timeInterval} on{" "}
                        {activityDay}
                    </DialogContentText>
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
                            setOpen2(false);
                        }}
                        color="success"
                        variant="contained"
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
            <Card sx={{ maxWidth: 345, width: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt={sportActivityName}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {sportActivityName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {sportCenterName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {activityDay}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {timeInterval}
                        </Typography>
                        <Button
                            xs={{ p: 3 }}
                            onClick={() => {
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
        </>
    );
}

export default MyReservationCard;
