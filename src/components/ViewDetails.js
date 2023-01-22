import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Box } from "@mui/material";

const ViewDetails = () => {
  return (
    <Box marginLeft={5}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: "25px",
          marginBottom: '15px',
          marginRight:'16px'
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Description</Typography>
          <Typography>
            Providing service of domestic flight booing @ lowest price
            guaranteed and also for railway e ticket booking, also offering
            international flight tickets giving services, giving services to our
            customers since 1995, now goinh o start hojj and umrah very soon for
            our aluable customers it will also @ very affordable prices.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "300px",
              marginTop: "16px",
            }}
          >
            <Stack sx={{ gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold" }}>
                Contact Person
              </Typography>
              <Typography>Swapnil Warng</Typography>
              <Typography sx={{ fontWeight: "bold" }}>Designation</Typography>
              <Typography>Proprietor</Typography>
              <Typography sx={{ fontWeight: "bold" }}>Emails</Typography>
              <Typography>helloservices1@gmail.com</Typography>
              <Typography sx={{ fontWeight: "bold" }}>Phones</Typography>
              <Typography>9712500500</Typography>
            </Stack>
            <Stack sx={{ gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Address</Typography>
              <Typography>
                15 Kasmani Shopping Centre Unn Surat Gujarat 395003
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>City</Typography>

              <Typography>Mumbai</Typography>
              <Typography sx={{ fontWeight: "bold" }}>State</Typography>
              <Typography>Maharastra</Typography>
              <Typography sx={{ fontWeight: "bold" }}>Country</Typography>
              <Typography>India</Typography>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ViewDetails;
