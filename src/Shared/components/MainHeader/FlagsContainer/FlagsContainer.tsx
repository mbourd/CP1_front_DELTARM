import React, { useCallback, useState } from 'react';
import { BPITooltip } from 'Shared/components';
import { FranceFlagIcon, UnitedStatesFlagIcon } from 'Styles';
import { useTrans } from 'Services';
import { FlagsContainerStyled } from './FlagsContainer.style';

export const FlagsContainer: React.FC = (): React.ReactElement => {
  const [trans, changeLanguage, currentLang] = useTrans('MainHeader');
  const [lang, setLang] = useState(currentLang);

  const toggleLanguage = useCallback(
    (language: string) => {
      setLang(language);
      changeLanguage(language);
    },
    [changeLanguage],
  );

  return (
    <FlagsContainerStyled>
      <BPITooltip title={trans('french')}>
        <span>
          <FranceFlagIcon
            className={'flags'}
            fontSize={lang === 'fr' ? 'default' : 'inherit'}
            onClick={() => toggleLanguage('fr')}
          />
        </span>
      </BPITooltip>

      <BPITooltip title={trans('english')}>
        <span>
          <UnitedStatesFlagIcon
            className={'flags'}
            fontSize={lang === 'en' ? 'default' : 'inherit'}
            onClick={() => toggleLanguage('en')}
          />
        </span>
      </BPITooltip>
    </FlagsContainerStyled>
  );
};
