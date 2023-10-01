import React, { useState } from "react";

import { makeStyles } from "@mui/material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { getMatchDetail } from "../api/Api";
import { SettingsInputSvideoRounded } from "@mui/icons-material";

const MyCard = ({data}) => {
 
  const getMatchCard = () => {
    return (
        <div>
      <Card style={{marginTop:20}}>
        <CardContent>
            <Grid container justifyContent={"center"} spacing={4} alignItems={"center"}>
                <Grid item>
                    <Typography variant="h5">{data["teams"][0]}</Typography>
                </Grid>
                <Grid item>

                    <img style={{width:85}} src={require("../images/vs.png")}></img>
                </Grid>
                <Grid item>
                    <Typography variant="h5">{data["teams"][1]}</Typography>
                </Grid>
            </Grid>
        </CardContent>

        <CardActions>
            <Grid container justifyContent={"center"} >
                <Button variant="contained" color="primary">
                    show details
                </Button>
                <Button style={{marginLeft:10}} variant="contained" color="primary">
                    Start time {new Date(data.dateTimeGMT).toLocaleString()};
                </Button>
            </Grid>
        </CardActions>
      </Card>
    </div>
    );
    
  };
  

  return getMatchCard();
};

export default MyCard;

   
