import React from "react"
import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"
import aboutImg from "../../assets/websiteImages/about.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${aboutImg})`,
    height: 500,
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    // flexBasis: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 500,
    width: 800,
    borderRadius: "50%",
    backgroundImage:
      "radial-gradient(#fff,rgba(255,255,255, .8),rgba(255,255,255, .7),rgba(255,255,255, 0.6),rgba(255,255,255, 0.3),rgba(255,255,255, 0),rgba(255,255,255, 0),rgba(255,255,255, 0))",
    padding: 150,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: 14,
    color: theme.palette.primary.main,
    margin: 0,
    marginBottom: 5,
  },
  title2: {
    textTransform: "lowercase",
    fontWeight: 700,
    fontSize: 18,
    margin: 0,
    marginBottom: 15,
  },
  text: {},
}))

function About() {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.innerContainer}>
          <p className={classes.title}>{t("about.about")}</p>
          <p className={classes.title2}>{t("about.tagline")}</p>
          <p className={classes.text}>{t("about.content")}</p>
        </div>
      </Container>
    </div>
  )
}

export default About
