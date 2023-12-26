import React from 'react'
import Box from "@mui/material/Box";
import SideNav from "./SideNav";

export default function ContactUs() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h2>Contact Us</h2>
        </Box>
      </Box>
    </>
  )
}
