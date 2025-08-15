import { fn } from 'storybook/test';
import { Modal } from './Modal';

export default {
  title: 'Bootstrap/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'lg', 'xl'],
    },
    backdrop: {
      control: { type: 'select' },
      options: [true, false, 'static'],
    },
    centered: { control: 'boolean' },
    keyboard: { control: 'boolean' },
  },
  args: {
    onHide: fn(),
    show: true,
  },
};

export const Basic = {
  args: {
    title: 'Modal Title',
    body: 'This is a basic modal with a title and body text.',
    primaryButton: 'Save Changes',
    secondaryButton: 'Close',
  },
};

export const Large = {
  args: {
    title: 'Large Modal',
    body: 'This is a large modal. It has more space for content.',
    size: 'lg',
    primaryButton: 'Save Changes',
    secondaryButton: 'Close',
  },
};

export const Small = {
  args: {
    title: 'Small Modal',
    body: 'This is a small modal.',
    size: 'sm',
    primaryButton: 'OK',
  },
};

export const Centered = {
  args: {
    title: 'Centered Modal',
    body: 'This modal is vertically centered on the page.',
    centered: true,
    primaryButton: 'Save Changes',
    secondaryButton: 'Close',
  },
};

export const StaticBackdrop = {
  args: {
    title: 'Static Backdrop',
    body: 'This modal has a static backdrop. Clicking outside will not close it.',
    backdrop: 'static',
    keyboard: false,
    primaryButton: 'Close',
  },
};

export const WithoutButtons = {
  args: {
    title: 'Modal Without Buttons',
    body: 'This modal has no footer buttons. It can only be closed with the X button.',
  },
};