import React, { useContext } from 'react';
import { IComplianceData } from 'Features/Edit/types';
import { EditValidationContext } from 'Features/Edit';
import { CommentCompliance } from './FormCompliance/CommentCompliance/CommentCompliance';
import { DateCompliance } from './FormCompliance/DateCompliance/DateCompliance';
import { FinancialCompliance } from './FormCompliance/FinancialCompliance/FinancialCompliance';
import { TextCompliance } from './FormCompliance/TextCompliance/TextCompliance';
import { SelectListCompliance } from './FormCompliance/SelectListCompliance/SelectListCompliance';
import { IntegerCompliance } from './FormCompliance/IntegerCompliance/IntegerCompliance';
import { PercentCompliance } from './FormCompliance/PercentCompliance/PercentCompliance';
import { UploadCompliance } from './FormCompliance/UploadCompliance/UploadCompliance';

interface IProps {
  compliance: IComplianceData;
  controlId: string;
}

export const SwitchControlCompliance: React.FC<IProps> = ({ compliance, controlId }): React.ReactElement | null => {
  const { fileId } = useContext(EditValidationContext);

  switch (compliance.type) {
    case 'text':
      return <TextCompliance compliance={compliance} fileId={fileId} controlId={controlId} />;
    case 'selectlist':
      return <SelectListCompliance compliance={compliance} fileId={fileId} controlId={controlId} />;
    case 'financial':
      return <FinancialCompliance compliance={compliance} fileId={fileId} controlId={controlId} />;
    case 'integer':
      return <IntegerCompliance compliance={compliance} fileId={fileId} controlId={controlId} />;
    case 'date':
      return <DateCompliance compliance={compliance} fileId={fileId} controlId={controlId} />;
    case 'comment':
      return <CommentCompliance compliance={compliance} fileId={fileId} controlId={controlId} />;
    case 'percent':
      return <PercentCompliance compliance={compliance} fileId={fileId} controlId={controlId} />;
    case 'file_upload':
      return <UploadCompliance compliance={compliance} fileId={fileId} controlId={controlId} />;
  }

  return null;
};
