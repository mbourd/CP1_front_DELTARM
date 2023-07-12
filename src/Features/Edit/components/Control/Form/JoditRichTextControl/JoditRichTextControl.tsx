import React, { useState, useRef, useCallback } from 'react';
import JoditEditor from 'jodit-react';
import { IApiControl } from '../../../../types';
import { saveJoditEditor } from './apiRoutes/saveJoditEditor';
import { FormError } from '../../../../../../Packages/Design/components';
import { IUser, security } from '../../../../../../Packages/Security';
import { RejectControl } from '../RejectByPointControl/RejectControl';

interface IProps {
  control: IApiControl;
  fileId: string;
  context: 'edit' | 'validate';
}

export const JoditRichTextControl: React.FC<IProps> = ({
  control,
  fileId,
  context,
}) => {
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();
  const editor = useRef(null);
  const [message, setMessage] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(
    control.jodit_rich_text_detail ? control.jodit_rich_text_detail : null,
  );
  const [isRejected, setIsRejected] = useState(
    control.control_rejectable?.is_rejected
      ? control.control_rejectable.is_rejected
      : false,
  );

  const handleBlurContent = useCallback(
    (newContent) => {
      saveJoditEditor(fileId, control, newContent, jwt, setMessage);
    },
    [control, fileId, jwt],
  );

  const config = {
    readonly: !control.control_editable, // all options from http://rmamuzic.rs/node_modules/jodit/examples/index.html
    zIndex: 0,
    activeButtonsInReadOnly: ['fullsize', 'print', 'dots'],
    toolbarButtonSize: 'middle',
    theme: 'default',
    saveModeInCookie: false,
    spellcheck: true,
    editorCssClass: false,
    triggerChangeEvent: true,
    width: 'auto',
    height: 'auto',
    minHeight: 100,
    direction: '',
    language: 'auto',
    debugLanguage: false,
    i18n: 'en',
    tabIndex: -1,
    toolbar: true,
    enter: 'P',
    useSplitMode: false,
    colors: {
      greyscale: [
        '#000000',
        '#434343',
        '#666666',
        '#999999',
        '#B7B7B7',
        '#CCCCCC',
        '#D9D9D9',
        '#EFEFEF',
        '#F3F3F3',
        '#FFFFFF',
      ],
      palette: [
        '#980000',
        '#FF0000',
        '#FF9900',
        '#FFFF00',
        '#00F0F0',
        '#00FFFF',
        '#4A86E8',
        '#0000FF',
        '#9900FF',
        '#FF00FF',
      ],
      full: [
        '#E6B8AF',
        '#F4CCCC',
        '#FCE5CD',
        '#FFF2CC',
        '#D9EAD3',
        '#D0E0E3',
        '#C9DAF8',
        '#CFE2F3',
        '#D9D2E9',
        '#EAD1DC',
        '#DD7E6B',
        '#EA9999',
        '#F9CB9C',
        '#FFE599',
        '#B6D7A8',
        '#A2C4C9',
        '#A4C2F4',
        '#9FC5E8',
        '#B4A7D6',
        '#D5A6BD',
        '#CC4125',
        '#E06666',
        '#F6B26B',
        '#FFD966',
        '#93C47D',
        '#76A5AF',
        '#6D9EEB',
        '#6FA8DC',
        '#8E7CC3',
        '#C27BA0',
        '#A61C00',
        '#CC0000',
        '#E69138',
        '#F1C232',
        '#6AA84F',
        '#45818E',
        '#3C78D8',
        '#3D85C6',
        '#674EA7',
        '#A64D79',
        '#85200C',
        '#990000',
        '#B45F06',
        '#BF9000',
        '#38761D',
        '#134F5C',
        '#1155CC',
        '#0B5394',
        '#351C75',
        '#733554',
        '#5B0F00',
        '#660000',
        '#783F04',
        '#7F6000',
        '#274E13',
        '#0C343D',
        '#1C4587',
        '#073763',
        '#20124D',
        '#4C1130',
      ],
    },
    colorPickerDefaultTab: 'background',
    imageDefaultWidth: 300,
    removeButtons: [],
    disablePlugins: [],
    extraButtons: [],
    sizeLG: 900,
    sizeMD: 700,
    sizeSM: 400,
    buttons: [
      'source',
      '|',
      'bold',
      'strikethrough',
      'underline',
      'italic',
      '|',
      'ul',
      'ol',
      '|',
      'outdent',
      'indent',
      '|',
      'font',
      'fontsize',
      'brush',
      'paragraph',
      '|',
      'image',
      'table',
      'link',
      '|',
      'align',
      'undo',
      'redo',
      '|',
      'hr',
      'eraser',
      'copyformat',
      '|',
      'symbol',
      'fullsize',
      'print',
    ],
    buttonsXS: [
      'bold',
      'image',
      '|',
      'brush',
      'paragraph',
      '|',
      'align',
      '|',
      'undo',
      'redo',
      '|',
      'eraser',
      'dots',
    ],
    events: {},
    textIcons: false,
  };

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content ? content : ''}
        config={config}
        onBlur={handleBlurContent} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => setContent(newContent)}
      />
      {message ? (
        <p>
          <FormError>{message}</FormError>
        </p>
      ) : null}
      {control.useRejection && control.control_rejectable && (
        <RejectControl
          isRejected={isRejected}
          setIsRejected={setIsRejected}
          controlId={control.control_id}
          context={context}
          controlRejectable={control.useRejection}
        />
      )}
    </>
  );
};
