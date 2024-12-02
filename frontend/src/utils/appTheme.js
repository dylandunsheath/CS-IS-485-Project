import { createTheme } from "@mui/material";

export const appTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 50,
                    color: "white",
                    backgroundColor: "#1a2b5a",
                    border: "none",
                    cursor: "pointer"
                }
            }
        }
    },
    colors: {
        primary: "#1a2b5a",
        secondary: "#1a2b5a"
    }
})