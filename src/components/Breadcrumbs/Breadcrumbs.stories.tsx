import { Link, MemoryRouter, Route, useLocation, useParams, useRouteMatch } from 'react-router-dom';

import { Story } from '@storybook/react';

import { Breadcrumbs as ESBreadcumbs } from './Breadcrumbs';
import { BreadcrumbsItem } from './BreadcrumbsItem';

type CatalogSections = 'clothes' | 'accessories' | 'shoes' | 'cosmetics';
type AcessorySections = 'glasses' | 'bags' | 'ties' | 'belts';
type СlothesSections = 'tshirts' | 'jackets' | 'trousers' | 'shorts';
type ShoesSections = 'shoe' | 'sandals' | 'sneakers';
type СosmeticsSections = 'pomade' | 'tush' | 'powder' | 'highlighter';

type CatalogMap = Map<string, { title: string; link: string; model: string }>;

const AcessoriesMap = new Map([
  ['glasses', { link: '/catalog/accessories/glasses', title: 'Очки', model: 'c de cartier sunglasses' }],
  ['bags', { link: '/catalog/accessories/bags', title: 'Сумки', model: 'neverfull mm' }],
  ['ties', { link: '/catalog/accessories/ties', title: 'Галстуки', model: 'monogram crossing tie' }],
  ['belts', { link: '/catalog/accessories/belts', title: 'Ремни', model: 'lv initials 40mm reversible belt' }]
]);

const СlothesMap = new Map([
  ['tshirts', { link: '/catalog/clothes/tshirts', title: 'Футболки', model: 'lvse inside out t-shirt' }],
  ['jackets', { link: '/catalog/clothes/jackets', title: 'Куртки', model: 'monogram lv toile military jacket' }],
  ['trousers', { link: '/catalog/clothes/trousers', title: 'Брюки', model: 'lvse flower quilted' }],
  ['shorts', { link: '/catalog/clothes/shorts', title: 'Шорты', model: 'short-sleeved salt print denim' }]
]);

const ShoesMap = new Map([
  ['shoe', { link: '/catalog/shoes/shoe', title: 'Туфли', model: 'short-sleeved salt print denim' }],
  ['sandals', { link: '/catalog/shoes/sandals', title: 'Сандали', model: 'salt print denim' }],
  ['sneakers', { link: '/catalog/shoes/sneakers', title: 'Кроссовки', model: 'short-sleeved salt print denim' }]
]);

const СosmeticsMap = new Map([
  ['pomade', { link: '/catalog/cosmetics/pomade', title: 'Помада', model: 'Addict Lipstick' }],
  ['tush', { link: '/catalog/cosmetics/tush', title: 'Туш', model: 'Lash Sensationa' }],
  ['powder', { link: '/catalog/cosmetics/powder', title: 'Пудра', model: 'loreal paris infaillible 24h fresh wear' }],
  ['highlighter', { link: '/catalog/cosmetics/highlighter', title: 'Хайлайтер', model: 'hydro liquid highlight' }]
]);

const TRANSLATIONS = {
  clothes: 'Одежда',
  accessories: 'Аксессуары',
  shoes: 'Обувь',
  cosmetics: 'Косметика',
  glasses: 'Очки',
  bags: 'Сумки',
  ties: 'Галстуки',
  belts: 'Ремни',
  tshirts: 'Футболки',
  jackets: 'Куртки',
  trousers: 'Брюки',
  shorts: 'Шорты',
  pomade: 'Помада',
  tush: 'Туш',
  powder: 'Пудра',
  highlighter: 'Хайлайтер',
  shoe: 'Туфли',
  sandals: 'Сандали',
  sneakers: 'Кроссовки'
};

const ROUTES_MAP = [
  {
    path: '/',
    children: <Menu />,
    exact: true
  },
  {
    path: '/catalog',
    children: <Menu />,
    exact: true
  },
  {
    path: '/catalog/:title',
    children: <Menu />,
    exact: true
  },
  {
    path: '/catalog/:title/:subTitle',
    children: <Menu />,
    exact: true
  },
  {
    path: '/catalog/:title/:subTitle/:last',
    children: <Menu />,
    exact: true
  }
];

