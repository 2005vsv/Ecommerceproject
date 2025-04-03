import React from 'react'

function getproductsbycategories(products,category) {
  return (
   category.toLowerCase()==="all" ? products :products.filter(product=>product.category.name.toLowerCase()===category.toLowerCase())
  )
}

export default getproductsbycategories
