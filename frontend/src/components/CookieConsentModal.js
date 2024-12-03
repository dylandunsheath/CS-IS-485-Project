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
        backgroundColor: "rgba(27, 38, 59, 0.95)", // Navy background with opacity
        color: "#EAECEE", // Light text color
        animation: "fadeIn 0.5s ease-in",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "10px", color: "#EAECEE" }}>
        🍪 We Value Your Privacy
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "10px", color: "#A5A5A5" }}>
        We use cookies to enhance your experience, analyze site usage, and personalize content. By clicking
        "Accept All Cookies," you consent to our use of cookies. Manage your preferences below.
      </Typography>
      <Divider sx={{ marginY: "15px", backgroundColor: "#4C566A" }} />

      <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        Cookie Preferences:
      </Typography>
      <Box sx={{ marginBottom: "20px" }}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Essential Cookies (Required)"
          disabled
          sx={{ color: "#A5A5A5" }}
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Performance Cookies"
          sx={{ color: "#EAECEE" }}
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Functional Cookies"
          sx={{ color: "#EAECEE" }}
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Advertising Cookies"
          sx={{ color: "#EAECEE" }}
        />
      </Box>
      <Divider sx={{ marginY: "15px", backgroundColor: "#4C566A" }} />
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <Button variant="outlined" onClick={onReject} sx={{ color: "#EAECEE", borderColor: "#4C566A" }}>
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
