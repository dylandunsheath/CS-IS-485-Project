import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ListSubheader } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const drawerWidth = 500;

// DrawerHeader styled component
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  backgroundColor: "#1E1E1E",
  color: "#EAECEE",
}));

const SideMenu = ({ questions, onNavigate, open, onClose, progress }) => {
  const theme = useTheme();

  const getSections = (questions) => {
    const sections = [];
    questions.forEach((q) => {
      if (q.section && !sections.includes(q.section)) {
        sections.push(q.section);
      }
    });
    return sections;
  };

  const sections = getSections(questions);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#2C2C2C",
          color: "#EAECEE",
          padding: 0,
          border: "none",
        },
      }}
      open={open}
    >
      {/* Drawer Header */}
      <DrawerHeader >
        <IconButton onClick={onClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon sx={{ color: "#EAECEE" }} />
          ) : (
            <ChevronRightIcon sx={{ color: "#EAECEE" }} />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider sx={{ backgroundColor: "#4C566A" }} />

      {/* List of Questions */}
      <List
        subheader={
          <li style={{ margin: 0, padding: 0, listStyle: "none" }} />
        }
        sx={{
          padding: 0,
        }}
      >
        {sections.map((section) => (
          <li key={section} style={{ listStyle: "none" }}>
            <ul style={{ margin: 0, padding: 0 }}>
              <ListSubheader
                sx={{
                  backgroundColor: "#1E1E1E",
                  color: "#EAECEE",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  lineHeight: "2",
                  textTransform: "uppercase",
                  paddingLeft: "16px",
                  borderBottom: "1px solid #4C566A",
                }}
              >
                {section}
              </ListSubheader>
              {questions
                .filter((question) => question.section === section)
                .map((question, index) => {
                  const globalIndex = questions.findIndex((q) => q.id === question.id);
                  return (
                    <Card
                      variant="outlined"
                      sx={{
                        m: "8px 16px",
                        cursor: "pointer",
                        backgroundColor: progress.responses[globalIndex]?.answer
                          ? "#00503A"
                          : "#2C2C2C",
                        color: progress.responses[globalIndex]?.answer
                          ? "#FFFFFF"
                          : "#EAECEE",
                        border: "1px solid #4C566A",
                        "&:hover": {
                          backgroundColor: "#193353",
                          transform: "scale(1.02)",
                        },
                        transition: "transform 0.2s, background-color 0.3s",
                      }}
                      key={question.id}
                    >
                      <ListItem
                        button
                        onClick={() => onNavigate(globalIndex)}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "10px 16px",
                          "&:hover": {
                            backgroundColor: "#193353",
                          },
                        }}
                      >
                        <ListItemText
                          primary={`${question.text}`}
                          primaryTypographyProps={{
                            style: {
                              fontSize: "0.9rem",
                              fontWeight: "400",
                              lineHeight: "1.5",
                            },
                          }}
                        />
                        {progress.responses[globalIndex]?.answer && (
                          <CheckCircleIcon sx={{ color: "#55AA33" }} />
                        )}
                      </ListItem>
                    </Card>
                  );
                })}
            </ul>
          </li>
        ))}
      </List>

      <Divider sx={{ backgroundColor: "#4C566A" }} />
    </Drawer>
  );
};

export default SideMenu;
