import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagSa = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#6DA544" />
      <path
        d="M8.604 9.565c0 .577.456 1.044 1.019 1.044h3.056c0 .48.38.87.85.87h1.018a.86.86 0 0 0 .85-.87V9.565H8.603ZM15.481 4.522v2.434a.688.688 0 0 1-.68.696v1.043c.937 0 1.699-.78 1.699-1.739V4.522h-1.019ZM8.18 6.957a.688.688 0 0 1-.68.695v1.044c.936 0 1.698-.78 1.698-1.74V4.523H8.18v2.435Z"
        fill="#F0F0F0"
      />
      <path
        d="M14.972 4.521h-1.02v2.435h1.02V4.521ZM12.425 5.913a.172.172 0 0 1-.17.174.172.172 0 0 1-.17-.174V4.522h-1.019v1.39a.172.172 0 0 1-.17.175.172.172 0 0 1-.17-.174V4.522H9.708v1.39c0 .672.533 1.218 1.188 1.218.253 0 .487-.08.68-.219a1.162 1.162 0 0 0 .829.21.683.683 0 0 1-.66.531v1.043c.937 0 1.698-.78 1.698-1.739V4.522h-1.018v1.39Z"
        fill="#F0F0F0"
      />
      <path d="M11.236 7.652H9.708v1.043h1.528V7.652Z" fill="#F0F0F0" />
    </FlagRoot>
  );
};
