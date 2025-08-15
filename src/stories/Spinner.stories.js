import { Spinner } from './Spinner';

export default {
  title: 'Bootstrap/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    animation: {
      control: { type: 'select' },
      options: ['border', 'grow'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm'],
    },
  },
};

export const Border = {
  args: {
    animation: 'border',
    children: 'Loading...',
  },
};

export const Grow = {
  args: {
    animation: 'grow',
    children: 'Loading...',
  },
};

export const Small = {
  args: {
    animation: 'border',
    size: 'sm',
    children: 'Loading...',
  },
};

export const Primary = {
  args: {
    animation: 'border',
    variant: 'primary',
    children: 'Loading...',
  },
};

export const Success = {
  args: {
    animation: 'border',
    variant: 'success',
    children: 'Loading...',
  },
};

export const Danger = {
  args: {
    animation: 'border',
    variant: 'danger',
    children: 'Loading...',
  },
};