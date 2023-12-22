import * as React from "react";
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

function createData(name, clicks, cost, conv, reve) {
  return { name, clicks, cost, conv, reve };
}

const initialRows = [
  createData("Cosmetics", 712, 4272, 8, 16568),
  createData("Serums", 3961, 27331, 115, 362526),
  createData("Facewash", 9461, 76831, 123, 266800),
  createData("Shampoos", 439, 2151, 5, 111029),
  createData("Conditioners", 1680, 3864, 49, 175245),
  createData("Facewash2", 4978, 29370, 189, 623106),
];
const totalRow = [
  createData("Total", 26510, "USD 1,43,819", 489, "USD 15,73,563"),
];

export default function BasicTable() {
  const [rows, setRows] = React.useState(initialRows);
  const [order, setOrder] = React.useState("ascending");
  const [sortConfig, setSortConfig] = React.useState("");

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

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "5px",
        overflow: "hidden",
        width: 625,
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
        <HelpOutlineIcon sx={{ color: "#c7c7c7" }} fontSize="25px" />
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ fontSize: "1rem" }}>
              <TableCell>
                <Typography variant="h6" fontSize=".9rem" component="div">
                  Campaigns
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
                <Typography variant="h6" fontSize=".9rem" component="div">
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
            {totalRow.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: "#f5f5f5",
                }}
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
                  {row.cost}
                </TableCell>
                <TableCell align="right" sx={{ color: "text.secondary" }}>
                  {row.conv}
                </TableCell>
                <TableCell align="right" sx={{ color: "text.secondary" }}>
                  {row.reve}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
