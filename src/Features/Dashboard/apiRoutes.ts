import { apiRouter, getEnv } from 'Services';
import { ICard, ICardBodyRow, ICardFooter, ICardHeader } from './components/Card/types';

interface IApiStage {
  nb_file_stage: number;
  stage_id: number;
  stage_name: string;
}

interface IApiFile {
  nb_file_state: number;
  stages: IApiStage[];
  state_color: string;
  state_id: number;
  state_name: string;
  state_role: number;
}

apiRouter.registerRoute({
  name: 'dashboard',
  path: '/dashboard',
  method: 'get',
  queries: {
    cli_id: getEnv('CLIENT_ID'),
    user_id: 1,
  },
  handler: (data) => {
    const files: IApiFile[] = data.data;

    const cards: ICard[] = [];

    files.map((file) => {
      const cardHeader: ICardHeader = {
        children: file.nb_file_state + ' ' + file.state_name,
        color: file.state_color,
      };

      const cardFooter: ICardFooter = {
        state: file.state_id,
        role: file.state_role,
        children: file.nb_file_state + ' ' + file.state_name,
        color: file.state_color,
      };

      const cardBodyRows: ICardBodyRow[] = [];

      file.stages.map((stage) => {
        cardBodyRows.push({
          stage: stage.stage_id,
          text: 'file',
          count: stage.nb_file_stage,
          color: file.state_color,
          stageName: stage.stage_name,
          state: file.state_id,
          role: file.state_role,
        });

        return stage;
      });

      cards.push({
        header: cardHeader,
        body: {
          data: cardBodyRows,
        },
        footer: cardFooter,
      });

      return file;
    });

    return cards;
  },
});
