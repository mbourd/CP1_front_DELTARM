import { apiRouter } from 'Services';
import { IFileComment } from './types';

interface IApiFileComment {
  comment_id: number;
  comment_text: string;
  comment_ts: string;
  comment_user_name: string;
}

apiRouter.registerRoute({
  name: 'getFileComments',
  path: '/comment/file',
  method: 'get',
  handler: (response): IFileComment[] => {
    const data: IApiFileComment[] = response.data;
    const comments: IFileComment[] = [];

    data.map((datum) => {
      const date = new Date(datum.comment_ts);

      comments.push({
        id: datum.comment_id,
        message: datum.comment_text,
        date:
          date.getDate() +
          '/' +
          (date.getMonth() + 1) +
          '/' +
          date.getFullYear() +
          ' à ' +
          date.getHours() +
          ':' +
          date.getMinutes() +
          ':' +
          date.getSeconds(),
        user: datum.comment_user_name,
      });

      return datum;
    });

    return comments;
  },
});

apiRouter.registerRoute({
  name: 'addComment',
  path: '/comment/add',
  method: 'post',
  handler: (response): IFileComment => {
    const data: IApiFileComment = response.data;
    const date = new Date(data.comment_ts);

    return {
      id: data.comment_id,
      message: data.comment_text,
      date:
        date.getDate() +
        '/' +
        (date.getMonth() + 1) +
        '/' +
        date.getFullYear() +
        ' à ' +
        date.getHours() +
        ':' +
        date.getMinutes() +
        ':' +
        date.getSeconds(),
      user: data.comment_user_name,
    };
  },
});
