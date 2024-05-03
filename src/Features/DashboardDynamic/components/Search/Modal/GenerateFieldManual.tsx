import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { FormLabel, Select } from '../../../../../Packages/Design/components';
import { Input } from '@mui/material';

interface IProps {
  field: any;
  handleLeaveField: (event: any) => void;
  setListMissingField: (values: Record<string, true>, key: any) => void;
  control: Control<Record<string, any>>;
}
export const GenerateFieldManual: React.FC<React.PropsWithChildren<IProps>> = ({
  field,
  handleLeaveField,
  setListMissingField,
  control,
}): React.ReactElement | null => {
  switch (field.type) {
    case 'select_list':
      return (
        <Controller
          render={() => (
            <div className={'missing-fields'} key={field.id}>
              <FormLabel>{field.label}</FormLabel>
              <Select
                name={field.key}
                data={field.option}
                multiple={false}
                selectedValues={{
                  [Object.keys(field.option)[0] || '-1']: true,
                }}
                onInit={setListMissingField}
                onClose={setListMissingField}
                closeOnSelect
              >
                {field.label}
              </Select>
            </div>
          )}
          rules={{
            pattern: field.format,
          }}
          control={control}
          name={field.key}
          key={field.order}
          defaultValue={''}
        />
      );
    case 'float':
      return (
        <Controller
          render={() => (
            <div className={'missing-fields'} key={field.id}>
              <FormLabel>{field.label}</FormLabel>
              <div className={'missing-field'}>
                <Input
                  name={field.key}
                  type={'number'}
                  onChange={handleLeaveField}
                  placeholder={field.label}
                />
              </div>
            </div>
          )}
          rules={{
            pattern: field.format,
          }}
          control={control}
          name={field.key}
          key={field.order}
          defaultValue={''}
        />
      );
    case 'string':
      return (
        <Controller
          render={() => (
            <div className={'missing-fields'} key={field.id}>
              <FormLabel>{field.label}</FormLabel>
              <div className={'missing-field'}>
                <Input
                  name={field.key}
                  type={'text'}
                  onChange={handleLeaveField}
                  placeholder={field.label}
                />
              </div>
            </div>
          )}
          rules={{
            pattern: field.format,
          }}
          control={control}
          name={field.key}
          key={field.order}
          defaultValue={''}
        />
      );
  }

  return null;
};
