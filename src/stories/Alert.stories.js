import { Alert } from './Alert';

export default {
  title: 'Bootstrap/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
    dismissible: { control: 'boolean' },
    show: { control: 'boolean' },
  },
  args: {
    onClose: () => {},
    children: 'This is an alert message',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'A simple primary alert—check it out!',
  },
};

export const Success = {
  args: {
    variant: 'success',
    children: 'A simple success alert—check it out!',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    children: 'A simple danger alert—check it out!',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    children: 'A simple warning alert—check it out!',
  },
};

export const Dismissible = {
  args: {
    variant: 'info',
    dismissible: true,
    children: 'This alert can be dismissed by clicking the × button.',
  },
};

export const WithAutoFocus = {
  args: {
    variant: 'warning',
    autoFocus: true,
    ariaLabel: 'Important warning notification',
    children: 'This alert automatically receives focus for immediate attention.',
  },
};

export const AccessibilityExample = {
  args: {
    variant: 'danger',
    ariaLabel: 'Form validation error',
    children: 'Please correct the errors in the form below before submitting.',
  },
};