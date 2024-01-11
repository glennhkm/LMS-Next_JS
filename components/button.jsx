import React from "react";
import { cn } from "../@/lib/utils";

export const ButtonPrimary = ({
  children,
  href,
  onClick,
  type,
  disabled,
  className,
}) => {
  return (
    <div>
      <a href={href || ""}>
        <button
          type={type || ""}
          disabled={disabled ?? null}
          onClick={onClick || (() => {})}
          className={cn(
            `${
              disabled
                ? "opacity-50"
                : "opacity-100 hover:text-primary active:scale-95 active:duration-75 hover:scale-[1.01] hover:border-primary hover:bg-transparent"
            } bg-primary border font-normal sm:font-medium text-sm md:text-base  px-4 text-white py-[0.35rem] rounded-md duration-300`,
            className
          )}
        >
          {children}
        </button>
      </a>
    </div>
  );
};

export const ButtonSecondary = ({
  children,
  href,
  onClick,
  type,
  disabled,
  className,
}) => {
  return (
    <div>
      <a href={href || ""}>
        <button
          type={type || ""}
          disabled={disabled ?? null}
          onClick={onClick || (() => {})}
          className={cn(
            `${
              disabled
                ? "opacity-50"
                : "opacity-100 hover:none hover:text-primary active:scale-95 active:duration-75 hover:scale-[1.01] hover:border-primary hover:bg-transparent"
            } bg-primary border font-light sm:font-normal  text-xs md:text-sm px-2 sm:px-3 text-white py-[0.3rem] rounded-md duration-300`,
            className
          )}
        >
          {children}
        </button>
      </a>
    </div>
  );
};

export const ErrorButton = ({
  children,
  href,
  onClick,
  type,
  disabled,
  className,
}) => {
  return (
    <div>
      <a href={href || ""}>
        <button
          type={type || ""}
          disabled={disabled || null}
          onClick={onClick || (() => {})}
          className={cn(
            `${
              disabled
                ? "opacity-50"
                : "opacity-100 hover:text-red-800 active:scale-95 active:duration-75 hover:scale-[1.01] hover:border-red-800 hover:bg-transparent"
            } bg-red-800 font-light sm:font-normal border text-xs md:text-sm px-2 sm:px-3 text-white py-[0.3rem] rounded-md duration-300`,
            className
          )}
        >
          {children}
        </button>
      </a>
    </div>
  );
};
