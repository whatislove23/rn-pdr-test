import { OtpInput as BaseOtpInput } from 'react-native-otp-entry';
import { FC } from 'react';

export interface OtpInputProps {
  digits?: number;
  onChange: (otp: string) => void;
}
export const OtpInput: FC<OtpInputProps> = ({ digits = 6, onChange }) => {
  return <BaseOtpInput numberOfDigits={digits} onTextChange={onChange} />;
};
