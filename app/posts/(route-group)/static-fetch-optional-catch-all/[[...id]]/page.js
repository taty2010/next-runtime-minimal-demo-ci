export async function generateStaticParams() {
  return [{ id: ['a', '1'] }, { id: ['b', '2'] }];
}

export const dynamicParams = true;

async function getData(params) {
  if (params.id) {
    const res = await fetch(`https://api.tvmaze.com/shows/${params.id[1]}`);
    return res.json();
  } else {
    return { name: 'No Show' };
  }
}

export default async function Page({ params }) {
  const data = await getData(params);

  return (
    <>
      <h1>Hello, Statically Rendered Server Component</h1>
      <p>Paths /a/1 and /b/2 prerendered; other paths rendered on-demand</p>
      <p>With route group</p>
      <dl>
        <dt>Show</dt>
        <dd>{data.name}</dd>
        <dt>Params</dt>
        <dd>{JSON.stringify(params.id)}</dd>
        <dt>Time</dt>
        <dd>{Date.now()}</dd>
      </dl>
    </>
  )
}
