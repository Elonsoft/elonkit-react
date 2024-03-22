import { ComponentProps, Fragment, useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { styled } from '@mui/material/styles';
import { listItemButtonClasses, outlinedInputClasses } from '@mui/material';
import Box from '@mui/material/Box';
import { iconButtonClasses } from '@mui/material/IconButton';
import InputAdornment, { inputAdornmentClasses } from '@mui/material/InputAdornment';
import TextField, { textFieldClasses } from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Sidenav } from './Sidenav';
import { SidenavContext } from './Sidenav.context';
import { SidenavItem } from './SidenavItem';

import { IconAccountLc, IconAt } from '../../icons';
import { Sidebar, SidebarProps } from '../Sidebar';
import { SidebarDivider } from '../Sidebar/SidebarDivider';
import { SidebarItem, sidebarItemClasses } from '../Sidebar/SidebarItem';
import { SidebarMenu } from '../Sidebar/SidebarMenu';
import { SidebarScrollable } from '../Sidebar/SidebarScrollable';
import { SidebarSpacer } from '../Sidebar/SidebarSpacer';
import { SidebarToggle } from '../Sidebar/SidebarToggle';
import { svgIconClasses } from '../SvgIcon';

const SearchField = styled(TextField)(({ theme }) => ({
  [`&.${textFieldClasses.root}`]: {
    margin: '12px 16px 16px',

    [`& .${outlinedInputClasses.root}`]: {
      padding: '0 4px',

      [`& .${iconButtonClasses.root}`]: {
        color: theme.palette.monoA.A500
      },

      [`& .${inputAdornmentClasses.positionStart}`]: {
        marginRight: '4px',

        [`& .${svgIconClasses.root}`]: {
          color: theme.palette.monoA.A400
        }
      }
    }
  }
}));

const SidebarHeading = (props: { title: string }) => (
  <>
    <Typography sx={{ padding: '16px', color: 'monoA.A900' }} variant="h6">
      {props.title}
    </Typography>
    <SidebarDivider />
  </>
);

const SidebarCaption = (props: { title: string }) => (
  <Typography noWrap sx={{ padding: '0 16px', color: 'monoA.A600', flexShrink: '0' }} variant="caption">
    {props.title}
  </Typography>
);

const SidebarMenuItem = styled(SidebarItem)(() => ({
  margin: '0 16px',

  [`& .${listItemButtonClasses.root}.${sidebarItemClasses.button}`]: {
    padding: '4px'
  }
}));

const Content = styled('div')<{ ownerState: { isOpen?: boolean; width?: number } }>(
  ({ ownerState: { isOpen, width } }) => ({
    transition: 'padding-left 0.2s',
    paddingLeft: `${isOpen ? width : 0}px`
  })
);

const MIN_WIDTH = 220;
const MAX_WIDTH = 300;

