import { createTheme } from "@mui/material/styles";

// Create the theme
const appTheme = createTheme({
  palette: {
    mode: "dark", // Set dark mode
    primary: {
      main: "#1B263B", // Navy blue
      contrastText: "#EAECEE", // Light contrast text
    },
    secondary: {
      main: "#4C566A", // Dark gray-blue
      contrastText: "#EAECEE",
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1C1C1C", // Slightly lighter for cards
    },
    text: {
      primary: "#EAECEE", // Light text
      secondary: "#A5A5A5", // Subtle light gray
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#EAECEE",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      color: "#EAECEE",
    },
    body1: {
      fontSize: "1rem",
      color: "#A5A5A5",
    },
    button: {
      textTransform: "none", // Prevent all-uppercase buttons
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px 16px",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "#27496D", // Slightly brighter navy
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "20px",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)", // Animation on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1C1C1C",
          color: "#EAECEE",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1B263B", // Navy background
          color: "#EAECEE",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&:hover": {
          },
        },
      },
    },
  },
});

export default appTheme;
