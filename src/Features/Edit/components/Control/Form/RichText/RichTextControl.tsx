import React, { useCallback, useEffect, useState } from 'react';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { IApiControl } from '../../../../types';
import { RichTextControlStyled } from './RichTextControl.style';
import { ControlLabel } from '../ControlLabel';
import { Grid } from '@mui/material';
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
  const [editorState, setEditorState] = useState<EditorState>(() =>
    control.rich_text_detail
      ? EditorState.createWithContent(convertFromRaw(control.rich_text_detail))
      : EditorState.createEmpty(),
  );

  const handleEditorChange = useCallback((state: EditorState) => {
    setEditorState(state);
  }, []);

  const handleSaveEditor = useCallback(() => {
    const editorContentConvertedToRaws = convertToRaw(
      editorState.getCurrentContent(),
    );
    saveEditor(fileId, control, editorContentConvertedToRaws, jwt, setMessage);
  }, [control, jwt, fileId, editorState]);

  useEffect(() => {
    if (control.mandatory && control.editable) {
      setMessage('Valeur obligatoire');
    }
    if (!control.mandatory) {
      setMessage(null);
    }
  }, [control.mandatory, control.editable]);

  return (
    <Grid item xs={12}>
      <RichTextControlStyled>
        <ControlLabel control={control} />
        <Editor
          toolbarHidden={!control.editable}
          editorState={editorState}
          defaultEditorState={editorState}
          onEditorStateChange={handleEditorChange}
          onBlur={handleSaveEditor}
          wrapperStyle={{
            border: `1px solid black`,
            padding: '.5em',
            borderRadius: '5px',
            opacity: !control.editable ? '0.5' : '1',
          }}
          readOnly={!control.editable}
          placeholder={control.control_title}
        />
        {message ? (
          <p>
            <FormError>{message}</FormError>
          </p>
        ) : null}
      </RichTextControlStyled>
    </Grid>
  );
};
