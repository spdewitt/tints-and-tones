import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        "container mx-auto px-4 xl:px-5",
        props.large ? " max-w-screen-xl" : " max-w-screen-lg",
        !props.alt && "py-5 lg:py-4",
        props.className
      )}>
      {props.children}
    </div>
  );
}
