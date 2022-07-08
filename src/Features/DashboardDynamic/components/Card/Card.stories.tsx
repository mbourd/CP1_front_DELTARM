import React from 'react';
import { Card } from './Card';

export default {
  title: 'Card',
  component: Card,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <Card {...args} />;
};

export const CardDashboard = Template.bind({});
CardDashboard.args = {
  card: {
    cols: {
      header_visible: true,
      values: [
        {
          border_right: true,
          label: 'Contrôle',
          width: 900,
          dataKey: 'Contrôle',
        },
        {
          border_right: false,
          label: 'Etat',
          width: 100,
          dataKey: 'etat',
        },
        {
          border_right: false,
          label: '+',
          width: 100,
          dataKey: 'plus',
        },
        {
          border_right: true,
          label: 'BI',
          width: 100,
          dataKey: 'bi',
        },
        {
          border_right: false,
          label: 'Fini',
          width: 100,
          dataKey: 'fini',
        },
      ],
    },
    lines: {
      border_bottom: true,
      values: [
        {
          id: 1,
          item: [
            {
              action: null,
              content:
                'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site A - M1</p>' +
                'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site A - M1</p>' +
                'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site A - M1</p>' +
                'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site A - M1</p>' +
                'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site A - M1</p>',
              hint: 'TOOOOOOO',
              icon: '',
            },
            {
              action: null,
              content: null,
              hint: null,
              icon: {
                color: 'red',
                ref: 'SentimentVeryDissatisfied',
                size: 12,
              },
            },
            {
              action: {
                route: '/file/add_new_fil?&control_id=1&period_id=M1',
                target: 'modal',
              },
              content: null,
              hint: 'Ajouter un dossier contrôlé',
              icon: {
                color: '#3248a8',
                ref: 'CreateNewFolder',
                size: 12,
              },
            },
            {
              action: {
                route: '/file/aiv-v5/url_aiv?control_id=1&period_id=M1',
                target: 'blank',
              },
              content: null,
              hint: 'Ouvrir Reporting',
              icon: {
                color: '#333333',
                ref: 'Assessment',
                size: 12,
              },
            },
            {
              action: {
                route: '/control/end_period_control?control_id=1&period_id=M1',
                target: 'modal',
              },
              content: null,
              hint: 'Clôturer la période de déclaration de ce contrôle',
              icon: {
                color: '#f5c0b5',
                ref: 'HighlightOff',
                size: 12,
              },
            },
          ],
          height: 300,
        },
        {
          id: 2,
          item: [
            {
              action: null,
              content:
                'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - M1</p>',
              hint: null,
              icon: null,
            },
            {
              action: null,
              content: null,
              hint: null,
              icon: {
                color: 'orange',
                ref: 'SentimentDissatisfied',
                size: 12,
              },
            },
            {
              action: {
                route: '/file/add_new_file?control_id=2&period_id=M1',
                target: 'modal',
              },
              content: null,
              hint: 'Ajouter un dossier contrôlé',
              icon: {
                color: '#3248a8',
                ref: 'CreateNewFolder',
                size: 12,
              },
            },
            {
              action: {
                route: '/file/aiv-v5/url_aiv?control_id=2&period_id=M1',
                target: 'blank',
              },
              content: null,
              hint: 'Ouvrir Reporting',
              icon: {
                color: '#333333',
                ref: 'Assessment',
                size: 12,
              },
            },
            {
              action: {
                route: '/control/end_period_control?control_id=2&period_id=M1',
                target: 'modal',
              },
              content: null,
              hint: 'Clôturer la période de déclaration de ce contrôle',
              icon: {
                color: '#f5c0b5',
                ref: 'HighlightOff',
                size: 12,
              },
            },
          ],
        },
        // {
        //   id: 3,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site A - T3</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 3',
        //       icon: {
        //         color: 'green',
        //         ref: 'Mood',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=3&period_id=T3',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=3&period_id=T3',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=3&period_id=T3',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: 'Totot la ifffff',
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   item: [
        //     {
        //       action: null,
        //       content:
        //         'Contrôler la conformité statutaire de la tenue des instances (Périmètre SCI) - <p style="color:red; font-weight:bold;">Site B - T4</p>',
        //       hint: null,
        //       icon: null,
        //     },
        //     {
        //       action: null,
        //       content: null,
        //       hint: 'Smiley 4',
        //       icon: {
        //         color: 'orange',
        //         ref: 'SentimentDissatisfied',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/add_new_file?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Ajouter un dossier contrôlé',
        //       icon: {
        //         color: '#3248a8',
        //         ref: 'CreateNewFolder',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/file/aiv-v5/url_aiv?control_id=4&period_id=T4',
        //         target: 'blank',
        //       },
        //       content: null,
        //       hint: 'Ouvrir Reporting',
        //       icon: {
        //         color: '#333333',
        //         ref: 'Assessment',
        //         size: 12,
        //       },
        //     },
        //     {
        //       action: {
        //         route: '/control/end_period_control?control_id=4&period_id=T4',
        //         target: 'modal',
        //       },
        //       content: null,
        //       hint: 'Clôturer la période de déclaration de ce contrôle',
        //       icon: {
        //         color: '#f5c0b5',
        //         ref: 'HighlightOff',
        //         size: 12,
        //       },
        //     },
        //   ],
        // },
      ],
    },
    title: {
      bg_color: '#ABCDEF',
      font_color: '#DA70D6',
      lib: '4 Contrôles à réaliser',
    },
  },
};
