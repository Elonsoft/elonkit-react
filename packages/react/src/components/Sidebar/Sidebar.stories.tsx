import { ComponentProps, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Sidebar } from './Sidebar';
import { SidebarDivider } from './SidebarDivider';
import { SidebarItem } from './SidebarItem';
import { SidebarMenu, SidebarMenuProps } from './SidebarMenu';
import { SidebarScrollable } from './SidebarScrollable';
import { SidebarSpacer } from './SidebarSpacer';
import { SidebarToggle } from './SidebarToggle';

import { IconAccountLc, IconAt, IconBellFill, IconMagnify } from '../../icons';

type Args = ComponentProps<typeof Sidebar> & { behaviour?: SidebarMenuProps['behaviour']; exclusive?: boolean };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Sidebar,
  parameters: {
    references: [
      'Sidebar',
      'SidebarDivider',
      'SidebarItem',
      'SidebarMenu',
      'SidebarScrollable',
      'SidebarSpacer',
      'SidebarToggle'
    ]
  },
  argTypes: {
    color: {
      control: {
        type: 'select'
      },
      options: ['default', 'primary', 'secondary']
    },
    behaviour: {
      control: {
        type: 'select'
      },
      options: ['click', 'hover']
    },
    exclusive: {
      control: {
        type: 'boolean'
      }
    },
    open: {
      table: {
        disable: true
      }
    },
    width: {
      table: {
        disable: true
      }
    }
  },
  args: {
    color: 'default',
    behaviour: 'click',
    exclusive: false,
    minWidth: 220,
    maxWidth: 400
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: function Render({ color, behaviour, exclusive, minWidth, maxWidth }, { globals: { locale } }) {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(280);

    return (
      <Box sx={{ height: '100vh', m: '-16px', display: 'flex', gap: '20px', overflow: 'auto' }}>
        <Sidebar
          color={color}
          maxWidth={maxWidth}
          minWidth={minWidth}
          open={isOpen}
          sx={{ position: 'sticky', top: '0' }}
          width={width}
          onWidthChangeCommit={(value: number) => setWidth(value)}
        >
          <ListItem
            disableGutters
            component="div"
            sx={{ padding: '16px 16px 15px', overflow: 'hidden', flexShrink: '0' }}
          >
            <ListItemIcon>
              <IconAt sx={{ color: color === 'primary' ? 'monoB.A800' : 'monoA.A500' }} />
            </ListItemIcon>
            <ListItemText
              primary="CRM"
              primaryTypographyProps={{ variant: 'h6', color: color === 'primary' ? 'monoB.A800' : 'monoA.A900' }}
              sx={{ my: '0', display: `${isOpen ? 'block' : 'none'}` }}
            />
          </ListItem>

          <SidebarToggle open={isOpen} onClick={() => setIsOpen(!isOpen)} />

          <SidebarMenu>
            <SidebarItem
              icon={<IconAt />}
              text={locale === 'en' ? 'Time tracking' : 'Рабочее время'}
              onClick={() => console.info(`Time tracking`)}
            />
          </SidebarMenu>

          <SidebarDivider />

          <SidebarScrollable afterScroll={<SidebarDivider />}>
            <SidebarMenu behaviour={behaviour} exclusive={exclusive}>
              <SidebarItem
                selected
                component="button"
                icon={<IconAt />}
                id="0"
                text={locale === 'en' ? 'Projects' : 'Проекты'}
                onClick={() => console.info(`Projects`)}
              >
                {[...Array(5)].map((_, i) => (
                  <SidebarItem
                    key={i}
                    inset
                    selected={i === 2}
                    text={(locale === 'en' ? 'Project' : 'Проект') + ' №' + i}
                    onClick={() => console.info(`Project ${i}`)}
                  />
                ))}
              </SidebarItem>
              <SidebarItem icon={<IconAt />} id="1" text={locale === 'en' ? 'Files' : 'Файлы'}>
                {[...Array(8)].map((_, i) => (
                  <SidebarItem
                    key={i}
                    inset
                    text={(locale === 'en' ? 'File' : 'Файл') + ' №' + i}
                    onClick={() => console.info(`File ${i}`)}
                  />
                ))}
              </SidebarItem>
              <SidebarItem
                icon={<IconAt />}
                text={locale === 'en' ? 'Infographic' : 'Инфографика'}
                onClick={() => console.info(`Infographic`)}
              />
              <SidebarItem
                icon={<IconAt />}
                text={locale === 'en' ? 'Schedule' : 'Расписание'}
                onClick={() => console.info(`Schedule`)}
              />
              <SidebarItem
                icon={<IconAt />}
                text={locale === 'en' ? 'Messages' : 'Сообщения'}
                onClick={() => console.info(`Messages`)}
              />
              <SidebarItem
                icon={<IconAt />}
                text={locale === 'en' ? 'Inbox' : 'Входящие'}
                onClick={() => console.info(`Inbox`)}
              />
            </SidebarMenu>
          </SidebarScrollable>
          <SidebarSpacer />

          <SidebarMenu>
            <SidebarItem
              icon={<IconMagnify />}
              text={locale === 'en' ? 'Search' : 'Поиск'}
              onClick={() => console.info(`Search`)}
            />
            <SidebarItem
              icon={<IconBellFill />}
              text={locale === 'en' ? 'Notifications' : 'Уведомления'}
              onClick={() => console.info(`Notifications`)}
            />
          </SidebarMenu>

          <SidebarDivider />

          <SidebarMenu>
            <SidebarItem
              icon={<IconAccountLc container containerSize="24px" />}
              text={locale === 'en' ? 'Name' : 'Имя'}
            />
          </SidebarMenu>
        </Sidebar>

        <div>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil quibusdam natus dolore suscipit
            deleniti? Alias quod veritatis odit ipsa nam ipsum atque placeat voluptates, molestias ipsam, necessitatibus
            facilis provident consequuntur beatae! Aut incidunt non debitis, nesciunt necessitatibus ex praesentium
            error tenetur veniam velit fugiat ullam quas similique impedit eveniet. Consectetur sint sunt cumque
            molestiae quos rem autem fugiat. Perferendis eveniet facilis porro necessitatibus at. Voluptate maxime omnis
            dolore ipsum rerum? Dolorum voluptatibus atque perspiciatis incidunt non, iusto, officiis consequuntur harum
            aperiam doloribus, veritatis quo dignissimos ratione ex magni quaerat!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa sint, eos quidem, pariatur
            obcaecati culpa voluptas ducimus ad velit deleniti, nostrum facere voluptatum id odit facilis? Nostrum
            minima vitae accusantium reprehenderit, tempora quo saepe eligendi assumenda tenetur vero quasi alias esse
            sunt quod veniam consectetur nemo beatae accusamus delectus odit impedit exercitationem laudantium ipsum.
            Repellat vitae nisi voluptatibus ea in rerum eaque perferendis doloribus, dolores corrupti ipsam illum
            recusandae maxime nihil sit sed delectus commodi obcaecati consequuntur non enim doloremque error tempore.
            Ea sequi, ipsa, hic temporibus eveniet ipsam eius libero accusamus quaerat harum, iste recusandae! Maiores
            assumenda illum labore? Nihil ipsam dolores error, cum sunt, harum architecto hic ex quibusdam nobis cumque
            laboriosam rerum tempore quo, ut magni aspernatur! Quo nihil exercitationem consequatur eius distinctio
            assumenda, repellat hic. Vel, velit eius facere repudiandae dicta earum doloribus, et aliquam, perspiciatis
            vitae obcaecati. At, autem placeat maiores molestias neque voluptatum!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ut incidunt alias quae laudantium magni
            atque vitae suscipit eveniet sequi possimus aspernatur nisi repellendus earum doloremque, neque facilis
            voluptate omnis quo veniam asperiores. Rem et quo voluptas aliquid voluptatibus, in quis velit, officiis
            natus iure sint voluptates doloribus quibusdam facilis facere dignissimos, reiciendis debitis omnis
            accusantium! Rerum eligendi iusto natus, porro omnis, accusantium enim cumque, inventore possimus nulla
            fugiat magni iste! Quod excepturi ratione obcaecati qui veniam quam eum, delectus accusantium beatae a
            exercitationem fuga nesciunt reiciendis, ad mollitia temporibus velit. Ex distinctio amet dolorum iste
            libero quis magnam nisi expedita, cumque architecto repudiandae modi consequuntur officiis? Consectetur,
            aut, est possimus labore earum maiores placeat totam voluptate ipsa amet odit esse facilis modi error
            reprehenderit, eligendi minus! Dicta consequuntur ut architecto quas rem dolore totam voluptates illum
            quibusdam impedit, distinctio in perferendis aperiam, tenetur cum voluptatibus eum nam? Iusto, in. Dicta
            tenetur provident atque, iste earum praesentium ex aliquam incidunt adipisci consequatur, explicabo amet
            totam. Eos quod praesentium, at dicta ducimus tempora fugit reiciendis illum eaque molestiae. Eaque
            temporibus optio corrupti deleniti delectus maiores inventore officia, officiis itaque aut nobis, recusandae
            pariatur possimus laboriosam tempore amet dolor, sunt at architecto in ipsa quam quis? Quidem saepe culpa
            fuga quam excepturi obcaecati, iste repellat accusamus magni iusto? Voluptatum fugit nihil enim. Nemo
            debitis soluta reprehenderit perspiciatis et ratione, similique placeat animi blanditiis totam magnam
            recusandae accusantium. Debitis eum ut animi consequatur fuga? Sint qui fugiat odit quam iusto. Molestias
            obcaecati minima provident aspernatur vel aut, minus quas repellat iusto? Ipsam exercitationem reprehenderit
            quasi distinctio sunt dolorem aliquam commodi provident perspiciatis! Tempora velit nisi rem nesciunt eius
            deserunt quasi modi, unde corporis neque voluptate ea excepturi repellendus cum vel veniam voluptatem
            debitis recusandae vitae amet? Eligendi nesciunt laborum vero mollitia laboriosam, voluptatum debitis
            obcaecati error fugit temporibus, soluta repellat nisi aspernatur, voluptatem facere! Rem officiis deserunt
            blanditiis nisi veniam atque pariatur, minima architecto odit, laudantium quis eligendi consequuntur, harum
            cum? Facere ipsam nostrum nihil consequuntur cum odit laborum unde, accusamus ea! Deserunt, minus distinctio
            excepturi labore eveniet odit assumenda quam eius quo nemo a numquam cupiditate voluptate ipsa maiores.
            Dolore officiis enim odit commodi corporis sed libero, molestiae tenetur expedita quod numquam! Minus eaque
            id harum excepturi reprehenderit quidem sunt, totam beatae aperiam illum sequi, quaerat officia velit rem
            in. Quisquam temporibus aliquid minima dolore nobis et architecto, explicabo doloremque eius numquam veniam
            consectetur, voluptates, impedit esse aliquam sunt vitae fugit tempora earum. Eligendi, inventore dicta sed
            quaerat voluptates optio, asperiores a consequatur deserunt hic laudantium rem numquam fuga porro doloremque
            officia voluptas nulla? Nulla, iusto! Odit expedita dolores eius aliquam delectus amet doloribus tenetur ad
            totam magnam ratione nam, sapiente commodi aperiam ea reiciendis perspiciatis possimus harum repellendus ex
            repudiandae officia qui iusto natus? Ex id tempora dolore repellendus, dignissimos odit modi fugit
            voluptates reprehenderit sed dolor ullam vero voluptatibus at. Odio nisi maiores sint iusto adipisci, vel,
            nam dolor minus eius, eveniet aut deserunt maxime distinctio facilis. Excepturi, quia dolorem.
          </p>
        </div>
      </Box>
    );
  }
};
