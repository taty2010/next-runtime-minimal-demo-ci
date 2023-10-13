export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default function Page({ params }) {
  return (
    <>
      <h1>Hello, Statically Rendered Server Component</h1>
      <p>Paths /1 and /2 prerendered; other paths rendered on-demand</p>
      <dl>
        <dt>Param</dt>
        <dd>{params.id}</dd>
        <dt>Time</dt>
        <dd>{Date.now()}</dd>
      </dl>
    </>
  );
}
