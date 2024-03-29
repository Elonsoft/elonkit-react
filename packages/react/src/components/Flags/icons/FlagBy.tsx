import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagBy = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 .024H.024v15.952H24V.024Z" fill="#6DA544" />
      <path d="M0 10.774h23.974V.024H0" fill="#A2001D" />
      <path d="M4.69 10.774V.024H0v15.952h23.974H4.69v-5.202Z" fill="#F0F0F0" />
      <path
        d="m3.213 7.422-.868-1.573.868-1.548.869 1.548-.869 1.573ZM1.476 7.422.607 5.849l.869-1.548.869 1.548-.869 1.573ZM3.213 11.7l-.868-1.574.868-1.548.869 1.548-.869 1.573ZM1.476 11.7l-.869-1.574.869-1.548.869 1.548-.869 1.573ZM3.213 15.976l-.868-1.573.868-1.549.869 1.549-.869 1.572ZM1.476 15.976l-.869-1.573.869-1.549.869 1.549-.869 1.572ZM3.213 3.145l-.868-1.572.868-1.549.869 1.549-.869 1.572ZM1.476 3.145.607 1.573 1.476.024l.869 1.549-.869 1.572Z"
        fill="#A2001D"
      />
    </FlagRoot>
  );
};
