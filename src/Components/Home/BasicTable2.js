import * as React from "react";
import classes from "./BasicTable.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import DonutChart from "./Chart";

function createData(name, clicks, cost, conv, reve) {
  return { name, clicks, cost, conv, reve };
}

const initialRows = [
  createData("Male", 348, 12528, 42, 62118),
  createData("Female", 695, 24912, 35, 5175),
  createData("Unknown", 105, 3943, 3, 4489),
];
const totalRow = {
  name: "Total",
  clicks: 1145,
  cost: "USD 41,383",
  conv: 80,
  reve: "USD 71,782",
};

export default function BasicTable2() {
  const [rows, setRows] = React.useState(initialRows);
  const [order, setOrder] = React.useState("ascending");
  const [sortConfig, setSortConfig] = React.useState("");
  const [activeIcon, setActiveIcon] = React.useState("table");
  const [selectedValue, setSelectedValue] = React.useState("clicks");

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key !== null) {
      if (sortConfig.key === key && sortConfig.direction === "ascending") {
        direction = "descending";
      }
    }
    setOrder(direction);
    setSortConfig({ key, direction });
  };

  React.useEffect(() => {
    let sortedProducts = [...rows];
    if (sortConfig !== null) {
      sortedProducts.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    setRows(sortedProducts);
  }, [sortConfig]);

  const handleIcon = (icon) => {
    setActiveIcon(icon);
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "5px",
        overflow: "hidden",
        width: 625,

        height: "475px",
      }}
    >
      <Typography
        variant="h6"
        fontSize="1rem"
        component="div"
        style={{
          borderBottom: "1px solid rgba(224, 224, 224, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        Ad Insight
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          {activeIcon === "donut" ? (
            <select
              class="form-select form-select-sm"
              aria-label="Small select example"
              onChange={handleSelectChange}
              value={selectedValue}
            >
              <option value="clicks">Clicks</option>
              <option value="cost">Cost</option>
              <option value="conv">Conversion</option>
              <option value="reve">Revenue</option>
            </select>
          ) : (
            ""
          )}
          <HelpOutlineIcon sx={{ color: "#c7c7c7" }} fontSize="25px" />
        </div>
      </Typography>
      {activeIcon === "table" ? (
        <TableContainer component={Paper}>
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ fontSize: "1rem" }}>
                <TableCell>
                  <Typography variant="h6" fontSize=".9rem" component="div">
                    Groups
                    <i
                      class="bi bi-chevron-expand"
                      onClick={() => requestSort("name")}
                    ></i>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6" fontSize=".9rem" component="div">
                    Clicks{" "}
                    <i
                      class="bi bi-chevron-expand"
                      onClick={() => requestSort("clicks")}
                    ></i>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6" fontSize=".9rem" component="div">
                    Cost
                    <i
                      class="bi bi-chevron-expand"
                      onClick={() => requestSort("cost")}
                    ></i>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6" fontSize="1rem" component="div">
                    Conversion
                    <i
                      class="bi bi-chevron-expand"
                      onClick={() => requestSort("conv")}
                    ></i>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6" fontSize=".9rem" component="div">
                    Revenue
                    <i
                      class="bi bi-chevron-expand"
                      onClick={() => requestSort("reve")}
                    ></i>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ color: "text.secondary" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right" sx={{ color: "text.secondary" }}>
                    {row.clicks}
                  </TableCell>
                  <TableCell align="right" sx={{ color: "text.secondary" }}>
                    USD {row.cost}
                  </TableCell>
                  <TableCell align="right" sx={{ color: "text.secondary" }}>
                    {row.conv}
                  </TableCell>
                  <TableCell align="right" sx={{ color: "text.secondary" }}>
                    USD {row.reve}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow
                key={totalRow.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: "#f5f5f5",
                }}
              >
                <TableCell
                  component="th"
                  scope="totalRow"
                  sx={{ color: "text.secondary" }}
                >
                  {totalRow.name}
                </TableCell>
                <TableCell align="right" sx={{ color: "text.secondary" }}>
                  {totalRow.clicks}
                </TableCell>
                <TableCell align="right" sx={{ color: "text.secondary" }}>
                  {totalRow.cost}
                </TableCell>
                <TableCell align="right" sx={{ color: "text.secondary" }}>
                  {totalRow.conv}
                </TableCell>
                <TableCell align="right" sx={{ color: "text.secondary" }}>
                  {totalRow.reve}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <DonutChart rows={rows} total={totalRow} value={selectedValue} />
      )}

      <div className={classes.toggle}>
        <div
          className={`${classes.icon} ${
            activeIcon === "donut" ? classes.active : ""
          }`}
          onClick={() => handleIcon("donut")}
        >
          <DonutLargeOutlinedIcon />
        </div>
        <div
          className={`${classes.icon} ${
            activeIcon === "table" ? classes.active : ""
          }`}
          onClick={() => handleIcon("table")}
        >
          <TableChartOutlinedIcon />
        </div>
      </div>
    </div>
  );
}
