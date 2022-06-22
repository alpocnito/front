import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Tabs, TabList, TabPanel, Tab } from "react-re-super-tabs";
import CustomTab from "./components/CustomTab/CustomTab.js";

import { getPosts } from "./actions/posts.js";
import DataDisplay from "./components/DataDisplay/DataDisplay.js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Tabs activeTab="about">
        <TabList>
          <Tab
            component={CustomTab}
            label="1234567812345637"
            id="1234567812345637"
          />
          <Tab
            component={CustomTab}
            label="1234567812345636"
            id="1234567812345636"
          />
          <Tab
            component={CustomTab}
            label="1234567812345639"
            id="1234567812345639"
          />
        </TabList>
        <TabList>
          <TabPanel
            component={() => <DataDisplay DEV_EUI="1234567812345637" />}
            id="1234567812345637"
          />
          <TabPanel
            component={() => <DataDisplay DEV_EUI="1234567812345636" />}
            id="1234567812345636"
          />
          <TabPanel
            component={() => <DataDisplay DEV_EUI="1234567812345639" />}
            id="1234567812345639"
          />
        </TabList>
      </Tabs>
    </div>
  );
};

export default App;

/* <Grid
container
justifyContent="space-between"
alignItems="flex-start"
spacing={1}
>
<Grid item xs={2}>
  <Form />
</Grid>
</Grid> */
