import Link from 'next/link';

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great">
            Next JS is a great framework
          </Link>
        </li>
        <li>Something else ...</li>
      </ul>
    </>
  );
}

export default NewsPage;
