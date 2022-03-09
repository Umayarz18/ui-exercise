import React from "react";

import { DataVisCard } from "./index";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/DataVisCard",
	component: DataVisCard,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <DataVisCard {...args} />;

export const Default = Template.bind({});
