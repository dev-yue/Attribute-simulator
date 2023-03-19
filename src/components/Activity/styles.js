import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  activity: {
    padding: "10px",
  },
  links: {
    alignItems: "center",
    fontWeight: "bolder",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    borderRadius: "20px",
    height: "200px",
    marginTop: "10px",
    marginBottom: "10px",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  name: {
    color: '#000',
    textOverflow: "ellipsis",
    width: "230px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: 0,
    textAlign: "center",
  },
}));
