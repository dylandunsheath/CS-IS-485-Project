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
        },
      }}
      open={open}
    >
      {/* Drawer Header */}
      <DrawerHeader>
        <IconButton onClick={onClose}>
          {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>

      <Divider />

      {/* List of Questions */}
      <List subheader={<li />}>
        {sections.map((section) => (
          <li key={section}>
            <ul>
              <ListSubheader>{section}</ListSubheader>
              {questions
                .filter((question) => question.section === section)
                .map((question, index) => {
                  const globalIndex = questions.findIndex((q) => q.id === question.id); // Map to global index
                  return (
                    <Card variant="outlined" sx={{ m: 1 }} key={question.id}>
                      <ListItem
                        button
                        onClick={() => onNavigate(globalIndex)}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <ListItemText primary={`${question.text}`} />
                        {progress.responses[globalIndex]?.answer && (
                          <CheckCircleIcon sx={{ color: "green" }} />
                        )}
                      </ListItem>
                    </Card>
                  );
                })}
            </ul>
          </li>
        ))}
      </List>

      <Divider />
    </Drawer>
  );
};

export default SideMenu;
