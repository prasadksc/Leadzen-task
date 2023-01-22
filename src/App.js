import { Box } from "@mui/material";
import React from "react";
import CardDetails from "./components/CardDetail";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <Box m={5} sx={{display: 'flex', flexDirection: "column", gap:'15px'}}>
      <CardDetails />
      <CardDetails />
      <CardDetails />
      <Stack alignItems={'center'}>
        <Pagination
          count={4}
          shape="rounded"
          sx={{
            '.Mui-selected': {
              backgroundColor: '#f44336'
            }
          }}
        />
      </Stack>
    </Box>
  );
}

export default App;
