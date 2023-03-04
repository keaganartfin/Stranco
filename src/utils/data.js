export const productsQuery = `*[product_name.current == $product_name]{
  product_name,
  master_category,
  sub_category,
  product_category,
  description,
  shrink_ratio,
  size_range,
  specifications,
  applications,
  data_sheet
}`;