import ProductList from '@/components/ProductList/ProductList';
import Head from 'next/head';
import jwt from 'jsonwebtoken';

import styles from '@/styles/Products.module.css';

export default function Products({ data, page }) {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <main className={styles['main']}>
        <h1>Server Side Rendered Scraping Website</h1>
        {data.data && (
          <ProductList
            currentPage={parseInt(page, 10)}
            totalPages={data.totalPages}
            products={data.data}
          />
        )}
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.page || 1;
  const secretKey = process.env.SECRET_KEY;
  const token = jwt.sign({ user: 'ssr-app' }, secretKey, { expiresIn: '1m' });
  const res = await fetch(
    'http://localhost:8080/api/products?limit=20&page=' + page,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();
  return {
    props: {
      data: data,
      page: page,
      token: token,
    },
  };
}
