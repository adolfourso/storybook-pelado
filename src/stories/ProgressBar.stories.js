import { ProgressBar } from './ProgressBar';

export default {
  title: 'Bootstrap/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    now: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
    striped: { control: 'boolean' },
    animated: { control: 'boolean' },
    visuallyHidden: { control: 'boolean' },
  },
};

export const Basic = {
  args: {
    now: 60,
  },
};

export const WithLabel = {
  args: {
    now: 60,
    label: '60%',
  },
};

export const Success = {
  args: {
    now: 40,
    variant: 'success',
  },
};

export const Warning = {
  args: {
    now: 60,
    variant: 'warning',
  },
};

export const Danger = {
  args: {
    now: 80,
    variant: 'danger',
  },
};

export const Striped = {
  args: {
    now: 70,
    variant: 'info',
    striped: true,
  },
};

export const Animated = {
  args: {
    now: 75,
    variant: 'success',
    striped: true,
    animated: true,
  },
};