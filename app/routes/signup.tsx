import React from "react";

import friendlies from "../images/signup.jpg";

import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  NumberInput,
  Button,
  Title,
  Select,
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
            // mt="md"
            mb={10}
          >
            Register Your Team with Us
          </Title>

          <TextInput label="Team Name" placeholder="My_team_FC" size="sm" />
          <TextInput
            label="City"
            placeholder="Enter name of City or town where the team comes from"
            size="sm"
          />
          <TextInput
            label="Contact Person Name"
            placeholder="e.g TM/Captain/Coach First and Last Name"
            size="sm"
          />
          <TextInput label="Email" placeholder="..@gmail.com" size="sm" />
          <PasswordInput
            placeholder="Password"
            label="Password"
            description="Password must include at least one letter, number and special character"
            required
            size="sm"
          />
          <NumberInput
            hideControls
            label="Phone Number"
            placeholder="+254...."
            size="sm"
          />
          <Select
            label="Team Expertise"
            placeholder="Choose one option"
            searchable
            allowDeselect
            nothingFound="No options"
            data={[
              "Professional: Football is a career",
              "Unproffessional: Participate in tournaments",
              "Hobbysts: Play for fun and exercise",
            ]}
            size="sm"
          />
          <Button fullWidth mt="xl" size="sm">
            Sign Up
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}
