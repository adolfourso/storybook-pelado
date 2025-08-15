import { EducHeader } from './Header';

export default {
  title: 'Educ.ar/Layout/Header',
  component: EducHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Header component inspired by educ.ar design. Includes navigation, search functionality, and responsive mobile menu.'
      }
    }
  },
  argTypes: {
    logo: {
      control: 'text',
      description: 'Logo text or content'
    },
    logoUrl: {
      control: 'text',
      description: 'URL for logo link'
    },
    menuItems: {
      control: 'object',
      description: 'Array of navigation menu items'
    },
    showSearch: {
      control: 'boolean',
      description: 'Show/hide search functionality'
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for search input'
    },
    variant: {
      control: 'select',
      options: ['default', 'minimal', 'dark'],
      description: 'Visual variant of the header'
    },
    sticky: {
      control: 'boolean',
      description: 'Make header sticky on scroll'
    },
    onSearch: {
      action: 'search performed',
      description: 'Callback function when search is performed'
    }
  }
};

// Default story
export const Default = {
  args: {
    logo: 'educ.ar',
    logoUrl: '/',
    showSearch: true,
    searchPlaceholder: 'Buscar recursos...',
    variant: 'default',
    sticky: false
  }
};

// Sticky header
export const Sticky = {
  args: {
    ...Default.args,
    sticky: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with sticky positioning that stays at the top when scrolling.'
      }
    }
  }
};

// Dark variant
export const Dark = {
  args: {
    ...Default.args,
    variant: 'dark'
  },
  parameters: {
    docs: {
      description: {
        story: 'Dark variant of the header for different design contexts.'
      }
    }
  }
};

// Minimal variant
export const Minimal = {
  args: {
    ...Default.args,
    variant: 'minimal',
    showSearch: false,
    menuItems: [
      { label: 'Inicio', url: '/' },
      { label: 'Recursos', url: '/recursos' },
      { label: 'Contacto', url: '/contacto' }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal header with reduced menu items and no search functionality.'
      }
    }
  }
};

// Without search
export const WithoutSearch = {
  args: {
    ...Default.args,
    showSearch: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Header without search functionality for simpler layouts.'
      }
    }
  }
};

// Custom menu items
export const CustomMenu = {
  args: {
    ...Default.args,
    menuItems: [
      { label: 'Primaria', url: '/primaria', hasDropdown: true },
      { label: 'Secundaria', url: '/secundaria', hasDropdown: true },
      { label: 'Superior', url: '/superior' },
      { label: 'Especial', url: '/especial' },
      { label: 'Adultos', url: '/adultos' },
      { label: 'Biblioteca', url: '/biblioteca' }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with custom menu items showing education level navigation.'
      }
    }
  }
};

// Mobile responsive demo
export const MobileView = {
  args: Default.args,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Header in mobile view showing responsive hamburger menu.'
      }
    }
  }
};