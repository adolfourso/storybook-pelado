import { Badge } from './Badge';

export default {
  title: 'Bootstrap/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
    pill: { control: 'boolean' },
  },
  args: {
    children: 'Badge',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Success = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Info = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

export const Pill = {
  args: {
    variant: 'primary',
    pill: true,
    children: 'Pill Badge',
  },
};