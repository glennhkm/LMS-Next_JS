import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
        primary:
          "opacity-100 hover:text-primary active:scale-95 active:duration-75 hover:scale-[1.01] hover:border-primary hover:bg-transparent bg-primary border font-normal sm:font-medium text-sm md:text-base  px-4 text-white py-[0.35rem] rounded-md duration-300",
        destructive:
          "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
        outline:
          "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        secondary:
          "opacity-100 hover:text-primary active:scale-95 active:duration-75 hover:scale-[1.01] hover:border-primary hover:bg-transparent bg-primary border font-light sm:font-normal  text-xs md:text-sm  px-3 text-white py-[0.3rem] rounded-md duration-300",
        cancel:
          "opacity-100 hover:text-red-800 active:scale-95 active:duration-75 hover:scale-[1.01] hover:border-red-800 hover:bg-transparent bg-red-800 font-light sm:font-normal border text-xs md:text-sm px-3 text-white py-[0.3rem] rounded-md duration-300",
        ghost:
          "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, disabled, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          disabled ? "pointer-events-none opacity-50" : ""
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
