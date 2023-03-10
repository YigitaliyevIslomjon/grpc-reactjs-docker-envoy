import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { BusList } from "Features/Bus";
import { CustomerForm, CustomerId } from "Features/Customer";
import { tabPanelList } from "Constants/Data";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function Main() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box paddingY={3} paddingX={2}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabPanelList.map(({ title, value }) => (
              <Tab key={title} label={title} {...a11yProps(value)} />
            ))}
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <CustomerForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CustomerId />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <BusList />
        </TabPanel>
      </Box>
    </Box>
  );
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number | string) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
