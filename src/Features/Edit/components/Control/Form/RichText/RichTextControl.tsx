import React, { useCallback, useState } from 'react';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { IApiControl } from '../../../../types';
import { RichTextControlStyled } from './RichTextControl.style';
import { ControlLabel } from '../ControlLabel';
import { Button, Grid } from '@mui/material';
import { saveEditor } from './apiRoutes/saveEditor';
import { IUser, security } from '../../../../../../Packages/Security';
import { FormError } from '../../../../../../Packages/Design/components';

interface IProps {
  control: IApiControl;
  fileId: string;
}

export const RichTextControl: React.FC<IProps> = ({ control, fileId }) => {
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();
  const [message, setMessage] = useState<string | null>(null);
  const [editorState, setEditorState] = useState(() =>
    control.rich_text_detail
      ? EditorState.createWithContent(convertFromRaw(control.rich_text_detail))
      : EditorState.createEmpty(),
  );

  const handleEditorChange = useCallback(
    (state: any) => {
      setEditorState(state);
      const editorContentConvertedToRaws = convertToRaw(
        editorState.getCurrentContent(),
      );
      saveEditor(
        fileId,
        control,
        editorContentConvertedToRaws,
        jwt,
        setMessage,
      );
    },
    [control, editorState, jwt, fileId],
  );

  return (
    <Grid item xs={6}>
      <RichTextControlStyled>
        <ControlLabel control={control} />
        <Button
          disableRipple
          disableTouchRipple
          disableFocusRipple
          sx={{
            '&.MuiButtonBase-root': {
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              padding: '10px',
              margin: '0',
              opacity: `${control.editable ? '1' : '0.5'}`,
              fontSize: 'initial',
              textTransform: 'initial',
              color: 'initial',
              cursor: 'initial',
            },
            '&.MuiButtonBase-root:hover': {
              backgroundColor: 'white',
            },
          }}
          disabled={!control.editable}
          id={`mask-id${control.control_id}`}
        >
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
          />
          {message ? (
            <p>
              <FormError>{message}</FormError>
            </p>
          ) : null}
        </Button>
      </RichTextControlStyled>
    </Grid>
  );
};
