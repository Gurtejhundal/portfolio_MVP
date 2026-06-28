declare module "*.jsx" {
  import type { ComponentType, HTMLAttributes, ReactNode } from "react";

  export const Card: ComponentType<
    HTMLAttributes<HTMLDivElement> & {
      customClass?: string;
      children?: ReactNode;
    }
  >;

  const Component: ComponentType<Record<string, unknown>>;
  export default Component;
}