type Args = ComponentProps<typeof Sidenav> & { color?: SidebarProps['color'] };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Sidenav,
  parameters: {
    references: [
      'Sidenav',
      'SidenavItem',
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
    disableEscapeKeyDown: {
      control: {
        type: 'boolean'
      }
    },
    disableItemHover: {
      control: {
        type: 'boolean'
      }
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['default', 'primary', 'secondary']
    },
    open: {
      table: {
        disable: true
      }
    }
  },
  args: {
    disableEscapeKeyDown: false,
    disableItemHover: false,
    color: 'secondary'
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: function Render({ disableEscapeKeyDown, disableItemHover, color }, { globals: { locale } }) {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(287);

    const [page, setPage] = useState(1);

    const ref = useRef<HTMLDivElement | null>(null);

    const ownerState = { isOpen, width };

    const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if ((event.target as HTMLInputElement).selectionStart !== 0) {
        event.stopPropagation();
      }
    };

    return (
      <Box sx={{ height: '100vh', margin: '-1rem', display: 'flex', gap: '20px', overflow: 'auto' }}>
        <Sidenav
          disableEscapeKeyDown={disableEscapeKeyDown}
          disableItemHover={disableItemHover}
          open={isOpen}
          sx={{ position: 'sticky', top: '0' }}
          onClose={() => setIsOpen(false)}
        >
          <Sidebar color={color}>
            <SidebarMenu>
              <SidenavItem icon={<IconAt />} selected={page === 1} onClick={() => setPage(1)} />
            </SidebarMenu>

            <SidebarToggle open={isOpen} onClick={() => setIsOpen(!isOpen)} />

            <SidebarMenu>
              <SidenavItem
                icon={<IconAt />}
                id="1"
                selected={page === 2}
                text={locale === 'en' ? 'Projects' : 'Проекты'}
                onClick={() => {
                  setPage(2);
                  console.info('Projects');
                }}
              />
              <SidenavItem
                icon={<IconAt />}
                id="2"
                selected={page === 3}
                text={locale === 'en' ? 'Reports' : 'Отчеты'}
                onClick={() => {
                  setPage(3);
                  console.info('Reports');
                }}
              />
            </SidebarMenu>

            <SidebarSpacer />
            <SidebarDivider />

            <SidebarMenu>
              <SidenavItem
                icon={<IconAccountLc container containerSize="24px" />}
                text={locale === 'en' ? 'Profile' : 'Профиль'}
              />
            </SidebarMenu>
          </Sidebar>

          <Sidebar
            maxWidth={MAX_WIDTH}
            minWidth={MIN_WIDTH}
            width={width}
            onWidthChange={(value) => {
              if (ref.current && isOpen) {
                ref.current.style.transition = 'none';
                ref.current.style.paddingLeft = `${Math.min(Math.max(value, MIN_WIDTH), MAX_WIDTH)}px`;
              }
            }}
            onWidthChangeCommit={(value: number) => {
              if (ref.current && isOpen) {
                ref.current.style.transition = '';
                ref.current.style.paddingLeft = '';
              }
              setWidth(value);
            }}
          >
            <SidenavContext.Consumer>
              {(value) => {
                switch (value?.itemId) {
                  default:
                  case '1':
                    const onProjectClick = (callback: () => void) => () => {
                      setPage(2);
                      callback();
                    };

                    return (
                      <Fragment key="1">
                        <SidebarHeading title={locale === 'en' ? 'Projects' : 'Проекты'} />
                        <SearchField
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconAt />
                              </InputAdornment>
                            )
                          }}
                          placeholder={locale === 'en' ? 'Search' : 'Поиск'}
                          size="32"
                          onKeyDown={onInputKeyDown}
                        />

                        <SidebarScrollable>
                          <SidebarCaption title={locale === 'en' ? 'Favorites' : 'Избранное'} />
                          <SidebarMenu>
                            <SidebarMenuItem
                              icon={<IconAt />}
                              text={locale === 'en' ? 'All projects' : 'Все проекты'}
                              onClick={onProjectClick(() => console.info(`All projects`))}
                            />
                            <SidebarMenuItem
                              icon={<IconAt />}
                              id="1"
                              text={locale === 'en' ? 'Documents' : 'Документы'}
                              onClick={onProjectClick(() => console.info(`Selected`))}
                            >
                              {[...Array(10)].map((_, idx) => (
                                <SidebarMenuItem
                                  key={idx}
                                  inset
                                  text={(locale === 'en' ? 'Document' : 'Документ') + ' №' + idx}
                                  onClick={onProjectClick(() => console.info(`Project ${idx}`))}
                                />
                              ))}
                            </SidebarMenuItem>
                            <SidebarMenuItem
                              icon={<IconAt />}
                              id="2"
                              text={locale === 'en' ? 'New projects' : 'Новые проекты'}
                              onClick={() => console.info(`Projects`)}
                            >
                              {[...Array(10)].map((_, idx) => (
                                <SidebarMenuItem
                                  key={idx}
                                  inset
                                  text={(locale === 'en' ? 'New project' : 'Новый проект') + ' №' + idx}
                                  onClick={onProjectClick(() => console.info(`Project ${idx}`))}
                                />
                              ))}
                            </SidebarMenuItem>
                          </SidebarMenu>

                          <SidebarCaption title={locale === 'en' ? 'Current projects' : 'Текущие проекты'} />
                          <SidebarMenu>
                            {[...Array(5)].map((_, idx) => (
                              <SidebarMenuItem
                                key={idx}
                                icon={<IconAt />}
                                text={(locale === 'en' ? 'Current project' : 'Текущий проект') + ' №' + idx}
                                onClick={onProjectClick(() => console.info(`Current project ${idx}`))}
                              />
                            ))}
                          </SidebarMenu>
                        </SidebarScrollable>
                      </Fragment>
                    );
                  case '2':
                    const onReportClick = (callback: () => void) => () => {
                      setPage(3);
                      callback();
                    };

                    return (
                      <Fragment key="2">
                        <SidebarHeading title={locale === 'en' ? 'Reports' : 'Отчеты'} />
                        <SearchField
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconAt />
                              </InputAdornment>
                            )
                          }}
                          placeholder={locale === 'en' ? 'Search' : 'Поиск'}
                          size="32"
                          onKeyDown={onInputKeyDown}
                        />

                        <SidebarScrollable>
                          <SidebarCaption title={locale === 'en' ? 'Favorites' : 'Избранное'} />
                          <SidebarMenu>
                            <SidebarMenuItem
                              icon={<IconAt />}
                              id="1"
                              text={locale === 'en' ? 'All reports' : 'Все отчеты'}
                              onClick={onReportClick(() => console.info(`All reports`))}
                            />
                            <SidebarMenuItem
                              icon={<IconAt />}
                              id="2"
                              text={locale === 'en' ? 'Saved reports' : 'Сохраненные отчеты'}
                              onClick={onReportClick(() => console.info(`Saved reports`))}
                            >
                              {[...Array(5)].map((_, idx) => (
                                <SidebarMenuItem
                                  key={idx}
                                  inset
                                  text={(locale === 'en' ? 'Saved report' : 'Сохраненный отчет') + ' №' + idx}
                                  onClick={onReportClick(() => console.info(`Saved report ${idx}`))}
                                />
                              ))}
                            </SidebarMenuItem>

                            <SidebarMenuItem
                              icon={<IconAt />}
                              id="3"
                              text={locale === 'en' ? 'Scheduled reports' : 'Запланированные отчеты'}
                            >
                              {[...Array(10)].map((_, idx) => (
                                <SidebarMenuItem
                                  key={idx}
                                  inset
                                  text={(locale === 'en' ? 'Scheduled report' : 'Запланированный отчет') + ' №' + idx}
                                  onClick={onReportClick(() => console.info(`Report ${idx}`))}
                                />
                              ))}
                            </SidebarMenuItem>
                          </SidebarMenu>

                          <SidebarCaption title={locale === 'en' ? 'Current reports' : 'Текущие отчеты'} />
                          <SidebarMenu>
                            {[...Array(5)].map((_, idx) => (
                              <SidebarMenuItem
                                key={idx}
                                icon={<IconAt />}
                                text={(locale === 'en' ? 'Current report' : 'Текущий отчет') + ' №' + idx}
                                onClick={onReportClick(() => console.info(`Current report ${idx}`))}
                              />
                            ))}
                          </SidebarMenu>
                        </SidebarScrollable>
                      </Fragment>
                    );
                }
              }}
            </SidenavContext.Consumer>
          </Sidebar>
        </Sidenav>

        <Content ref={ref} ownerState={ownerState}>
          <h2>{page}</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum veniam fugit fugiat nihil possimus
            tenetur totam consectetur ea voluptates voluptatibus repellendus ducimus, voluptate delectus quidem.
            Repudiandae adipisci enim quae quibusdam dicta commodi voluptates qui numquam at libero dignissimos fugiat
            sequi aut quos, quod illum exercitationem facilis? Earum, ratione consectetur. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Cum nemo exercitationem iste? Eaque vel voluptas iusto aperiam minus omnis
            debitis corporis rem id vitae fugiat autem voluptatum, quidem ipsam sed perferendis voluptatibus minima
            laudantium quas laborum inventore a eos? Sint, pariatur. Nam consequatur ipsa ducimus? Distinctio nulla
            possimus officiis odit dolore accusamus? Necessitatibus voluptatibus odio accusantium minima. Esse,
            consectetur. Adipisci in voluptate dolore iure accusantium. Alias soluta eaque dolorem molestiae nihil
            numquam omnis quam vero animi perspiciatis praesentium, voluptate minima corporis atque! Voluptatum natus
            accusantium, recusandae voluptas maxime amet sapiente aliquam tempora repellendus dolor suscipit facere
            fugiat accusamus voluptatibus similique placeat labore enim voluptate odio tempore at deserunt quae dolores?
            Dolor, nemo? Est aliquid nihil nisi provident reiciendis dolores error fugiat minus beatae esse asperiores
            facere nulla enim nemo debitis, in fuga? Odio similique nisi pariatur esse ullam iure expedita sequi
            incidunt suscipit vel cumque deleniti architecto modi at vitae voluptatibus maxime accusantium dolorem
            deserunt, nostrum officiis eius consequuntur voluptate. Impedit magnam nisi enim quae atque vel, magni
            laboriosam amet fugiat libero voluptate in soluta corrupti tempore itaque voluptatibus repellat placeat id,
            alias sed. Velit ipsa voluptatem incidunt, reprehenderit rem a eos maiores? Voluptate similique dolor nihil!
            Numquam, minus voluptatum quidem rerum earum amet nam! Quaerat velit natus beatae, nulla a incidunt vel
            aliquam doloribus, explicabo omnis repellat architecto est accusamus voluptatum placeat officiis ut
            reiciendis dolor, illo voluptatem id. Expedita voluptatum omnis, esse veniam suscipit laboriosam facilis
            nulla quos molestias doloremque tempore iste. Ex, autem nesciunt nisi ut minus harum error voluptas id
            sapiente delectus excepturi doloremque fugiat? Assumenda distinctio, accusantium, numquam modi blanditiis
            aut vel explicabo officiis laborum nulla ipsa odit praesentium quas molestias tempora. Commodi est a
            molestias alias maiores, saepe deserunt tenetur enim exercitationem. Commodi fuga soluta repellat dolor odit
            quisquam vero id veniam ullam modi quis culpa, molestiae officia suscipit, atque earum. Consequuntur quasi
            temporibus facere voluptatem dolorem a molestiae, distinctio fugiat sint repudiandae praesentium omnis,
            minima tenetur nostrum fuga non quam sunt consectetur, facilis autem eum? Quibusdam accusantium assumenda
            illo aspernatur suscipit repellat, tempore laboriosam earum veritatis at saepe facere delectus laudantium
            pariatur obcaecati nisi veniam mollitia quas ea nam, minus expedita. Magnam id accusamus voluptas pariatur
            dolorem, ullam laudantium quis rem natus maiores ea dolore quod distinctio, corrupti rerum doloremque optio
            sapiente perspiciatis autem enim. Eum dignissimos iusto reprehenderit rem vel asperiores non, tempore quos
            quod! Modi possimus mollitia eligendi eaque ipsa sunt culpa laborum odit nulla voluptates dolore dolorem,
            dolorum non aspernatur! Sequi rerum eveniet doloremque vitae explicabo impedit, natus reprehenderit quas
            obcaecati omnis nam, blanditiis minima possimus harum id quisquam ullam et sit consequuntur quod quidem
            voluptatem quo iusto delectus. Animi iste molestias eveniet, aperiam ullam explicabo illum sint nisi quasi
            ipsum quaerat odit tempora repellat.
          </p>
          <p>
            Corrupti ipsum perspiciatis repellat possimus assumenda officiis quam ex, hic ratione adipisci quis eveniet
            tempora odio iste officia molestiae error, maxime sed rerum veritatis asperiores, ipsa laudantium fuga.
            Consectetur hic repellendus ipsum in ad vel ullam esse quo? Quaerat, deserunt ipsa! Eos eum accusantium
            dolores provident optio architecto saepe consequuntur expedita similique rem, deleniti necessitatibus quam,
            aliquid molestias repudiandae ullam sint! Praesentium nesciunt repudiandae illum accusamus, inventore nihil
            ipsam nobis expedita vitae placeat deleniti suscipit maxime cum sequi velit doloribus ut, voluptatem id odio
            dolor! Porro aliquid ut, autem sequi voluptates dolor at molestiae ducimus rem amet, ad recusandae quibusdam
            quis neque vero, exercitationem facere sint reiciendis accusantium eligendi dignissimos laborum. Ducimus
            vitae optio ipsam deleniti illo pariatur nobis veritatis provident tenetur repellendus culpa, quis odio
            porro ut maiores nulla voluptatem perspiciatis excepturi quasi architecto minus natus quia. Consectetur eum
            illo ut cumque magni praesentium dignissimos modi repudiandae assumenda ullam nemo, porro quod nobis
            necessitatibus in inventore ipsam fugiat ea aspernatur, dolore molestiae maxime quis ipsum sapiente.
            Doloremque officiis voluptas velit nihil ut id quae sint voluptatibus. Atque impedit at quisquam iure alias,
            in repellat tenetur laborum, ab accusantium molestias iste sapiente exercitationem explicabo incidunt minima
            ullam excepturi perferendis non consequuntur veritatis dolores? Eaque libero, commodi ad dolorum ex labore
            minus repellendus optio vel ut non veniam quisquam provident reprehenderit aut quia dolores nulla atque
            rerum quae eligendi ea fuga nemo. Officiis corporis illum repellat natus culpa molestias commodi et quidem,
            optio beatae autem ea inventore soluta amet eum itaque dolorem. Perferendis inventore corrupti mollitia
            dolorum necessitatibus nobis ullam perspiciatis eligendi tempora. Pariatur hic minus atque officiis illum
            cumque inventore at repellendus est consectetur non fugiat exercitationem necessitatibus voluptas aperiam
            distinctio assumenda quisquam, reiciendis, voluptatem expedita nihil minima beatae consequatur maxime! Earum
            praesentium quisquam temporibus, deleniti porro veritatis nisi fugit consectetur quae hic cupiditate
            suscipit aspernatur autem ullam obcaecati similique quasi nostrum dolores minus odio architecto? At, quam
            nam culpa exercitationem nisi eius, voluptas a odit libero vitae nulla laudantium praesentium non iure
            earum, autem dicta ratione quos ducimus maxime cumque enim nemo veritatis inventore. Nihil voluptatibus
            consectetur illo voluptates suscipit esse, quas et earum est facere? Unde, reprehenderit. Possimus tenetur
            consequatur ab molestias assumenda animi nihil deserunt eius doloremque, placeat deleniti error soluta nam
            suscipit, at aut quia, dolorum mollitia. Cum, aliquid? Et vel iusto quos modi tenetur enim, sapiente
            expedita asperiores at dignissimos veritatis fugit in ipsa culpa necessitatibus dolorem illum sit laudantium
            atque commodi! Porro, ex repudiandae quibusdam culpa nesciunt excepturi corrupti dolores commodi quas
            laudantium similique atque neque quidem minus cumque minima tempore fuga ad quisquam. Suscipit atque nobis
            aliquam, aspernatur, temporibus blanditiis eveniet aperiam architecto ullam totam repellat fugiat incidunt
            magnam.
          </p>
          <p>
            Fuga expedita omnis id nulla voluptatum, deleniti asperiores cupiditate laudantium assumenda veritatis
            corrupti nihil et natus alias. Repellat, fugiat quisquam! Accusamus reiciendis eum maiores harum nisi autem
            quos ducimus atque officiis, pariatur eaque sit ut molestiae veniam repellat ex quam ullam illum assumenda
            amet recusandae? Nostrum excepturi commodi, enim voluptatum esse vitae in temporibus beatae ea, quibusdam
            fugit ratione dignissimos. Recusandae nostrum quibusdam ab eum commodi quisquam eligendi quia vero esse illo
            aspernatur nesciunt mollitia totam odio atque, sit dicta voluptatibus cupiditate reprehenderit et ea ut
            voluptas! Molestias labore tempore fugit. Commodi consectetur aut voluptate cumque quos nostrum blanditiis
            deleniti animi molestiae maiores architecto itaque quaerat temporibus in vitae, excepturi iste nobis! Eius
            et ipsum fuga beatae ab, id tenetur ut cumque dolore voluptatibus expedita. Expedita dolore vel eaque modi
            dicta animi aliquid recusandae ab odit! Dignissimos reprehenderit earum quasi dicta? Corrupti voluptatibus
            iure excepturi voluptates est odit expedita accusantium fugiat eveniet minima, ut eius itaque? Dolor impedit
            labore nulla ab vero, odio molestias fugit ea quaerat inventore, earum suscipit veritatis error reiciendis
            maiores at corrupti necessitatibus tenetur dicta animi commodi, laudantium est! Quam repellat mollitia iste
            dolor ex consequuntur, sint nisi, beatae quaerat illum at vel harum minus hic ipsam. Voluptates porro
            blanditiis inventore perferendis similique, vero eos, sint autem excepturi odit earum, eveniet repudiandae?
            Vel hic assumenda aperiam iure maxime non, similique alias harum, possimus necessitatibus eius, unde dolores
            eos commodi omnis temporibus sapiente nesciunt ab distinctio culpa excepturi incidunt. Assumenda nostrum,
            dolor quia eaque expedita nulla debitis quis rem minima, impedit porro eius culpa cumque quas ratione
            eligendi eveniet optio itaque, necessitatibus commodi omnis quibusdam magnam cupiditate laboriosam.
          </p>
        </Content>
      </Box>
    );
  }
};
