import React from "react";

import friendlies from "../images/mitre.jpg";

import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
//   Text,
//   Anchor,
  Grid,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundSize: "cover",
    backgroundImage: `url(${friendlies})`,
  },

  form: {
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 600,
    maxWidth: 400,
    marginTop: 5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function AuthenticationImage() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Grid justify="center" align="center">
        <Paper className={classes.form} radius={0} p={30}>
          <Title
            order={2}
            className={classes.title}
            align="center"
            mt="md"
            mb={50}
          >
            Welcome back to FriendlyMatcher!
          </Title>

          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            size="md"
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
          />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button fullWidth mt="xl" size="md">
            Sign Up
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}