const generateListFromMap = (map: CatalogMap) => {
  const list: React.ReactNode[] = [];

  map.forEach(({ title, link }, key) => {
    list.push(
      <li key={key}>
        <Link to={link}>{title}</Link>
      </li>
    );
  });

  return list;
};

const generateModelFromMap = (
  map: CatalogMap,
  title: AcessorySections | СlothesSections | ShoesSections | СosmeticsSections
) => map.get(title)?.model;

const generateModelLinkFromMap = (
  map: CatalogMap,
  title: AcessorySections | СlothesSections | ShoesSections | СosmeticsSections
) => `${map.get(title)?.link}/${generateModelFromMap(map, title)?.replace(/\s/g, '')}`;

const generateRoutersObjectsFromMap = (map: CatalogMap) => {
  const objectsArray: { path: string; title: string; menu: React.ReactNode[] }[] = [];

  map.forEach(({ title, link }) => {
    objectsArray.push({
      path: link,
      title: title,
      menu: []
    });
  });

  return objectsArray;
};

const generateChildrenMap = (title: CatalogSections) => generateRoutersObjectsFromMap(getCurrentMap(title));

const generateSubCatalogList = (title: AcessorySections | СlothesSections | ShoesSections | СosmeticsSections) => {
  switch (title) {
    case 'highlighter':
    case 'pomade':
    case 'powder':
    case 'tush':
      return (
        <li>
          <Link to={generateModelLinkFromMap(СosmeticsMap, title)}>{generateModelFromMap(СosmeticsMap, title)}</Link>
        </li>
      );

    case 'sandals':
    case 'shoe':
    case 'sneakers':
      return (
        <li>
          <Link to={generateModelLinkFromMap(ShoesMap, title)}>{generateModelFromMap(ShoesMap, title)}</Link>
        </li>
      );

    case 'jackets':
    case 'shorts':
    case 'trousers':
    case 'tshirts':
      return (
        <li>
          <Link to={generateModelLinkFromMap(СlothesMap, title)}>{generateModelFromMap(СlothesMap, title)}</Link>
        </li>
      );

    case 'bags':
    case 'belts':
    case 'ties':
    case 'glasses':
      return (
        <li>
          <Link to={generateModelLinkFromMap(AcessoriesMap, title)}>{generateModelFromMap(AcessoriesMap, title)}</Link>
        </li>
      );
  }
};

const getCurrentMap = (title: CatalogSections) => {
  switch (title) {
    case 'accessories':
      return AcessoriesMap;
    case 'clothes':
      return СlothesMap;
    case 'cosmetics':
      return СosmeticsMap;
    case 'shoes':
      return ShoesMap;
  }
};

const generateSubmenu = (title: CatalogSections) => {
  const breadcrumbs: React.ReactNode[] = [];

  getCurrentMap(title).forEach(({ link, title }) => {
    breadcrumbs.push(
      <BreadcrumbsItem key={link} component={Link} to={link}>
        {title}
      </BreadcrumbsItem>
    );
  });

  return breadcrumbs;
};

const BREADCRUMBS_MAP = {
  ['/']: {
    path: '/',
    title: 'Главная',
    children: []
  },
  ['/catalog/']: {
    path: '/catalog',
    title: 'Каталог',
    children: []
  },
  ['/catalog/:title/']: {
    path: ({ title }: any) => `/catalog/${title}`,
    title: ({ title }: { title: CatalogSections }) => TRANSLATIONS[title],
    children: [
      {
        path: '/catalog/clothes',
        title: 'Одежда',
        menu: generateSubmenu('clothes')
      },
      {
        path: '/catalog/accessories',
        title: 'Аксессуары',
        menu: generateSubmenu('accessories')
      },
      {
        path: '/catalog/shoes',
        title: 'Обувь',
        menu: generateSubmenu('shoes')
      },
      {
        path: '/catalog/cosmetics',
        title: 'Косметика',
        menu: generateSubmenu('cosmetics')
      }
    ]
  },
  ['/catalog/:title/:subTitle/']: {
    path: ({ title, subTitle }: any) => `/catalog/${title}/${subTitle}`,
    title: ({ subTitle }: { subTitle: AcessorySections }) => TRANSLATIONS[subTitle],
    children: ({ title }: { title: CatalogSections }) => generateChildrenMap(title)
  },
  ['/catalog/:title/:subTitle/:last/']: {
    path: ({ title, subTitle }: any) => `/catalog/${title}/${subTitle}/lv`,
    title: ({ title, subTitle }: { subTitle: AcessorySections; title: CatalogSections }) =>
      getCurrentMap(title).get(subTitle)?.model || '',
    children: []
  }
};

