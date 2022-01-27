import { between } from '../src/between';

describe('test the between function', () => {
  it('should return true when given number is within the range', () => {
    const control = {
      control_desc1: null,
      control_desc2: null,
      control_editable: true,
      editable: true,
      control_family: 'standard',
      control_id: '1929',
      isConditional: false,
      isCalculated: false,
      manageCompliance: false,
      control_mandatory: false,
      control_previous_value: null,
      control_regex: null,
      control_regex_msg: null,
      control_title: 'Decimal control',
      control_type: 'decimal',
      control_value: 150.23123443,
      control_options: {
        min: 0,
        max: 100,
        unit: 'metres',
        precision: 2,
      },
    };
    expect(
      between(
        control.control_value,
        control.control_options.min,
        control.control_options.max,
      ),
    ).toBeFalsy();
  });
  it('should return false when given number is not within the range', () => {
    const control = {
      control_desc1: null,
      control_desc2: null,
      control_editable: true,
      editable: true,
      control_family: 'standard',
      control_id: '1929',
      isConditional: false,
      isCalculated: false,
      manageCompliance: false,
      control_mandatory: false,
      control_previous_value: null,
      control_regex: null,
      control_regex_msg: null,
      control_title: 'Decimal control',
      control_type: 'decimal',
      control_value: 50.23123443,
      control_options: {
        min: 0,
        max: 100,
        unit: 'metres',
        precision: 2,
      },
    };
    expect(
      between(
        control.control_value,
        control.control_options.min,
        control.control_options.max,
      ),
    ).toBeTruthy();
  });
});
