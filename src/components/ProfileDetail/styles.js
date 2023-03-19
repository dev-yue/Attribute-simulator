import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";

export default makeStyles(() => ({
  containerSpaceAround: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px 0 !important",
  },
  image: {
    borderRadius: "20px 20px 0 0",
    maxWidth: "100%",
    maxHeight: "50%",
    marginBottom: "10px",
  },
  poster: {
    borderRadius: "20px",
    boxShadow: "0.5em 1em 1em rgb(64, 64, 70)",
    width: "400px",
    height: "600px",
  },
  genresContainer: {
    margin: "10px 0 !imaportant",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  genreImage: {
    marginRight: "10px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
  },
  castImage: {
    width: "100%",
    maxWidth: "7em",
    height: "8em",
    objectFit: "cover",
    borderRadius: "10px",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "50%",
    height: "50%",
  },
  name: {
    color: "#000",
    textOverflow: "ellipsis",
    width: "400px",
    overflow: "hidden",
    textAlign: "center",
  },
}));
