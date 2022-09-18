import Head from 'next/head';
import Link from 'next/link';
import React, { Children } from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Amazona' : 'Amazona'}</title>
        <meta name="description" content="One stop e-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex items-center h-12 justify-between shadow-md px-4">
            <Link href="/">
              <a className="text-lg font-bold">Amazona</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="text-lg font-bold">Cart</a>
              </Link>
              <Link href="/login">
                <a className="text-lg font-bold">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}
