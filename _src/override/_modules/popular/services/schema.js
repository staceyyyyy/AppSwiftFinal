import {gql} from '@apollo/client';

export const GET_PRODUCTS_BY_BRAND = gql`
  query getProductsByBrand(
    $attributeId: String
    $currentPage: Int
    $pageSize: Int
    $sortBy: ProductAttributeSortInput
  ) {
    products(
      filter: {brand: {eq: $attributeId}}
      currentPage: $currentPage
      pageSize: $pageSize
      sort: $sortBy
    ) {
      total_count
      items {
        id
        name
        sku
        url_key
        small_image {
          url
          label
        }
        price_range {
          maximum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
            discount {
              amount_off
              percent_off
            }
          }
        }
      }
      page_info {
        current_page
        total_pages
        page_size
      }
    }
  }
`;
