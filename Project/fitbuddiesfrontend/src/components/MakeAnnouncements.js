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
import { autocompleteClasses, CardActionArea } from "@mui/material";
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
import axios from "axios";
import { PostAddSharp } from "@mui/icons-material";
import { createAnnouncement } from "../store/actions/announcement.actions";

const theme = createTheme();


function MakeAnnouncements(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState(''); 
    const [endDate, setEndDate] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
   
    const handleSubmit = (event) => {
        event.preventDefault();
        //dispatch(userRegister(user, navigate));
    };
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleAnnouncementSubmission = () => {
            let announcement = {
                title: title,
                body: body,
                author: author,
                endDate: endDate,
            }
            dispatch(createAnnouncement(announcement, navigate("/announcements")));
    };
    return (
        <ThemeProvider theme={theme}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: '20px', marginBottom: '40px'}}>
            <h1>Make Announcement</h1>
            </div>

            <form class = "makeannouncements">
                <label>Announcement Title</label>
                <input 
                type = "text" 
                required 
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}
                />

                <label>Announcement Body</label>
                <textarea 
                required
                value = {body}
                onChange = {(e) => setBody(e.target.value)}
                ></textarea>

                <label>Announcement made by</label>
                <select 
                
                value = {author}
                onChange = {(e) => setAuthor(e.target.value)}
                >   
                    <option>All sports center</option>
                    <option>Main Sports Hall</option>
                    <option>East Sports Hall</option>
                    <option>Dormitories Sports Hall</option>
                    <option>East Campus Open Air Facilities</option>
                    <option>Main Campus Open Air Facilities</option>
                </select>

                <label>Announcement End Date</label>
                <input type = "date" required
                value = {endDate}
                onChange = {(e) => setEndDate(e.target.value)}
                />

                <button
                onClick={handleAnnouncementSubmission}
                >Post Announcement</button>

            
            </form>



            
        </ThemeProvider>
    );

}

export default MakeAnnouncements;