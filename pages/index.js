import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '32px' }}>
      This is the homepage. To complete the challenge, please use the{' '}
      <Link href='/blog' style={{ color: 'blue' }}>
        <a style={{ color: 'blue' }}>/blog</a>
      </Link>{' '}
      page.
    </div>
  );
}
