import React, { useState } from "react";
import { Box, Card, CardContent, Typography, Button, Divider, Avatar, ThemeProvider, Grid2 } from "@mui/material";
import { appTheme } from "../utils/appTheme";
import PayPal from "../images/Paypal_2014_logo.png";

const FakePaypalEmail = () => {
  const [hoveredLink, setHoveredLink] = useState(""); // State to store the hovered URL

  const handleMouseEnter = (url) => {
    setHoveredLink(url); // Set the hovered link
  };

  const handleMouseLeave = () => {
    setHoveredLink(""); // Clear the hovered link
  };

  return (
    <Box
      sx={{
        maxWidth: "700px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        position: "relative", // For positioning the hovered link display
      }}
    >
      <Grid2 container>
        <Avatar sx={{ backgroundColor: "#0070BA", marginBottom: "20px" }}>B</Avatar>
        <Typography
          variant="h6"
          align="left"
          sx={{ color: "#333", marginBottom: "20px", paddingLeft: "5px", fontSize: "18px" }}
        >
          Billing Department <span style={{ fontSize: "12px", color: "#888" }}>service@paypal.com</span>
        </Typography>
      </Grid2>
      <Divider />
      <img src={PayPal} style={{ width: "50px", height: "50px" }} alt="PayPal Logo" />
      <Typography
        variant="h5"
        align="left"
        sx={{ fontWeight: "bold", color: "#003087", marginTop: "20px" }}
      >
        Here’s your invoice
      </Typography>
      <Typography variant="body1" align="left" sx={{ color: "#555", marginBottom: "20px" }}>
        Billing Department sent you an invoice for $600.00
      </Typography>

      <Card variant="outlined" sx={{ backgroundColor: "#fff", marginBottom: "20px", textAlign: "left" }}>
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Invoice details
          </Typography>
          <Typography variant="body2">
            <strong>Amount requested:</strong> $600.00
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "10px" }}>
            <strong>Note from seller:</strong>
            <br />
            There is evidence that your PayPal account has been accessed unlawfully. $600.00 has been deducted
            from your account for gift card purchases. This transaction will appear in your PayPal activity
            within 24 hours. If you do not recognize this transaction, immediately contact us at{" "}
            <strong>+1 (855) 909-7823</strong>.
            <br />
            We are available 6am to 6pm Pacific Time, Monday through Friday.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "10px" }}>
            <strong>Invoice number:</strong> 1031
          </Typography>
        </CardContent>
      </Card>

      <ThemeProvider theme={appTheme}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0070BA",
            color: "#fff",
            width: "50%",
            padding: "10px 0",
            fontSize: "16px",
          }}
          onMouseEnter={() => handleMouseEnter("https://paypal.com/invoice")}
          onMouseLeave={handleMouseLeave}
        >
          View and Pay Invoice
        </Button>
      </ThemeProvider>
      <Typography
        variant="body2"
        align="center"
        sx={{ color: "#888", marginTop: "10px" }}
        onMouseEnter={() => handleMouseEnter("https://paypal.com/report")}
        onMouseLeave={handleMouseLeave}
      >
        <a
          href="#"
          style={{ textDecoration: "none", color: "#0070BA", fontWeight: "bold" }}
        >
          Don’t recognize this invoice?
        </a>
      </Typography>

      <Divider sx={{ marginY: "20px" }} />

      <Typography variant="body2" sx={{ color: "#333" }}>
        <strong>Before paying</strong>, make sure you recognize this invoice. If you don’t, report it. Learn more
        about common scams through PayPal.
      </Typography>
      <Typography variant="body2" sx={{ color: "#888", marginTop: "10px" }}>
        PayPal would never use an invoice or money request to ask you for your account credentials.
      </Typography>

      <Divider sx={{ marginY: "20px" }} />

      <Box sx={{ textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "#555" }}>
          Help | Contact | Security | Apps
        </Typography>
        <Typography variant="body2" sx={{ color: "#aaa", marginTop: "5px" }}>
          © 2024 PayPal Inc. All rights reserved.
        </Typography>
      </Box>

      {/* Display hovered link in the corner */}
      {hoveredLink && (
        <Box
          sx={{
            position: "fixed",
            bottom: "10px",
            left: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          {hoveredLink}
        </Box>
      )}
    </Box>
  );
};

export default FakePaypalEmail;
