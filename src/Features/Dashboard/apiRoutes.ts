import _ from 'lodash';

import { apiRouter, getEnv } from 'Services';
import { ICard, ICardBodyRow, ICardFooter, ICardHeader } from './components/Card/types';

interface IApiState {
  state_id: number;
  state_role: number;
  state_name: string;
}

interface IApiStage {
  stage_id: number;
  stage_name: string;
}

const getColor = (state: IApiState): string => {
  if (state.state_id === 1 && state.state_role === 0) {
    return '#007E33';
  }

  if (state.state_id === 2 && state.state_role === 0) {
    return '#FF8800';
  }

  if (state.state_id === 2 && state.state_role === 1) {
    return '#9D65C9';
  }

  return '#CC0000';
};

apiRouter.registerRoute({
  name: 'dashboard',
  path: '/dashboard',
  method: 'get',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: 2,
  },
  handler: (data) => {
    const folders = data.dashboard.dossier;
    const stages: IApiStage[] = data.dashboard.stage;
    const states: IApiState[] = data.dashboard.state;

    const cards: ICard[] = [];

    states.map((state) => {
      const color = getColor(state);

      const cardHeader: ICardHeader = {
        children: state.state_name,
        color,
      };
      const cardBodyRows: ICardBodyRow[] = [];

      const cardFooter: ICardFooter = {
        state: state.state_id,
        role: state.state_role,
        children: state.state_name,
        color,
      };

      const filteredFolders = _.filter(folders, { state_id: state.state_id, state_role: state.state_role });

      stages.map((stage) => {
        const stageFolders = _.filter(filteredFolders, { stage_id: stage.stage_id });

        const count = stageFolders.length;

        if (count > 0) {
          cardBodyRows.push({
            stage: stage.stage_id,
            text: 'file',
            count,
            color,
            stageName: stage.stage_name,
          });
        }

        return stage;
      });

      cards.push({
        header: cardHeader,
        body: {
          data: cardBodyRows,
        },
        footer: cardFooter,
      });

      return state;
    });

    return cards;
  },
});
