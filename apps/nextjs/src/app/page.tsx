import { Terminal } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  CommandMenu,
} from "@acme/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Alert>
        <Terminal className="size-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>

      <CommandMenu />
      <Badge>hello</Badge>
    </main>
  );
}
