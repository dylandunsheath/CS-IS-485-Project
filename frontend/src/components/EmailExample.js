import React, { useState } from "react";
import { Box, Card, CardContent, Typography, Button, Divider, Avatar } from "@mui/material";
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
        border: "1px solid #4C566A",
        borderRadius: "8px",
        backgroundColor: "#1C1C1C",
        color: "#EAECEE",
        position: "relative",
        animation: "slideInLeft 0.5s ease-out",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Avatar sx={{ backgroundColor: "#0070BA", marginRight: "10px" }}>B</Avatar>
        <Typography variant="h6">
          Billing Department <span style={{ fontSize: "12px", color: "#A5A5A5" }}>service@paypal.com</span>
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: "#4C566A" }} />
      <img src={PayPal} style={{ width: "50px", height: "50px", marginTop: "10px" }} alt="PayPal Logo" />
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginTop: "20px", color: "#0070BA" }}
      >
        Here’s your invoice
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        Billing Department sent you an invoice for $600.00
      </Typography>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "#1C1C1C",
          color: "#EAECEE",
          marginBottom: "20px",
          padding: "15px",
        }}
      >
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Invoice details
          </Typography>
          <Typography variant="body2">
            <strong>Amount requested:</strong> $600.00
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "10px" }}>
            <strong>Note from seller:</strong> Your account has been accessed unlawfully. Contact us immediately at
            <strong> +1 (855) 909-7823</strong>.
          </Typography>
        </CardContent>
      </Card>
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
