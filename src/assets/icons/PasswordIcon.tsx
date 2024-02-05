import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface PasswordIconProps {
  color: string;
}

const PasswordIcon = ({color}: PasswordIconProps): React.ReactElement => {
  return (
    <Svg width="15" height="18" viewBox="0 0 15 18" fill="none">
      <Path
        d="M11.9 6.57205V5.55286C11.9 2.84665 9.70621 0.652832 7 0.652832C4.29379 0.652832 2.1 2.84665 2.1 5.55283V6.57202C0.81257 7.22903 0.001575 8.55173 0 9.99713V13.4971C0.00232969 15.6225 1.72466 17.3448 3.85 17.3471H10.15C12.2753 17.3448 13.9977 15.6225 14 13.4971V9.99716C13.9985 8.55176 13.1875 7.22903 11.9 6.57205ZM7 2.75284C8.54639 2.75284 9.79999 4.00644 9.79999 5.55283V6.14713H4.20001V5.55283C4.20001 4.00644 5.45361 2.75284 7 2.75284ZM11.9 13.4971C11.9 14.4636 11.1165 15.2471 10.15 15.2471H3.85003C2.88353 15.2471 2.10004 14.4636 2.10004 13.4971V9.99716C2.10004 9.03066 2.88353 8.24717 3.85003 8.24717H10.15C11.1165 8.24717 11.9 9.03066 11.9 9.99716V13.4971Z"
        fill={color}
      />
      <Path
        d="M6.65007 10.3471H7.35006C7.92995 10.3471 8.40006 10.8172 8.40006 11.3971C8.40006 11.977 7.92995 12.4471 7.35006 12.4471H6.65007C6.07017 12.4471 5.60007 11.977 5.60007 11.3971C5.60007 10.8172 6.07017 10.3471 6.65007 10.3471Z"
        fill={color}
      />
    </Svg>
  );
};

export default PasswordIcon;
