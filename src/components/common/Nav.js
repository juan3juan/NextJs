import React from "react";
import Link from "next/link";

const links = [
  { href: "https://zeit.co/now", label: "ZEIT" },
  { href: "https://github.com/zeit/next.js", label: "GitHub" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul className="primary-nav">
      <li className="left">
        <Link href="https://nyislaw.com/">
          <a>NYIS Law</a>
        </Link>
      </li>
      <li className="right">
        <Link href="https://nyislaw.com/ourfirm/">
          <a>Our Firm</a>
        </Link>
      </li>
      <li className="right">
        <Link href="https://nyislaw.com/practice/">
          <a>Practice</a>
        </Link>
      </li>
      <li className="right">
        <Link href="https://ask.nyislaw.com/">
          <a>Ask</a>
        </Link>
      </li>
      <li className="right">
        <Link href="https://nyislaw.com/contactus/">
          <a>Contact us</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        background: #5f79a3;
      }
      ul {
        display: flex;
        justify-content: flex-end;
        list-style-type: none;
        margin-left: 220px;
        margin-right: 220px;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        padding: 6px 8px;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 13px;
      }
      .left {
        margin-right: auto;
      }
    `}</style>
  </nav>
);

export default Nav;
