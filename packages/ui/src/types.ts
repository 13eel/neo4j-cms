import { z } from "zod";

export interface BaseOption {
  value: string;
  label?: string;
}
type StringBaseOtion = Required<BaseOption>;
export type StrictOption<T extends object = EmptyOject> = StringBaseOtion & T;

export type Option<T extends object = EmptyOject> = [keyof T] extends [never]
  ? BaseOption | string
  : [keyof T] extends undefined
    ? BaseOption | string
    : BaseOption & T;
export type XOption = BaseOption & Record<string, unknown>;
export type XOptions = XOption[] | string[];
export type EmptyObject = Record<string | number, never>;

const bar: XOptions = [{ value: "asd" }, { value: "qq", color: "red" }];
console.log(bar);
bar.map((item) => {
  console.log(item);

  return item;
});
//          ^?"asd"

export type O = string | (BaseOption & Record<string, any>);
const oof: O = { value: "asd", color: "red" };
console.log("🚀 ~ oof:", oof);
interface Props<T extends XOptions> {
  name: string;
  items: T;
}
export function Hello<T extends XOptions>(props: Props<T>) {
  return props;
}
const f = Hello({
  name: "test",
  items: [{ value: "asd", color: "string" }, { value: "qwe" }],
});
console.log(f);
f.items.map((item) => {
  console.log(item);
  item.color;
  return item;
});

const OptionSchema = z.intersection(
  z.object({ value: z.string(), label: z.string().optional() }),
  z.record(z.string(), z.unknown()),
);
const OptionsSchema = z.union([OptionSchema.array(), z.string().array()]);
export type ZOption = z.infer<typeof OptionSchema>;
export type ZOptions = z.infer<typeof OptionsSchema>;
