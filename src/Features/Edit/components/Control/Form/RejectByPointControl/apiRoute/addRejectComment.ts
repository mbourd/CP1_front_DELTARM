import axios from 'axios';
import { getEnv } from '../../../../../../../Packages/Helpers';
import { IApiFileComment, IFileComment } from '../../../../../../Comments';
import React from 'react';

export const addRejectComment = (
  fileId: string,
  controlId: string,
  jwt: string | null,
  value: string,
  setRejectComments: React.Dispatch<React.SetStateAction<IFileComment[]>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  setInputCommentValue: React.Dispatch<React.SetStateAction<string>>,
) => {
  axios
    .post(
      `${getEnv('API_PROTOCOL')}://${getEnv(
        'API_HOST',
      )}/control/reject/comment?file_id=${fileId}&elm_id=${controlId}&reject_comment=${value}`,
      {},
      {
        headers: {
          Authorization: jwt,
          'Content-type': 'application/json',
        },
      },
    )
    .then((response) => {
      const rejectComments: IFileComment[] = [];
      if (response.data.comment_list) {
        response.data.comment_list.map((datum: IApiFileComment) => {
          const date = new Date(datum.comment_ts);

          rejectComments.push({
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

        return rejectComments;
      }
      setRejectComments(rejectComments);
      setError('');
      setInputCommentValue('');
    })
    .catch((err) => {
      if (err?.response?.data?.error_msg) {
        setError(err?.response?.data?.error_msg);
      }
    });
};
