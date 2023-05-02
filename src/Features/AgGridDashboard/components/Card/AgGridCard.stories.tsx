import React from 'react';
import { AgGridCard } from './AgGridCard';

export default {
  title: 'AgGridCard',
  component: AgGridCard,
  decorators: [(story: any) => <div className="p-6">{story()}</div>],
};

const Template: any = (args: any) => {
  return <AgGridCard {...args} />;
};

export const AgCardDashboard = Template.bind({});
AgCardDashboard.args = {
  card: {
    cols: {
      header_visible: true,
      values: [
        {
          field: 'Contrôle',
          headerName: 'Contrôle',
          width: 450,
          cellStyle: { borderRightColor: 'yellow' },
          comparator: 'StrippedHTMLComparator',
          filter: 'GenericCardResearcher',
        },
        {
          field: 'Période',
          headerName: 'Période',
          width: 120,
          cellStyle: { borderRightColor: 'green' },
          comparator: 'StrippedHTMLComparator',
          filter: 'GenericCardResearcher',
        },
        {
          field: 'Dernier',
          headerName: 'Dernier',
          width: 85,
          cellStyle: { borderRightColor: '#e2e2e2' },
        },
        {
          field: 'Nouveau',
          headerName: 'Nouveau',
          width: 85,
          cellStyle: { borderRight: 'none' },
        },
        {
          field: 'Liste',
          headerName: 'Liste',
          width: 60,
          cellStyle: { borderRightColor: 'red' },
        },
      ],
    },
    lines: [
      {
        border_bottom: 'green',
        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        border_bottom: '#000000',
        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        border_bottom: true,
        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/06/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        border_bottom: true,

        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        border_bottom: true,

        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        border_bottom: true,

        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT RECHERCHE</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/01/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        border_bottom: true,

        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">A La fonction de tri</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        border_bottom: true,

        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        border_bottom: true,

        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        border_bottom: true,

        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        border_bottom: true,
        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        border_bottom: true,
        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        border_bottom: true,

        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        border_bottom: true,

        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        border_bottom: true,

        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">ASERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
      {
        Contrôle: {
          action: null,
          content:
            '<p style="color:#5a4749; font-weight:bold;">SERVICE PARTENARIAT GARANTIE & APPUI RESEAU</p>LOD1_0001-Contrôle de la mise en œuvre d\'un produit affacturage en con...',
          hint: "Contrôle de la mise en œuvre d'un produit affacturage en contrat de garantie",
          icon: null,
        },
        Période: {
          action: null,
          content: '09/05/22',
          hint: 'Dernière Saisie le 09/05/22 par Nicolas Mullier',
          icon: null,
        },
        Dernier: {
          action: null,
          content: null,
          hint: 'Très Satisfaisant (100%)',
          icon: {
            color: '#00B456',
            ref: 'SentimentVerySatisfied',
            size: 12,
          },
        },
        Nouveau: {
          action: {
            endpoint: '/edit/new_ctrl_file',
            method: 'GET',
            params: {
              cp_uuid: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Nouvelle Saisie',
          icon: {
            color: '#66499c',
            ref: 'CreateNewFolder',
            size: 12,
          },
        },
        Liste: {
          action: {
            endpoint: '/contr_perm/get_search_ctrl_done',
            method: 'GET',
            params: {
              value: 'cca956fc-82da-48f1-9bfe-26af20672888',
            },
          },
          content: null,
          hint: 'Liste des contrôles',
          icon: {
            color: '#66499c',
            ref: 'Assessment',
            size: 12,
          },
        },
      },
    ],
    title: {
      bg_color: '#2ECC71',
      font_color: 'blue',
      lib: 'Contracts in progress',
    },
  },
};
