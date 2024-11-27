import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

const HomePage = async () => {

  const products = await getProducts({isFeatured: true});
  const billboard = await getBillboard("a3dae84b-3bb4-4cbd-8a5f-d093179991ae")

  return (
    <Container>
      <div className='space-y-10 pb-10\'>
        <Billboard data={billboard}/>
      </div>
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title="Featured Products" items={products}/>
      </div>
    </Container>
  )
}

export default HomePage