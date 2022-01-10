import { IDataModal } from './components/types';

export const genericErrorsData: IDataModal = {
  target: 'modal',
  title: 'Une erreur est intervenue.',
  subtitle: 'Veuillez réessayer.',
  img: 'https://s3-drm-cp1.s3.eu-west-3.amazonaws.com/ressources/images/server.svg',
  content: [
    // {
    //   element: 'p',
    //   attribute: null,
    //   value:
    //     "Une erreur est intervenue durant le traitement de l'opération, veuillez réessayer.",
    // },
  ],
  btn: [
    {
      bg_color: 'red',
      font_color: 'white',
      hover_color: 'white',
      btn_lib: 'Fermer',
      action: { method: 'CANCEL', endpoint: '/', params: null },
    },
  ],
};
