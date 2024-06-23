export function Header({ text }: { text: string }): JSX.Element {
  return <h1 className="text-white-700 font-bold">Hello {text}</h1>;
}
