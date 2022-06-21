import { useMemo, useState } from 'react';

import { SidebarMenuProps } from './SidebarMenu.types';

import { useThemeProps } from '@mui/material/styles';
import MenuList from '@mui/material/MenuList';

import { SidebarMenuContext } from './SidebarMenu.context';

export const SidebarMenu = (inProps: SidebarMenuProps) => {
  const {
    children,
    behaviour = 'click',
    exclusive,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSidebarMenu'
  });

  const [openItems, setItems] = useState<string[]>([]);

  const onOpen = (id: string) => {
    if (exclusive) {
      setItems([id]);
    } else {
      setItems((prev) => [...prev, id]);
    }
  };

  const onClose = (id: string) => {
    setItems((prev) => prev.filter((item) => item !== id));
  };

  const value = useMemo(() => {
    return { openItems, behaviour, onOpen, onClose };
  }, [openItems, exclusive, behaviour]);

  return (
    <SidebarMenuContext.Provider value={value}>
      <MenuList component="div" disablePadding {...props}>
        {children}
      </MenuList>
    </SidebarMenuContext.Provider>
  );
};
