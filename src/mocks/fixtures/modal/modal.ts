export default {
  target: 'modal',
  title: 'le titre',
  subtitle: 'subtitle',
  img: '/to/be/defined',
  content: [
    {
      element: 'p',
      attribute: null,
      value: 'Le texte a afficher',
    },
    // {
    //   element: 'input',
    //   attribute: {
    //     type: 'text',
    //     id: 'id',
    //     placeholder: "Merci d'indiquer ....",
    //   },
    //   value: null,
    // },
    // {
    //   element: 'input',
    //   attribute: {
    //     type: 'textarea',
    //     id: 'id',
    //     placeholder: "Merci d'indiquer ....",
    //   },
    //   value: 'totot',
    // },
    // {
    //   element: 'select',
    //   attribute: {
    //     id: 'id',
    //     option: [
    //       { id: 1, value: 'Choix 1' },
    //       { id: 2, value: 'Choix 2' },
    //       { id: 3, value: 'Choix 3' },
    //     ],
    //   },
    //   value: null,
    // },
    // {
    //   element: 'table',
    //   attribute: null,
    //   value: {
    //     row: {
    //       value: [
    //         {
    //           cell: {
    //             value: [
    //               {
    //                 type: 'text',
    //                 value: 'CTR019/00',
    //               },
    //               {
    //                 type: 'text',
    //                 value: 'DELCOURT FERROVIAIRE',
    //               },
    //               {
    //                 type: 'btn',
    //                 action: {
    //                   method: 'GET',
    //                   endpoint: '/edit',
    //                   params: {
    //                     file_id: 'uuid',
    //                   },
    //                 },
    //               },
    //             ],
    //           },
    //         },
    //         {
    //           cell: {
    //             value: [
    //               {
    //                 type: 'text',
    //                 value: 'CTR019/00',
    //               },
    //               {
    //                 type: 'text',
    //                 value: 'DELCOURT FERROVIAIRE',
    //               },
    //               {
    //                 type: 'btn',
    //                 action: {
    //                   method: 'GET',
    //                   endpoint: '/edit',
    //                   params: {
    //                     file_id: 'uuid',
    //                   },
    //                 },
    //               },
    //             ],
    //           },
    //         },
    //       ],
    //     },
    //   },
    // },
  ],
  btn: [
    {
      bg_color: 'red',
      font_color: 'white',
      hover_color: '#123456',
      btn_lib: 'Annuler',
      action: { method: 'cancel', endpoint: null, params: null },
    },
  ],
};
