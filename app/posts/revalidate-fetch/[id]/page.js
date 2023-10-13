export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

async function getData(params) {
  const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`, {
    next: { revalidate: 20 },
  });
  return res.json();
}

export default async function Page({ params }) {
  const data = await getData(params);

  return (
    <>
      <h1>Hello, Statically Rendered Server Component</h1>
      <p>Paths /1 and /2 prerendered; other paths rendered on-demand</p>
      <p>Revalidating every 20 seconds</p>
      <dl>
        <dt>Show</dt>
        <dd>{data.name}</dd>
        <dt>Param</dt>
        <dd>{params.id}</dd>
        <dt>Time</dt>
        <dd>{Date.now()}</dd>
      </dl>
    </>
  );
}
