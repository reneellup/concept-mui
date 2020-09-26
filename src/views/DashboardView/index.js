import React from "react";
import { Typography } from "@material-ui/core";

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h1" color="textPrimary" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" color="textPrimary" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" color="textPrimary" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" color="textPrimary" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" color="textPrimary" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" color="textPrimary" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" color="textPrimary" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" color="textPrimary" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" color="textPrimary" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" color="textPrimary" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography
        variant="button"
        color="textPrimary"
        display="block"
        gutterBottom
      >
        button text
      </Typography>
      <Typography
        variant="caption"
        color="textPrimary"
        display="block"
        gutterBottom
      >
        caption text
      </Typography>
      <Typography
        variant="overline"
        color="textPrimary"
        display="block"
        gutterBottom
      >
        overline text
      </Typography>
    </div>
  );
};

export default Dashboard;
