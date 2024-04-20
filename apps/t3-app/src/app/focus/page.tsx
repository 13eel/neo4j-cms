import { unstable_noStore as noStore } from "next/cache";

import { NodeForm } from "@acme/graph-cms";

export default async function FocusPage() {
  noStore();
  return (
    <main>
      <h1>Focus Page</h1>
      <NodeForm />
    </main>
  );
}
