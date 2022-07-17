import React from "react";
import { Link } from "@remix-run/react";
import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
  Navbar,
} from "@mantine/core";

import different_sports_image from "../images/landingpage.jpg";

const useStyles = createStyles((theme) => ({
  navbar: {
    height: 75,
    position: "fixed",
    backgroundColor: theme.black,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px",
  },

  name: {
    fontSize: 20,
    fontWeight: 900,
  },

  hero: {
    position: "relative",
    backgroundImage: `url(${different_sports_image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "-10px",
  },

  container: {
    height: 450,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

export default function HeroContentLeft() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Navbar className={classes.navbar}>
        <Text color="white" className={classes.name}>
          FriendlyMatcher
        </Text>
      </Navbar>
      <Container className={classes.container}>
        <Title className={classes.title}>
          Find an opponent of your choice for your next friendly match
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          We have a database of many sports teams ready to play friendly matches
          with your team
        </Text>
        <Button
          variant="gradient"
          size="xl"
          radius="xl"
          className={classes.control}
          component={Link}
          to="/login"
        >
          Schedule Match
        </Button>
      </Container>
    </div>
  );
}
