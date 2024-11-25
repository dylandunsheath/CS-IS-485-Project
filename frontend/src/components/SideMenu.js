import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ListSubheader } from "@mui/material";

const drawerWidth = 300;

// DrawerHeader styled component
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));




const SideMenu = ({ questions, onNavigate, open, onClose }) => {
  const theme = useTheme();

  const getSections = (questions) => {
    var sections  = [];

    var q;
    for (q in questions) {
      if (questions[q].section != null && !sections.includes(questions[q].section)) {
        sections.push(questions[q].section);
      }
    }
    console.log(sections);
    return sections;
  }

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
      variant="persistent"
      anchor="left"
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
        {sections? sections.map((section) => (
          <li>
            <ul>
          <ListSubheader>{section}</ListSubheader>
          {questions
            .filter((question) => question.section === section)
            .map((question) => (
              <ListItem
                button
                key={question.id}
                onClick={() => onNavigate(question.id)}
              >
                <ListItemText primary={`${question.text}`} />
              </ListItem>
            ))}
            </ul>
          </li>
        )): "no sections found"}
      </List>

      <Divider />
    </Drawer>
  );
};

export default SideMenu;
