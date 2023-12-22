import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" sx={{ backgroundColor: "white" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "black",
              fontWeight: "bold",
              textShadow: "0 3px 5px rgba(0, 0, 0, 0.5)",
            }}
          >
            APP LOGO
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/">
              <Button color="inherit" sx={{ fontSize: "1rem", color: "black" }}>
                DASHBOARD
              </Button>
            </Link>
            <Link to="createad">
              <Button
                color="inherit"
                sx={{ fontSize: "1rem", marginLeft: "8px", color: "black" }}
              >
                CREATE ADS
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
