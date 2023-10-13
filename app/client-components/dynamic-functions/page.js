import { headers } from "next/headers";
import Counter from "../../../components/counter";

export default function Page() {
  const headersList = headers();
  const referer = headersList.get("referer");

  return (
    <div>
      <h1>
        Hello, Dynamically Rendered Server Component with Client Component and
        from {referer}
      </h1>
      <Counter />
    </div>
  );
}
