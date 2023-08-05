import React from "react";
import { storiesOf } from "@storybook/react";
import List from "../component/list/List";
import { Button } from "./Button";




export default {
    title: 'Example/List',
    component: List,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };
  
  const Template = (args) => <Button {...args} />;
  
  export const ListComp = Template.bind({});
  ListComp.args = {
    primary: true,
    label: 'List component Button',
  };