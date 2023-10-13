import Counter from "../../../components/counter";

async function getData() {
  const res = await fetch(`https://api.tvmaze.com/shows/1`);
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>
        Hello, Statically Rendered Server Component with Client Component
      </h1>
      <dl>
        <dt>Show</dt>
        <dd>{data.name}</dd>
        <dt>Time</dt>
        <dd>{Date.now()}</dd>
      </dl>
      <Counter />
    </div>
  );
}
