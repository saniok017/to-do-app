import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import { Fragment } from 'react';

const Layout = (
  {
    children,
    title,
    description,
    backButton,
    user,
  },
) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <div className="container">
      <nav>
        <Link href="/">
          <a className="main-link">Home</a>
        </Link>
        {(!user)
          ? <Link href="/auth/github"><a className="main-link">Login</a></Link>
          : <Fragment>
              <Link href="/logout"><a className="main-link">Log Out</a></Link>
              <img className="RSSLink" alt="User Avatar" src={user.photos[0].value} />
            </Fragment>
        }
      </nav>

      {children}
    </div>

    <style jsx>{`
      .container {
        max-width: 90vw;
        margin: 0 auto;
        background: #f6f6ef;
      }
      nav {
        background: #f60;
        padding: 0.5em;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav > * {
        display: inline-block;
        color: black;
      }
      nav a {
        text-decoration: none;
      }
      nav .main-link {
        font-weight: bold;
      }
      nav .back-button {
        font-size: 0.9rem;
        padding-right: 1em;
        cursor: pointer;
      }
    `}</style>
    <style global jsx>{`
      body {
        background-color: #f7f7f7;
        font-family: Verdana, Geneva, 'Roboto', sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;
