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

import SportsHallCard from "./MakeReservation/SportsHallCard";
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

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
const theme = createTheme();

const steps = ["Sport Center", "Sport Activity", "Reservation Date"];
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
        backgroundImage:
            "linear-gradient( 136deg, rgb(150,113,255) 0%, rgb(100,113,255) 50%, rgb(50,113,255) 100%)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
        backgroundImage:
            "linear-gradient( 136deg, rgb(150,113,255) 0%, rgb(100,113,255) 50%, rgb(50,113,255) 100%)",
    }),
}));
function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <SettingsIcon />,
        2: <GroupAddIcon />,
        3: <VideoLabelIcon />,
    };

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}
const sports_halls = [
    {
        name: "Main Sports Hall",
        description:
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        id: SportHalls.MAIN_SPORTS_HALL,
        img: SportHallsImages[SportHalls.MAIN_SPORTS_HALL],
        opening_hour: "08.30",
        closing_hour: "22.00",
        session_count: 9,
        duration: 75,
        disinfectionDuration: 15,
        sport_activities: [
            {
                name: SportActivities.BADMINTON.name,
                capacity: SportActivities.BADMINTON.capacity,
                img: SportActivityImages.BADMINTON,
            },
            {
                name: SportActivities.BASKETBALL.name,
                capacity: SportActivities.BASKETBALL.capacity,
                img: SportActivityImages.BASKETBALL,
            },
            {
                name: SportActivities.VOLLEYBALL.name,
                capacity: SportActivities.VOLLEYBALL.capacity,
                img: SportActivityImages.VOLLEYBALL,
            },
            {
                name: SportActivities.GYM.name,
                img: SportActivityImages.GYM,
                capacity: 10,
            },
            {
                name: SportActivities.GROUP_EXERCICES.name,
                capacity: SportActivities.GROUP_EXERCICES.capacity,
                img: SportActivityImages.GROUP_EXERCICES,
            },
            {
                name: SportActivities.MULTI_PURPOSE_PROGRAM.name,
                capacity: SportActivities.MULTI_PURPOSE_PROGRAM.capacity,
                img: SportActivityImages.MULTI_PURPOSE_PROGRAM,
            },
            {
                name: SportActivities.TABLE_TENNIS.name,
                capacity: SportActivities.TABLE_TENNIS.capacity,
                img: SportActivityImages.TABLE_TENNIS,
            },
        ],
    },

    {
        name: "East Sports Hall",
        description:
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        id: SportHalls.EAST_SPORTS_HALL,
        img: SportHallsImages[SportHalls.EAST_SPORTS_HALL],
        opening_hour: "08.30",
        session_count: 10,
        closing_hour: "23.00",
        duration: 75,
        disinfectionDuration: 15,
        sport_activities: [
            {
                name: SportActivities.BADMINTON.name,
                capacity: SportActivities.BADMINTON.capacity,
                img: SportActivityImages.BADMINTON,
            },
            {
                name: SportActivities.BASKETBALL.name,
                capacity: SportActivities.BASKETBALL.capacity,
                img: SportActivityImages.BASKETBALL,
            },
            {
                name: SportActivities.VOLLEYBALL.name,
                capacity: SportActivities.VOLLEYBALL.capacity,
                img: SportActivityImages.VOLLEYBALL,
            },
            {
                name: SportActivities.GYM.name,
                capacity: 10,
                img: SportActivityImages.GYM,
            },
            {
                name: SportActivities.TABLE_TENNIS.name,
                capacity: SportActivities.TABLE_TENNIS.capacity,
                img: SportActivityImages.TABLE_TENNIS,
            },
        ],
    },
    {
        name: "East Campus Open Air Facilities",
        description:
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        id: SportHalls.EAST_OUTDOOR_SPORTS_FACILITIES,
        img: SportHallsImages[SportHalls.EAST_OUTDOOR_SPORTS_FACILITIES],
        opening_hour: "08.30",
        closing_hour: "23.00",
        session_count: 9,
        duration: 75,
        disinfectionDuration: 15,
        sport_activities: [
            {
                name: SportActivities.OPEN_AIR_BASKETBALL.name,
                capacity: SportActivities.OPEN_AIR_BASKETBALL.capacity,
                img: SportActivityImages.OPEN_AIR_BASKETBALL,
            },
            {
                name: SportActivities.OPEN_AIR_VOLLEYBALL.name,
                capacity: SportActivities.OPEN_AIR_VOLLEYBALL.capacity,
                img: SportActivityImages.OPEN_AIR_VOLLEYBALL,
            },
            {
                name: SportActivities.MINI_FOOTBALL.name,
                capacity: SportActivities.MINI_FOOTBALL.capacity,
                img: SportActivityImages.MINI_FOOTBALL,
            },
        ],
    },
    {
        name: "Main Campus Open Air Facilities",
        description:
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        id: SportHalls.MAIN_OUTDOOR_SPORTS_FACILITES,
        img: SportHallsImages[SportHalls.MAIN_OUTDOOR_SPORTS_FACILITES],
        opening_hour: "08.30",
        session_count: 9,
        closing_hour: "23.00",
        duration: 75,
        disinfectionDuration: 15,
        sport_activities: [
            {
                name: SportActivities.INDOOR_TENNIS.name,
                capacity: SportActivities.INDOOR_TENNIS.capacity,
                img: SportActivityImages.INDOOR_TENNIS,
            },
            {
                name: SportActivities.MINI_FOOTBALL.name,
                capacity: SportActivities.MINI_FOOTBALL.capacity,
                img: SportActivityImages.MINI_FOOTBALL,
            },
            {
                name: SportActivities.OPEN_AIR_BASKETBALL.name,
                capacity: SportActivities.OPEN_AIR_BASKETBALL.capacity,
                img: SportActivityImages.OPEN_AIR_BASKETBALL,
            },
            {
                name: SportActivities.OPEN_AIR_VOLLEYBALL.name,
                capacity: SportActivities.OPEN_AIR_VOLLEYBALL.capacity,
                img: SportActivityImages.OPEN_AIR_VOLLEYBALL,
            },
            {
                name: SportActivities.OUTDOOR_TENNIS.name,
                capacity: SportActivities.OUTDOOR_TENNIS.capacity,
                img: SportActivityImages.OUTDOOR_TENNIS,
            },
            {
                name: SportActivities.OLYMPIC_GRASS_FOOTBALL.name,
                capacity: SportActivities.OLYMPIC_GRASS_FOOTBALL.capacity,
                img: SportActivityImages.OLYMPIC_GRASS_FOOTBALL,
            },
            {
                name: SportActivities.SKATE_PARK.name,
                capacity: SportActivities.SKATE_PARK.capacity,
                img: SportActivityImages.SKATE_PARK,
            },
            {
                name: SportActivities.CLIMBING_WALL.name,
                capacity: SportActivities.CLIMBING_WALL.capacity,
                img: SportActivityImages.CLIMBING_WALL,
            },
        ],
    },
    {
        name: "Dormitories Sports hall",
        description:
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        id: SportHalls.DORMITORIES_SPORTS_HALL,
        img: SportHallsImages[SportHalls.DORMITORIES_SPORTS_HALL],
        opening_hour: "08.30",
        closing_hour: "23.00",
        session_count: 9,
        duration: 75,
        disinfectionDuration: 15,
        sport_activities: [
            {
                name: SportActivities.ARCH_POLY.name,
                capacity: SportActivities.ARCH_POLY.capacity,
                img: SportActivityImages.ARCH_POLY,
            },
            {
                name: SportActivities.BASKETBALL.name,
                capacity: SportActivities.BASKETBALL.capacity,
                img: SportActivityImages.BASKETBALL,
            },
            {
                name: SportActivities.VOLLEYBALL.name,
                capacity: SportActivities.VOLLEYBALL.capacity,
                img: SportActivityImages.VOLLEYBALL,
            },
            {
                name: SportActivities.GYM.name,
                img: SportActivityImages.GYM,
                capacity: SportActivities.GYM.capacity,
            },
            {
                name: SportActivities.GROUP_EXERCICES.name,
                capacity: SportActivities.GROUP_EXERCICES.capacity,
                img: SportActivityImages.GROUP_EXERCICES,
            },
            {
                name: SportActivities.MARTIAL_ARTS.name,
                capacity: SportActivities.MARTIAL_ARTS.capacity,
                img: SportActivityImages.MARTIAL_ARTS,
            },
            {
                name: SportActivities.SQUASH.name,
                img: SportActivityImages.SQUASH,
                capacity: SportActivities.SQUASH.capacity,
            },
            {
                name: SportActivities.SWIMMING_POOL.name,
                capacity: SportActivities.SWIMMING_POOL.capacity,
                img: SportActivityImages.SWIMMING_POOL,
            },
            {
                name: SportActivities.TABLE_TENNIS.name,
                capacity: SportActivities.TABLE_TENNIS.capacity,
                img: SportActivityImages.TABLE_TENNIS,
            },
            {
                name: SportActivities.WALKING_RUNNING.name,
                img: SportActivityImages.WALKING_RUNNING,
            },
        ],
    },
];

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function MakeReservation() {
    const [values, setValues] = useState({
        choosedSportCenter: {},
        choosedSportActivity: {},
        timeIntervals: [],
        choosedDateAndSlot: {},
        days: [],
    });
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleClose2 = () => {
        handleBringSportActivityTimes();
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

    const handleReserve = () => {
        let data;
        data = {
            day: values.choosedDateAndSlot.date,
            slot: values.choosedDateAndSlot.slot,
            sport_activity_name: values.choosedSportActivity.name,
            sport_center_id: values.choosedSportCenter.id,
            student_user_id: currentUser.user_id,
            time_interval: values.choosedDateAndSlot.timeInterval,
        };
        console.log(data);
        dispatch(reserve(data, navigate));
        setOpen(false);
        setOpen2(true);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleChooseDateAndSlot = (date, slot, timeInterval) => {
        let tempChoosedDateAndSlot = {
            date: date,
            slot: slot,
            timeInterval: timeInterval,
        };
        setValues({
            ...values,
            ["choosedDateAndSlot"]: tempChoosedDateAndSlot,
        });
    };

    useEffect(() => {
        if (
            Object.keys(values.choosedDateAndSlot) == 0 ||
            values.choosedDateAndSlot === undefined
        )
            return;
        handleClickOpen();
    }, [values.choosedDateAndSlot]);

    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                  steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        if (step != 1 && values.choosedSportCenter == "") {
        } else {
            setActiveStep(step);
        }
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    useEffect(() => {
        handleBringSportActivityTimes();
    }, [values.choosedSportActivity]);

    function formatDate(date) {
        var d = date;
        let month = "" + (d.getMonth() + 1);
        let day = "" + d.getDate();
        let year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
    }

    function formatDateDDMMYYY(date) {
        var d = date;
        let month = "" + (d.getMonth() + 1);
        let day = "" + d.getDate();
        let year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [day, month, year].join("/");
    }

    function getDay(d) {
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        let day_index = d.getDay();
        return days[day_index];
    }
    function setDays() {
        let days = [];
        for (let i = 0; i < 3; i++) {
            let d = new Date(Date.now() + i * 86400000);
            days.push({
                date: formatDate(d),
                dateString: getDay(d) + " " + formatDateDDMMYYY(d),
            });
        }
        setValues({ ...values, ["days"]: days });
    }
    useEffect(() => {
        if (
            Object.keys(values.timeIntervals) == 0 ||
            values.timeIntervals === undefined
        )
            return;
        setDays();
    }, [values.timeIntervals]);

    useEffect(() => {
        if (Object.keys(values.days).length == 0 || values.days === undefined) {
            return;
        }
        dispatch(
            bringSportActivityTimes({
                sport_center_id: values.choosedSportCenter.id,
                sport_activity_name: values.choosedSportActivity.name,
                sport_activity_day: values.days,
                slot_count: values.choosedSportCenter.session_count,
            })
        );
    }, [values.days]);

    const currentUser = useSelector((state) => {
        if (state.login.user != null) return state.login.user;
        return null;
    });

    const currentState = useSelector((state) => {
        console.log(state);
        return state;
    });

    const handleBringSportActivityTimes = () => {
        if (
            Object.keys(values.choosedSportCenter).length == 0 ||
            values.choosedSportCenter === undefined
        ) {
            return;
        }
        // console.log(
        //     "handleBringSportActivityTime: " +
        //         values.choosedSportActivity.id +
        //         "   " +
        //         values.choosedSportCenter.name
        // );

        let count = 1;
        let getHoursAndMinutes = (time) => {
            let hour = parseInt(time.substring(0, 2));
            let minutes = parseInt(time.substring(3, 5));
            // console.log(hour, minutes);
            return { hour: hour, minutes: minutes };
        };
        let startTime = getHoursAndMinutes(
            values.choosedSportCenter.opening_hour
        );
        let times = [];
        while (count < values.choosedSportCenter.session_count + 1) {
            // console.log(startTime);
            let endTime = startTime;
            times.push({
                startTime: {
                    hour: startTime.hour,
                    minutes: startTime.minutes,
                },
                slot: count,
            });
            endTime.minutes += values.choosedSportCenter.duration;
            endTime.hour += Math.floor(endTime.minutes / 60);
            endTime.minutes = endTime.minutes % 60;
            times[times.length - 1].endTime = {
                hour: endTime.hour,
                minutes: endTime.minutes,
            };
            endTime.minutes += values.choosedSportCenter.disinfectionDuration;
            endTime.hour += Math.floor(endTime.minutes / 60);
            endTime.minutes = endTime.minutes % 60;
            startTime = endTime;

            count++;
        }
        setValues({ ...values, ["timeIntervals"]: times });
        // console.log(times);
    };
    const handleChooseSportCenter = (sport_hall) => {
        setValues({ ...values, ["choosedSportCenter"]: sport_hall });
        setTimeout(() => {
            handleNext();
        }, 400);
    };
    const handleChooseSportActivity = (sport_activity) => {
        setValues({ ...values, ["choosedSportActivity"]: sport_activity });
        setTimeout(() => {
            handleNext();
        }, 400);
    };
    function zeroPad(num, places) {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }
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
                        You are about to reserve a{" "}
                        {values.choosedSportActivity.name} session on{" "}
                        {values.choosedSportCenter.name} between{" "}
                        {values.choosedDateAndSlot.timeInterval} on{" "}
                        {values.choosedDateAndSlot.date}
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
                            handleReserve();
                        }}
                        color="success"
                        variant="contained"
                    >
                        Reserve
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
                        currentState.reservations.reserveServerResponse ? (
                            currentState.reservations.reserveServerResponse.msg
                        ) : (
                            <CircularProgress />
                        )}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose2}
                        variant="contained"
                        color="error"
                    >
                        Stay here
                    </Button>
                    <Button
                        onClick={() => {
                            navigate("/myReservations");
                        }}
                        color="success"
                        variant="contained"
                    >
                        Go to my reservations
                    </Button>
                </DialogActions>
            </Dialog>
            <ThemeProvider theme={theme}>
                <h1 style={{ textAlign: "center", marginTop: "20px" }}>
                    Make Reservation
                </h1>
                <Stack sx={{ width: "100%", mt: 5 }} spacing={4}>
                    <Stepper
                        alternativeLabel
                        activeStep={activeStep}
                        connector={<ColorlibConnector />}
                    >
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel
                                    StepIconComponent={ColorlibStepIcon}
                                    onClick={handleStep(index)}
                                >
                                    <Button onClick={handleStep(index)}>
                                        {label}
                                    </Button>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Stack>

                <Box
                    xs={{ mt: 10 }}
                    style={{
                        margin: "auto",
                        marginTop: "50px",
                        maxWidth: "1200px",
                    }}
                >
                    {activeStep == 0 ? (
                        <>
                            <h2
                                style={{
                                    textAlign: "center",
                                    marginBottom: "20px",
                                }}
                            >
                                Choose a Sport Center
                            </h2>
                            <Grid
                                container
                                spacing={4}
                                alignItems="center"
                                justifyContent="center"
                            >
                                {sports_halls.map((sport_hall) => {
                                    return (
                                        <>
                                            <Grid item key={sport_hall.name}>
                                                <span
                                                    value={sport_hall.id}
                                                    onClick={() => {
                                                        handleChooseSportCenter(
                                                            sport_hall
                                                        );
                                                    }}
                                                >
                                                    <SportsHallCard
                                                        style={{
                                                            height: "100%",
                                                        }}
                                                        name={sport_hall.name}
                                                        description={
                                                            sport_hall.description
                                                        }
                                                        img={sport_hall.img}
                                                    />
                                                </span>
                                            </Grid>
                                        </>
                                    );
                                })}
                            </Grid>
                        </>
                    ) : (
                        <></>
                    )}
                    {activeStep == 1 ? (
                        <>
                            <h2
                                style={{
                                    textAlign: "center",
                                    marginBottom: "20px",
                                }}
                            >
                                Choosed Sport Center:{" "}
                                {values.choosedSportCenter.name}
                            </h2>
                            <Grid
                                container
                                spacing={4}
                                alignItems="center"
                                justifyContent="center"
                            >
                                {values.choosedSportCenter.sport_activities.map(
                                    (sport_activity) => {
                                        return (
                                            <Grid
                                                item
                                                key={sport_activity.name}
                                            >
                                                <span
                                                    value={sport_activity.id}
                                                    onClick={() => {
                                                        handleChooseSportActivity(
                                                            sport_activity
                                                        );
                                                    }}
                                                >
                                                    <SportsHallCard
                                                        style={{
                                                            height: "100%",
                                                        }}
                                                        name={
                                                            sport_activity.name
                                                        }
                                                        description={""}
                                                        img={sport_activity.img}
                                                    />
                                                </span>
                                            </Grid>
                                        );
                                    }
                                )}
                            </Grid>
                        </>
                    ) : (
                        <></>
                    )}

                    {activeStep == 2 ? (
                        <>
                            <h2
                                style={{
                                    textAlign: "center",
                                    marginBottom: "20px",
                                }}
                            >
                                Choosed Sport Center:{" "}
                                {values.choosedSportCenter.name}
                            </h2>
                            <Grid
                                container
                                spacing={4}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Grid
                                    item
                                    key={values.choosedSportActivity.name}
                                >
                                    <span
                                        value={values.choosedSportActivity.id}
                                        onClick={() => {}}
                                    >
                                        <SportsHallCard
                                            style={{ height: "100%" }}
                                            name={
                                                values.choosedSportActivity.name
                                            }
                                            description={""}
                                            img={
                                                values.choosedSportActivity.img
                                            }
                                        />
                                    </span>
                                </Grid>
                            </Grid>

                            {values.timeIntervals.length == -1 ? (
                                <>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            textAlign: "center",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "auto",
                                            mt: 10,
                                            position: "absolute",
                                            left: "50%",
                                            top: "50%",
                                            transform: "translate(-50%, -50%)",
                                        }}
                                    >
                                        <CircularProgress
                                            xs={{ textAlign: "center" }}
                                        />
                                    </Box>
                                </>
                            ) : (
                                <>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            textAlign: "center",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "auto",
                                            mt: 5,
                                            mb: 5,
                                        }}
                                    >
                                        <TableContainer
                                            sx={{
                                                minWidth: 650,
                                                maxWidth: 800,
                                                justifyContent: "center",
                                                textAlign: "center",
                                            }}
                                            component={Paper}
                                        >
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            {/* {zeroPad( el .startTime .hour, 2)} .  {zeroPad( el .startTime .minutes, 2)} - {zeroPad( el .endTime .hour, 2)} .  {zeroPad( el .endTime .minutes, 2)} */}
                                                        </TableCell>
                                                        {values.days.map(
                                                            (el) => {
                                                                return (
                                                                    <>
                                                                        <TableCell
                                                                            key={
                                                                                el
                                                                            }
                                                                        >
                                                                            {/* {zeroPad( el .startTime .hour, 2)} .  {zeroPad( el .startTime .minutes, 2)} - {zeroPad( el .endTime .hour, 2)} .  {zeroPad( el .endTime .minutes, 2)} */}
                                                                            {
                                                                                el.dateString
                                                                            }
                                                                        </TableCell>
                                                                    </>
                                                                );
                                                            }
                                                        )}
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {values.timeIntervals.map(
                                                        (el, index) => {
                                                            return (
                                                                <>
                                                                    <TableRow
                                                                        key={
                                                                            el.slot
                                                                        }
                                                                        sx={{
                                                                            "&:last-child td, &:last-child th":
                                                                                {
                                                                                    border: 0,
                                                                                },
                                                                        }}
                                                                    >
                                                                        <TableCell>
                                                                            {zeroPad(
                                                                                el
                                                                                    .startTime
                                                                                    .hour,
                                                                                2
                                                                            )}
                                                                            {""}
                                                                            .
                                                                            {""}
                                                                            {zeroPad(
                                                                                el
                                                                                    .startTime
                                                                                    .minutes,
                                                                                2
                                                                            )}{" "}
                                                                            -{" "}
                                                                            {zeroPad(
                                                                                el
                                                                                    .endTime
                                                                                    .hour,
                                                                                2
                                                                            )}
                                                                            {""}
                                                                            .
                                                                            {""}
                                                                            {zeroPad(
                                                                                el
                                                                                    .endTime
                                                                                    .minutes,
                                                                                2
                                                                            )}
                                                                        </TableCell>
                                                                        {values.days.map(
                                                                            (
                                                                                elDay,
                                                                                index2
                                                                            ) => {
                                                                                return (
                                                                                    <>
                                                                                        <TableCell
                                                                                            key={
                                                                                                elDay +
                                                                                                index2
                                                                                            }
                                                                                        >
                                                                                            <Button
                                                                                                variant="contained"
                                                                                                onClick={() => {
                                                                                                    handleChooseDateAndSlot(
                                                                                                        values
                                                                                                            .days[
                                                                                                            index2
                                                                                                        ]
                                                                                                            .date,
                                                                                                        index +
                                                                                                            1,
                                                                                                        zeroPad(
                                                                                                            el
                                                                                                                .startTime
                                                                                                                .hour,
                                                                                                            2
                                                                                                        ) +
                                                                                                            "." +
                                                                                                            zeroPad(
                                                                                                                el
                                                                                                                    .startTime
                                                                                                                    .minutes,
                                                                                                                2
                                                                                                            ) +
                                                                                                            "-" +
                                                                                                            zeroPad(
                                                                                                                el
                                                                                                                    .endTime
                                                                                                                    .hour,
                                                                                                                2
                                                                                                            ) +
                                                                                                            "." +
                                                                                                            zeroPad(
                                                                                                                el
                                                                                                                    .endTime
                                                                                                                    .minutes,
                                                                                                                2
                                                                                                            )
                                                                                                    );
                                                                                                    handleClickOpen();
                                                                                                }}
                                                                                                disabled={
                                                                                                    values
                                                                                                        .days[
                                                                                                        index2
                                                                                                    ]
                                                                                                        .date +
                                                                                                        "#" +
                                                                                                        (index +
                                                                                                            1) in
                                                                                                    sportActitiviesLeftCapacities
                                                                                                        ? sportActitiviesLeftCapacities[
                                                                                                              values
                                                                                                                  .days[
                                                                                                                  index2
                                                                                                              ]
                                                                                                                  .date +
                                                                                                                  "#" +
                                                                                                                  (index +
                                                                                                                      1)
                                                                                                          ] >=
                                                                                                          values
                                                                                                              .choosedSportActivity
                                                                                                              .capacity
                                                                                                        : true
                                                                                                }
                                                                                            >
                                                                                                {values
                                                                                                    .days[
                                                                                                    index2
                                                                                                ]
                                                                                                    .date +
                                                                                                    "#" +
                                                                                                    (index +
                                                                                                        1) in
                                                                                                sportActitiviesLeftCapacities ? (
                                                                                                    sportActitiviesLeftCapacities[
                                                                                                        values
                                                                                                            .days[
                                                                                                            index2
                                                                                                        ]
                                                                                                            .date +
                                                                                                            "#" +
                                                                                                            (index +
                                                                                                                1)
                                                                                                    ]
                                                                                                ) : (
                                                                                                    <CircularProgress
                                                                                                        xs={{
                                                                                                            textAlign:
                                                                                                                "center",
                                                                                                        }}
                                                                                                        size="14px"
                                                                                                        style={{
                                                                                                            color: "yellow",
                                                                                                        }}
                                                                                                    />
                                                                                                )}

                                                                                                /
                                                                                                {
                                                                                                    ""
                                                                                                }
                                                                                                {
                                                                                                    values
                                                                                                        .choosedSportActivity
                                                                                                        .capacity
                                                                                                }
                                                                                            </Button>
                                                                                        </TableCell>
                                                                                    </>
                                                                                );
                                                                            }
                                                                        )}

                                                                        {/* <TableCell>
                                                                        <Button
                                                                            variant="contained"
                                                                            onClick={
                                                                                null
                                                                            }
                                                                        >
                                                                            {values
                                                                                .days[2]
                                                                                .date +
                                                                                "#" +
                                                                                (index +
                                                                                    1) in
                                                                            sportActitiviesLeftCapacities ? (
                                                                                sportActitiviesLeftCapacities[
                                                                                    values
                                                                                        .days[2]
                                                                                        .date +
                                                                                        "#" +
                                                                                        (index +
                                                                                            1)
                                                                                ]
                                                                            ) : (
                                                                                <CircularProgress
                                                                                    xs={{
                                                                                        textAlign:
                                                                                            "center",
                                                                                    }}
                                                                                    size="14px"
                                                                                    style={{
                                                                                        color: "yellow",
                                                                                    }}
                                                                                />
                                                                            )}
                                                                            /
                                                                            {""}
                                                                            {
                                                                                values
                                                                                    .choosedSportActivity
                                                                                    .capacity
                                                                            }
                                                                        </Button>
                                                                    </TableCell> */}
                                                                    </TableRow>{" "}
                                                                </>
                                                            );
                                                        }
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Box>
                                </>
                            )}
                        </>
                    ) : (
                        <></>
                    )}
                </Box>
            </ThemeProvider>
        </>
    );
}

export default MakeReservation;
