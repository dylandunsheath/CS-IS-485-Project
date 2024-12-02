import React from "react";
import { Box, Typography, Button, Switch, FormControlLabel, Divider, Paper } from "@mui/material";

const CookieConsentModal = ({ onAccept, onReject }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "left",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        🍪 We Value Your Privacy
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        We use cookies to enhance your experience, analyze site usage, and personalize content. By clicking "Accept All Cookies," 
        you consent to our use of cookies. Manage your preferences below.
      </Typography>
      <Divider sx={{ marginY: "15px" }} />

      <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        Cookie Preferences:
      </Typography>
      <Box sx={{ marginBottom: "20px" }}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Essential Cookies (Required)"
          disabled
        />
        <FormControlLabel
          control={<Switch defaultChecked/>}
          label="Performance Cookies"
        />
        <FormControlLabel
          control={<Switch defaultChecked/>}
          label="Functional Cookies"
        />
        <FormControlLabel
          control={<Switch defaultChecked/>}
          label="Advertising Cookies"
        />
      </Box>
      <Divider sx={{ marginY: "15px" }} />
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <Button variant="outlined" onClick={onReject}>
          Reject All
        </Button>
        <Button variant="contained" color="primary" onClick={onAccept}>
          Accept All Cookies
        </Button>
      </Box>
    </Paper>
  );
};

export default CookieConsentModal;
