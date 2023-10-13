import { headers } from "next/headers";

export default function Page() {
  const headersList = headers();
  const referer = headersList.get("referer");

  return <h1>Hello, Dynamically Rendered Server Component from {referer}</h1>;
}
