import { ButtonHTMLAttributes } from "react"
import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  asChild?: boolean
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  outline?: boolean
  children: React.ReactNode
}

export const Button = ({
  children,
  asChild = false,
  variant = "primary",
  size = "md",
  outline = false,
  className = "",
  ...props
}: ButtonProps) => {
  const ButtonSlot = asChild ? Slot : "button"

  return (
    <ButtonSlot
      className={clsx(
        "btn",
        {
          "btn-primary": variant === "primary",
          "btn-secondary": variant === "secondary",
          "btn-ghost": variant === "ghost",
        },
        {
          "btn-sm": size === "sm",
          "btn-md": size === "md",
          "btn-lg": size === "lg",
        },
        {
          "btn-outline": outline,
        },
        className
      )}
      {...props}
    >
      {children}
    </ButtonSlot>
  )
}
