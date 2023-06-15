import { Box, Grid, Typography } from "@mui/material";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token != "") {
    footerComponent = (
      <Grid
        container
        py={4}
        alignItems={"center"}
        style={{ backgroundColor: "#f5ebdd" }}
      >
        <Grid
          item
          xs={4}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          className="font"
        >
          <Typography variant="h6" className="font">
            Econecta
          </Typography>
          <Box display={"flex"} className="font">
            <Typography></Typography>
            <KeyboardArrowLeftIcon />
            <Typography color={"#065408"} className="font">
              React / MUI
            </Typography>
            <KeyboardArrowRightIcon />
          </Box>
        </Grid>
        <Grid item xs={4} display={"flex"} justifyContent={"center"}>
          <Box
            display={"flex"}
            gap={2}
            alignItems={"center"}
            className="iconesFooter"
          >
            <GitHubIcon fontSize="inherit" className="iconeInd" />
            <LinkedInIcon fontSize="inherit" className="iconeInd" />
            <InstagramIcon fontSize="inherit" className="iconeInd" />
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          display={"flex"}
          justifyContent={"center"}
          className="font"
        >
          <Typography variant="h5" className="font">
            Apoio: Generation Brasil
          </Typography>
        </Grid>
      </Grid>
    );
  }

  return <>{footerComponent}</>;
}

export default Footer;
