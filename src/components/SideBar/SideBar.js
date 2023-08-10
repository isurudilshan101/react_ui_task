import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export function Sidebar() {
  return (
    <Card className="h-[calc(100vh-2rem+560px)] rounded-2xl w-20 p-4 shadow-xl shadow-blue-gray-900/5 bg-black">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          {/* Your text here */}
        </Typography>
      </div>
      <List>
        <ListItem className="group">
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5 text-yellow-300 group-hover:bg-brown-500 group-hover:text-white transition mb-4 mx-auto" />
          </ListItemPrefix>
        </ListItem>
        <ListItem className="group">
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5 text-yellow-300 group-hover:bg-brown-500 group-hover:text-white transition mb-4 mx-auto"  />
          </ListItemPrefix>
        </ListItem>
        <ListItem className="group">
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5 text-yellow-300 group-hover:bg-brown-500 group-hover:text-white transition mb-4 mx-auto" />
          </ListItemPrefix>
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem className="group">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5 text-yellow-300 group-hover:bg-brown-500 group-hover:text-white transition mb-4 mx-auto" />
          </ListItemPrefix>
        </ListItem>
        <ListItem className="group">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5 text-yellow-300 group-hover:bg-brown-500 group-hover:text-white transition mb-4 mx-auto" />
          </ListItemPrefix>
        </ListItem>
        <ListItem className="group">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5 text-yellow-300 group-hover:bg-brown-500 group-hover:text-white transition" />
          </ListItemPrefix>
        </ListItem>
      </List>
    
  
    <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            
          alt="User Profile"
          className="rounded-full w-10 h-10 mx-auto mt-auto"
        />
    </Card>
  );
}
