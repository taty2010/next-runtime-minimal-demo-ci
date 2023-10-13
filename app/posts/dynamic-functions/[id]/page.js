import { headers } from "next/headers";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export const dynamicParams = false;

export default function Page({ params }) {
  const headersList = headers();
  const referer = headersList.get("referer");

  return (
    <>
      <h1>Hello, Dynamically Rendered Server Component from {referer}</h1>
      <p>Paths /1 and /2 prerendered; other paths not found</p>
      <dl>
        <dt>Param</dt>
        <dd>{params.id}</dd>
        <dt>Time</dt>
        <dd>{Date.now()}</dd>
      </dl>
    </>
  );
}
