import { EducFooter } from './Footer';

export default {
  title: 'Educ.ar/Layout/Footer',
  component: EducFooter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Footer component inspired by educ.ar design. Includes institutional links, social media, contact information, and government branding.'
      }
    }
  },
  argTypes: {
    siteName: {
      control: 'text',
      description: 'Site name displayed in footer'
    },
    logo: {
      control: 'object',
      description: 'Logo component or content'
    },
    institutionalLinks: {
      control: 'object',
      description: 'Array of institutional navigation links'
    },
    quickLinks: {
      control: 'object',
      description: 'Array of quick access links'
    },
    socialLinks: {
      control: 'object',
      description: 'Array of social media links'
    },
    contactInfo: {
      control: 'object',
      description: 'Contact information object'
    },
    showGovernmentBranding: {
      control: 'boolean',
      description: 'Show/hide government branding'
    },
    copyrightYear: {
      control: 'number',
      description: 'Copyright year'
    },
    variant: {
      control: 'select',
      options: ['default', 'minimal', 'dark'],
      description: 'Visual variant of the footer'
    }
  }
};

// Default story
export const Default = {
  args: {
    siteName: 'educ.ar',
    showGovernmentBranding: true,
    variant: 'default',
    copyrightYear: new Date().getFullYear()
  }
};

// Minimal variant
export const Minimal = {
  args: {
    ...Default.args,
    variant: 'minimal',
    showGovernmentBranding: false,
    institutionalLinks: [
      { label: 'Acerca de', url: '/acerca' },
      { label: 'Contacto', url: '/contacto' },
      { label: 'Términos', url: '/terminos' }
    ],
    quickLinks: [
      { label: 'Recursos', url: '/recursos' },
      { label: 'Novedades', url: '/novedades' }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal footer variant with light background and reduced content.'
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
        story: 'Dark footer variant with black background.'
      }
    }
  }
};

// Without government branding
export const WithoutGovernmentBranding = {
  args: {
    ...Default.args,
    showGovernmentBranding: false,
    siteName: 'Mi Sitio Educativo'
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer without government branding for non-official sites.'
      }
    }
  }
};

// Custom contact info
export const CustomContactInfo = {
  args: {
    ...Default.args,
    contactInfo: {
      address: 'Av. Corrientes 1234, CABA',
      phone: '+54 11 1234-5678',
      email: 'contacto@mieducacion.ar'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer with custom contact information.'
      }
    }
  }
};

// Educational levels links
export const EducationalLevels = {
  args: {
    ...Default.args,
    quickLinks: [
      { label: 'Educación Inicial', url: '/inicial' },
      { label: 'Educación Primaria', url: '/primaria' },
      { label: 'Educación Secundaria', url: '/secundaria' },
      { label: 'Educación Superior', url: '/superior' },
      { label: 'Educación Especial', url: '/especial' },
      { label: 'Educación de Adultos', url: '/adultos' }
    ],
    institutionalLinks: [
      { label: 'Ministerio de Educación', url: '/ministerio' },
      { label: 'Marco Legal', url: '/marco-legal' },
      { label: 'Estadísticas Educativas', url: '/estadisticas' },
      { label: 'Formación Docente', url: '/formacion-docente' }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer with educational system specific navigation links.'
      }
    }
  }
};

// No social media
export const WithoutSocialMedia = {
  args: {
    ...Default.args,
    socialLinks: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer without social media links for simpler layouts.'
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
        story: 'Footer in mobile view showing responsive stacked layout.'
      }
    }
  }
};