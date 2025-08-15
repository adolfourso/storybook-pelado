import { Breadcrumb } from './Breadcrumb';

export default {
  title: 'Bootstrap/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export const Basic = {
  args: {
    items: [
      { text: 'Home', href: '#' },
      { text: 'Library', href: '#' },
      { text: 'Data', active: true },
    ],
  },
};

export const WithClickHandlers = {
  args: {
    items: [
      { text: 'Home', onClick: () => {} },
      { text: 'Components', onClick: () => {} },
      { text: 'Breadcrumb', active: true },
    ],
  },
};

export const Simple = {
  args: {
    items: [
      { text: 'Home', href: '#' },
      { text: 'Current Page', active: true },
    ],
  },
};

export const LongPath = {
  args: {
    items: [
      { text: 'Home', href: '#' },
      { text: 'Category', href: '#' },
      { text: 'Subcategory', href: '#' },
      { text: 'Product Type', href: '#' },
      { text: 'Current Item', active: true },
    ],
  },
};