import { useState } from 'react';

import { Story } from '@storybook/react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { Sidebar } from './Sidebar';
import { SidebarDivider } from './SidebarDivider';
import { SidebarItem } from './SidebarItem';
import { SidebarMenu } from './SidebarMenu';
import { SidebarScrollable } from './SidebarScrollable';
import { SidebarSpacer } from './SidebarSpacer';
import { SidebarToggle } from './SidebarToggle';

import { IconChevronLeft } from '../../icons';
import { IconAccount, IconAt, IconBell, IconFileDocument, IconMagnifyVariant, IconZap } from '../../icons';

export const Demo: Story = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(281);

  const onWidthChange = (value: number) => {
    setWidth(value);
  };

  return (
    <Box sx={{ height: '100vh', margin: '-16px' }}>
      <Sidebar open={isOpen} color={args.color} onWidthChange={onWidthChange} width={width}>
        <SidebarMenu>
          <SidebarItem text="CRM" component="div" />
        </SidebarMenu>

        <SidebarToggle
          onClick={() => setIsOpen(!isOpen)}
          open={isOpen}
          icon={<IconChevronLeft sx={{ width: '20px', height: '20px' }} />}
        />

        <SidebarScrollable afterScroll={<SidebarDivider />}>
          <SidebarMenu behaviour={args.behaviour} exclusive>
            <SidebarItem id="2" icon={<IconZap />} text="Projects" onClick={() => console.log(`item number 2`)}>
              {[...Array(5)].map((_, i) => (
                <SidebarItem
                  key={i}
                  text={'Project № ' + i}
                  sx={{ pl: 2 }}
                  onClick={() => console.log(`project number ${i}`)}
                />
              ))}
            </SidebarItem>

            <SidebarItem
              id="3"
              icon={<IconFileDocument />}
              text="Documents"
              onClick={() => console.log(`item number 3`)}
            />

            <SidebarItem
              id="3"
              icon={<IconFileDocument />}
              text="Files"
              component={Link}
              href="https://google.com"
              target="_blank"
              onClick={() => console.log(`item number 2`)}
            >
              {[...Array(8)].map((_, i) => (
                <SidebarItem
                  key={i}
                  icon={<IconAt />}
                  text={'File № ' + i}
                  component={Link}
                  href="https://google.com"
                  sx={{ pl: 2 }}
                  onClick={() => console.log(`project number ${i}`)}
                />
              ))}
            </SidebarItem>
          </SidebarMenu>

          <SidebarMenu exclusive>
            {[...Array(3)].map((_, i) => (
              <SidebarItem
                id={i.toString()}
                key={i}
                icon={<IconAt />}
                text={'Item text_' + i}
                component={Link}
                href="https://google.com"
                target="_blank"
                onClick={() => console.log(`item text number ${i}`)}
              />
            ))}
          </SidebarMenu>
        </SidebarScrollable>

        <SidebarSpacer />

        <SidebarMenu>
          <SidebarItem
            icon={<IconMagnifyVariant />}
            text="Search"
            component={Link}
            href="https://google.com"
            target="_blank"
          />
          <SidebarItem icon={<IconBell />} text="Notifications" />
        </SidebarMenu>

        <SidebarDivider />
        <SidebarMenu>
          <SidebarItem icon={<IconAccount />} text="Person" />
        </SidebarMenu>
      </Sidebar>
    </Box>
  );
};
