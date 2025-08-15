import { EducButton } from './EducButton';

export default {
  title: 'Educ.ar/UI/Button',
  component: EducButton
};

export const Default = {
  args: {
    children: 'Acceder a recursos',
    variant: 'primary',
    size: 'medium',
    color: 'blue',
    shadow: true
  }
};

export const Orange = {
  args: {
    children: 'Boton Naranja',
    variant: 'primary',
    size: 'medium',
    color: 'orange',
    shadow: true
  }
};

export const Outline = {
  args: {
    children: 'Boton Contorneado',
    variant: 'outline',
    size: 'medium',
    color: 'blue'
  }
};