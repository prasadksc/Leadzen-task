import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import ViewDetails from "./ViewDetails";

const CardDetails = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "25px",
        width: '100%',
        
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: '0 auto',
          height: '200px'
        }}
      >
        <Typography sx={{marginLeft: '40px'}}>Hellomet</Typography>
        <Stack sx={{ gap: "20px" }}>
          <Typography sx={{ fontWeight: "bold" }}>CONTACT</Typography>
          <Typography>Swapnil Warng</Typography>
        </Stack>
        <Stack sx={{ gap: "20px" }}>
          <Typography sx={{ fontWeight: "bold" }}>CITY</Typography>
          <Typography>Mumbai</Typography>
        </Stack>
        <Stack sx={{ gap: "20px" }}>
          <Typography sx={{ fontWeight: "bold" }}>STATE</Typography>
          <Typography>Maharastra</Typography>
        </Stack>

        { open ? <Button
          variant="contained"
          
          onClick={handleClose}
          sx={{ backgroundColor: "#f44336", borderRadius: "20px" }}
        >
          Hide Details
        </Button> :  <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ backgroundColor: "#f44336", borderRadius: "20px" }}
        >
          View Details
        </Button>}
      </CardContent>
      {open && <ViewDetails/>}
    </Card>
  );
};

export default CardDetails;
