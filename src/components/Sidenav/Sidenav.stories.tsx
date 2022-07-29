import { useState } from 'react';

import { SidenavProps } from './Sidenav.types';

import { Story } from '@storybook/react';

import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';

import { Sidenav } from './Sidenav';
import { SidenavContext } from './Sidenav.context';
import { SidenavItem } from './SidenavItem';

import { Sidebar } from '../Sidebar';
import { SidebarDivider } from '../Sidebar/SidebarDivider';
import { SidebarItem } from '../Sidebar/SidebarItem';
import { SidebarMenu } from '../Sidebar/SidebarMenu';
import { SidebarSpacer } from '../Sidebar/SidebarSpacer';
import { SidebarToggle } from '../Sidebar/SidebarToggle';

export const Demo: Story<SidenavProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('1');
  const [width, setWidth] = useState(281);

  const onWidthChange = (value: number) => {
    setWidth(value);
  };

  const onClick = (id: string) => {
    if (!isOpen) {
      setIsOpen(!isOpen);
    }

    setId(id);
  };

  return (
    <Box sx={{ height: '100vh', margin: '-16px' }}>
      <Sidenav open={isOpen} onClose={() => setIsOpen(false)} id={id}>
        <Sidebar color="primary">
          <SidebarMenu>
            <SidenavItem id="0" icon={<Icon>home</Icon>} text="Home" />
          </SidebarMenu>

          <SidebarToggle open={isOpen} onClick={() => setIsOpen(!isOpen)} />

          <Box sx={{ textAlign: 'center' }}>
            <SidenavItem id="1" icon={<Icon>electric_bolt</Icon>} text="Projects" onClick={onClick} />
            <SidenavItem id="2" icon={<Icon>folder</Icon>} text="Archive" onClick={onClick} />
          </Box>

          <SidebarSpacer />
          <SidebarDivider />

          <SidebarMenu>
            <SidenavItem id="-1" icon={<Icon>alternate_email</Icon>} text="Profile" />
          </SidebarMenu>
        </Sidebar>

        <Sidebar width={width} onWidthChange={onWidthChange}>
          <SidenavContext.Consumer>
            {(value) => {
              switch (value?.id) {
                case '1':
                  return (
                    <>
                      <Typography variant="h6" sx={{ padding: '8px 16px 12px' }}>
                        Projects
                      </Typography>

                      <SidebarDivider />

                      <SidebarMenu>
                        {[...Array(4)].map((_, idx) => (
                          <SidebarItem key={idx} text={`Project ${idx++}`} icon={<Icon>note</Icon>} component="div" />
                        ))}
                      </SidebarMenu>
                    </>
                  );
                case '2':
                  return (
                    <>
                      <Typography variant="h6" sx={{ padding: '8px 16px 12px' }}>
                        Archive
                      </Typography>

                      <SidebarDivider />

                      <SidebarMenu>
                        <SidebarItem icon={<Icon>archive</Icon>} text="Archive" component="div">
                          {[...Array(4)].map((_, idx) => (
                            <SidebarItem
                              key={idx}
                              text={`Archive №${idx++}`}
                              icon={<Icon>archive</Icon>}
                              sx={{ pl: 2 }}
                            />
                          ))}
                        </SidebarItem>

                        <SidebarItem text="Draft" icon={<Icon>edit_document</Icon>} component="div" />
                      </SidebarMenu>
                    </>
                  );
                default:
                  return null;
              }
            }}
          </SidenavContext.Consumer>
        </Sidebar>
      </Sidenav>
    </Box>
  );
};
