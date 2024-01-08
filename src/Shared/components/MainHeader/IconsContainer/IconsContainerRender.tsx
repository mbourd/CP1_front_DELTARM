import React from 'react';
import { BPITooltip } from 'Shared/components';
import { FileIcon, PlayerIcon } from 'Styles';
import { useTrans } from 'Services';
import { IconsContainerStyled } from './IconsContainer.style';

type IconsContainerRenderProps = {
  interfaceButtons: Record<any, any>;
};

export const IconsContainerRender: React.FC<IconsContainerRenderProps> = ({
  interfaceButtons,
}): React.ReactElement => {
  const [trans] = useTrans('MainHeader');

  return (
    <IconsContainerStyled>
      {interfaceButtons?.aiv.visible && (
        <BPITooltip title={trans('reports')}>
          <a
            href={interfaceButtons.aiv.url}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            <FileIcon fontSize={'large'} />
          </a>
        </BPITooltip>
      )}
      {interfaceButtons?.faq.visible && (
        <BPITooltip title={trans('F.A.Q')}>
          <a
            href={interfaceButtons.faq.url}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            <PlayerIcon fontSize={'large'} />
          </a>
        </BPITooltip>
      )}
    </IconsContainerStyled>
  );
};
