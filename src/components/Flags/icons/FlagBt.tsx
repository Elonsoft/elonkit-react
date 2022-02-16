import { SvgIconProps } from '@mui/material/SvgIcon';

import { FlagRoot } from '../Flag';

export const FlagBt = (props: SvgIconProps) => {
  return (
    <FlagRoot {...props} viewBox="0 0 24 16">
      <path d="M24 0H0v16h24V0Z" fill="#FF9811" />
      <path d="M24 0H0v16" fill="#FFDA44" />
      <path
        d="M16.526 4.521V3.13h-2.667l-.204.204c-.724.724-.602 1.57-.513 2.187.082.572.092.792-.121 1.005-.213.213-.432.203-1.005.12-.617-.089-1.463-.21-2.187.514-.725.724-.603 1.57-.514 2.187.083.573.093.792-.12 1.005-.213.213-.432.203-1.005.12-.223-.032-.454-.065-.7-.068l-.015 1.391c.154.002.33.027.517.054.22.032.47.068.734.068.273 0 .56-.039.843-.161v1.113h2.087v-1.044h-1.043v-.695h.695v-1.044h-.556c.027-.337-.02-.66-.06-.938-.082-.572-.092-.791.12-1.004.214-.213.433-.203 1.006-.12.45.064 1.02.146 1.577-.094v1.113h2.087V7.999H14.44v-.695h.695V6.26h-.556c.027-.337-.02-.66-.06-.938-.057-.4-.08-.627-.015-.8h2.023Z"
        fill="#F0F0F0"
      />
    </FlagRoot>
  );
};
