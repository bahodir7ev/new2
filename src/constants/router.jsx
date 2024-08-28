import {
  About,
  CategoryPage,
  Home,
  NewPage,
  NewsPage,
  ProductPage,
  CartPage,
} from '../pages'
import Contacts from '../pages/contacts'

export const router = [
  {
    id: 1,
    path: '/',
    component: <Home />,
  },
  {
    id: 2,
    path: '/about',
    component: <About />,
  },
  {
    id: 3,
    path: '/cart',
    component: <CartPage />,
  },
  {
    id: 4,
    path: '/category/:id',
    component: <CategoryPage />,
  },
  {
    id: 5,
    path: '/contacts',
    component: <Contacts />,
  },
  {
    id: 6,
    path: '/news',
    component: <NewsPage />,
  },
  {
    id: 7,
    path: '/news/:id',
    component: <NewPage />,
  },
  {
    id: 8,
    path: '/product/:id',
    component: <ProductPage />,
  },
]

export const links = [
  {
    id: 1,
    path: '/product',
    title: 'Продукты',
  },
  {
    id: 2,
    path: '/fast-food',
    title: 'Еда быстрого приготовления',
  },
  {
    id: 3,
    path: '/cans',
    title: 'Консервы'
  },
  {
    id: 4,
    path: '/drinks',
    title: 'Напитки',
  },
  {
    id: 5,
    path: '/chemics',
    title: 'Бытовая химия'
  },
  {
    id: 6,
    path: '/self-care',
    title: 'Уход за собой'
  },
  {
    id: 7,
    path: '/other',
    title: 'Еще'
  },
];

export const features = [
  {
    id: 1,
    image: '/images/snickers.png',
    title: 'Популярные товары',
    subtitle: 'Все самые лучшие товары',
  },
  {
    id: 2,
    image: '/images/m&m.png',
    title: 'Новинки',
    subtitle: 'Новые позиции',
  },
  {
    id: 3,
    image: '/images/percent.png',
    title: 'Акции',
    subtitle: 'Лучшие цены',
  },
  {
    id: 4,
    image: '/images/comlects.png',
    title: 'Комплекты',
    subtitle: 'Все в одном',
  },
]

export const cardinfos = [
  {
    id: 1,
    image: '/images/ProductCardImage.png',
    title: 'Конина тушеная Улан, есть возможность в 2 строки',
    count: 'В наличии: 11 шт.',
    weight: 'Вес: 130гр',
    oldprice: '28 030 тг.',
    newprice: '24 320 тг.'
  },
  {
    id: 2,
    image: '/images/ProductCardImage.png',
    title: 'Конина тушеная Улан, есть возможность в 2 строки',
    count: 'В наличии: 11 шт.',
    weight: 'Вес: 130гр',
    oldprice: '28 030 тг.',
    newprice: '24 320 тг.'
  },
  {
    id: 3,
    image: '/images/ProductCardImage.png',
    title: 'Конина тушеная Улан, есть возможность в 2 строки',
    count: 'В наличии: 11 шт.',
    weight: 'Вес: 130гр',
    oldprice: '28 030 тг.',
    newprice: '24 320 тг.'
  },
  {
    id: 4,
    image: '/images/ProductCardImage.png',
    title: 'Конина тушеная Улан, есть возможность в 2 строки',
    count: 'В наличии: 11 шт.',
    weight: 'Вес: 130гр',
    oldprice: '28 030 тг.',
    newprice: '24 320 тг.'
  },
]