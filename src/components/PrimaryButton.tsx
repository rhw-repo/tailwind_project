import { tv, type VariantProps } from "tailwind-variants";
import type { FC, ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

const buttonStyles = tv({
  base: "w-full bg-blue-700 text-neutral-100 rounded-sm px-4 py-2 hover:bg-blue-400 hover:cursor-pointer",
  variants: {
    style: {
      blankPages: "landscape:text-sm border rounded cursor-pointer mb-4",
    },
  },
});

const PrimaryButton: FC<PrimaryButtonProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <button className={buttonStyles({ style })} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
