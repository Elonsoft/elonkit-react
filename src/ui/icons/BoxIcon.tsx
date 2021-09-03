import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const BoxIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} width="56" height="56" viewBox="0 0 56 56" sx={{ fontSize: 56 }}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.9997 2C29.9997 0.89543 29.1043 0 27.9997 0C26.8951 0 25.9997 0.89543 25.9997 2V9C25.9997 10.1046 26.8951 11 27.9997 11C29.1043 11 29.9997 10.1046 29.9997 9V2ZM48.3993 16.8C47.4993 15.1 45.7993 14 43.8993 14H12.0993C10.1993 14 8.49933 15.1 7.59933 16.8L1.89137 28.2166C1.30589 29.3876 1.01676 30.6844 1.04935 31.9933L1.09933 34L1.39933 45.6C1.69933 48.6 4.29933 51 7.39933 51H48.5993C51.6993 51 54.1993 48.7 54.5993 45.6L54.8993 34L54.9497 31.9943C54.9825 30.6848 54.6933 29.3873 54.1075 28.2157L48.3993 16.8ZM11.3993 19.7C11.8993 18.6 12.9993 18 14.0993 18H41.8993C42.9993 18 44.0993 18.6 44.5993 19.7C44.9607 20.4949 47.7765 26.5645 49.3106 29.87C49.7721 30.8643 49.0453 32 47.9491 32H41.0993C38.7993 32 36.7993 33.5 36.2993 35.8C35.6993 38.3 33.3993 40 30.8993 40H25.1993C22.5993 40 20.3993 38.2 19.7993 35.8C19.2993 33.6 17.2993 32 14.9993 32H8.04769C6.952 32 6.22603 30.8634 6.68672 29.8693L11.3993 19.7ZM12.1109 3.61093C12.8919 2.82988 14.1583 2.82988 14.9393 3.61093L18.9133 7.58487C19.6943 8.36592 19.6943 9.63225 18.9133 10.4133C18.1322 11.1943 16.8659 11.1943 16.0848 10.4133L12.1109 6.43936C11.3298 5.65831 11.3298 4.39198 12.1109 3.61093ZM43.8885 6.43936C44.6696 5.65831 44.6696 4.39198 43.8885 3.61093C43.1075 2.82988 41.8412 2.82988 41.0601 3.61093L37.0862 7.58487C36.3051 8.36592 36.3051 9.63225 37.0862 10.4133C37.8672 11.1943 39.1336 11.1943 39.9146 10.4133L43.8885 6.43936Z"
      />
    </SvgIcon>
  );
};
