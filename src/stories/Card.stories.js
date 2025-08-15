import { Card } from './Card';

export default {
  title: 'Bootstrap/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
    border: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
    imagePosition: {
      control: { type: 'select' },
      options: ['top', 'bottom'],
    },
  },
};

export const Basic = {
  args: {
    title: 'Card Title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
};

export const WithSubtitle = {
  args: {
    title: 'Card Title',
    subtitle: 'Card subtitle',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
};

export const WithImage = {
  args: {
    title: 'Card Title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    image: 'https://via.placeholder.com/286x180?text=Card+Image',
  },
};

export const ImageBottom = {
  args: {
    title: 'Card Title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    image: 'https://via.placeholder.com/286x180?text=Card+Image',
    imagePosition: 'bottom',
  },
};

export const PrimaryVariant = {
  args: {
    title: 'Primary Card',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    variant: 'primary',
  },
};

export const BorderVariant = {
  args: {
    title: 'Card Title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    border: 'success',
  },
};

export const InteractiveCard = {
  args: {
    title: 'Clickable Card',
    text: 'This card is interactive and can be clicked or activated with the keyboard.',
    onClick: () => {},
    ariaLabel: 'Open product details',
  },
};