import { SvgIconProps } from '../../SvgIcon';
import { FlagRoot } from '../Flag';

export const FlagIr = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#F0F0F0" />
      <path
        clipRule="evenodd"
        d="M0 0h24v4.638h-1.044v.695h-1.043v-.695H20.87v.695h-1.044v-.695h-1.043v.695h-1.044v-.695h-1.043v.695h-1.044v-.695H14.61v.695h-1.044v-.695h-1.043v.695h-1.044v-.695h-1.043v.695H9.39v-.695H8.348v.695H7.304v-.695H6.261v.695H5.217v-.695H4.174v.695H3.13v-.695H2.087v.695H1.043v-.695H0V0Z"
        fill="#6DA544"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M2.087 10.666v.697H3.13v-.697h1.044v.697h1.043v-.697h1.044v.697h1.043v-.697h1.044v.697H9.39v-.697h1.044v.697h1.043v-.697h1.044v.697h1.043v-.697h1.044v.697h1.043v-.697h1.044v.697h1.043v-.697h1.044v.697h1.043v-.697h1.044v.697h1.043v-.697h1.043v.697H24V16H0v-4.637h1.043v-.697h1.044ZM13.24 6.331h.838c.005.091.008.184.008.278 0 1.716-.917 3.06-2.087 3.06-1.17 0-2.087-1.344-2.087-3.06 0-.094.003-.187.008-.278h.838a3.72 3.72 0 0 0-.011.278c0 .619.155 1.219.424 1.646.084.132.223.318.41.443V6.331h.835v2.367c.188-.125.328-.311.41-.443.27-.427.425-1.027.425-1.646 0-.094-.004-.186-.01-.278Z"
        fill="#D80027"
        fillRule="evenodd"
      />
    </FlagRoot>
  );
};
