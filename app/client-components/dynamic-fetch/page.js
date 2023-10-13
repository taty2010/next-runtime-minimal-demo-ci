import Counter from "../../../components/counter";

async function getData() {
  const res = await fetch(`https://api.tvmaze.com/shows/1`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>
        Hello, Dynamically Rendered Server Component with Client Component
      </h1>
      <p>Fetch cache disabled</p>
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
