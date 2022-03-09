import React from "react";

import { ProgressBar } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/ProgressBar",
	component: ProgressBar,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});

export const Acknowledge = Template.bind({});
Acknowledge.args = {
	color: "acknowledge",
};

export const Gold = Template.bind({});
Gold.args = {
	color: "gold",
};

export const HiAlert = Template.bind({});
HiAlert.args = {
	color: "hi-alert",
};

export const Alert = Template.bind({});
Alert.args = {
	color: "alert",
};
