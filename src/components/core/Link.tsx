import NextLink, { LinkProps as NextLinkProps } from "next/link"

import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

interface LinkProps extends NextLinkProps {
  className?: string
  asChild?: boolean
  variant?: "primary" | "secondary" | "hover"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export const Link = ({
  variant = "primary",
  className = "",
  asChild = false,
  children,
  ...props
}: LinkProps) => {
  const LinkSlot = asChild ? Slot : NextLink
  return (
    <LinkSlot
      className={clsx(
        "link",
        {
          "link-primary": variant === "primary",
          "link-secondary": variant === "secondary",
          "link-hover": variant === "hover",
        },
        className
      )}
      {...props}
    >
      {children}
    </LinkSlot>
  )
}