function renderCatalogList(title: CatalogSections) {
  switch (title) {
    case 'cosmetics':
      return generateListFromMap(СosmeticsMap);
    case 'shoes':
      return generateListFromMap(ShoesMap);
    case 'clothes':
      return generateListFromMap(СlothesMap);
    case 'accessories':
      return generateListFromMap(AcessoriesMap);
  }
}

function Menu() {
  const { pathname } = useLocation<any>();
  const { title, subTitle, last } = useParams<{ title: CatalogSections; subTitle: AcessorySections; last: string }>();

  if (last) {
    return (
      <>
        <h4>{getCurrentMap(title).get(subTitle)?.model}</h4>
      </>
    );
  }

  if (subTitle) {
    return (
      <>
        <h4>{TRANSLATIONS[subTitle]}</h4>
        <ul>{generateSubCatalogList(subTitle)}</ul>
      </>
    );
  }

  if (title) {
    return (
      <>
        <h4>{TRANSLATIONS[title]}</h4>
        <ul>{renderCatalogList(title)}</ul>
      </>
    );
  }

  if (pathname === '/catalog') {
    return (
      <>
        <h4>Каталог</h4>
        <ul>
          <li>
            <Link to="/catalog/clothes">Одежда</Link>
          </li>
          <li>
            <Link to="/catalog/accessories">Аксессуары</Link>
          </li>
          <li>
            <Link to="/catalog/shoes">Обувь</Link>
          </li>
          <li>
            <Link to="/catalog/cosmetics">Косметика</Link>
          </li>
        </ul>
      </>
    );
  }

  return (
    <>
      <h4>Главная</h4>
      <ul>
        <li>
          <Link to="/catalog">Каталог</Link>
        </li>
      </ul>
    </>
  );
}

const Breadcrumbs = () => {
  const match = useRouteMatch<any>();
  const splitedPath = Array.from(new Set(match.path.split('/')));
  let tempPath = '';
  const breadcrumbs: React.ReactNode[] = [];
  let breadcrumbsSubmenu: React.ReactNode[] = [];

  splitedPath.forEach((path) => {
    tempPath += path + '/';

    const menu = { ...BREADCRUMBS_MAP[tempPath as keyof typeof BREADCRUMBS_MAP] };

    if (typeof menu.children === 'function') {
      menu.children = menu.children(match.params);
    }

    menu.children = menu.children.map((child) => ({ ...child }));

    if (typeof menu.title === 'function') {
      menu.title = menu.title(match.params);
    }

    if (typeof menu.path === 'function') {
      menu.path = menu.path(match.params);
    }

    menu.children.forEach((menu) => {
      breadcrumbsSubmenu.push(
        <BreadcrumbsItem component={Link} menu={menu.menu.length ? menu.menu : []} key={menu.path} to={menu.path}>
          {menu.title}
        </BreadcrumbsItem>
      );
    });

    breadcrumbs.push(
      <BreadcrumbsItem menu={breadcrumbsSubmenu} key={menu.path} component={Link} to={menu.path}>
        {menu.title}
      </BreadcrumbsItem>
    );

    breadcrumbsSubmenu = [];
  });

  return <ESBreadcumbs>{breadcrumbs}</ESBreadcumbs>;
};

export const Demo: Story = () => {
  return (
    <MemoryRouter initialEntries={['/']}>
      {ROUTES_MAP.map((route) => (
        <Route key={route.path} exact={route.exact} path={route.path}>
          <>
            <Breadcrumbs />
            {route.children}
          </>
        </Route>
      ))}
    </MemoryRouter>
  );
};
