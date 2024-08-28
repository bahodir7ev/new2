export const urls = {
  category: {
    get: '/category',
  },
  products: {
    isSale: '/products?is_sale=true',
    isPopular: '/products?is_popular=true',
    isNew: '/products?is_new=true',
    getId: (id) => `/products/${id}`,
    getCategoryId: (id) => `/products/?category_id=${id}`
  }
}
