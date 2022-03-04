import React from 'react';

import { Card } from './index';
import { Default as DefaultChart } from '../Chart/index.stories';
import { TotalOrdersByMovie } from '../TotalOrdersByMovie';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

export const MovieCard = Template.bind({});
MovieCard.args ={
  hasShadow: true,
  children: <>
  <h2>Movie Name</h2>
  <p>Release Date: <span>Icon</span> Date Here</p>
  <ul>
    <li><span>Date Again</span> <button>Buy Tickets</button></li>
    <li><span>Date Again</span> <button>Buy Tickets</button></li>
  </ul>
  </>
}


export const DataVisualizationCard = Template.bind({});
DataVisualizationCard.args ={
  hasShadow: true,
  children: <>
  <h2>Total Movie Sales</h2>
  <DefaultChart{...DefaultChart.args}/>
  <TotalOrdersByMovie movieTitle={'Movie 1'} totalOrders={2346}/>
  <TotalOrdersByMovie movieTitle={'Movie 2'} totalOrders={4422}/>
  </>
}

