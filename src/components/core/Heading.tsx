import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

export interface HeadingProps {
  className?: string
  asChild?: boolean
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
  weight?: "light" | "normal" | "semibold" | "bold"
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: React.ReactNode
}

export const Heading = ({
  size = "md",
  weight = "normal",
  className = "",
  asChild = false,
  as = "h2",
  children,
}: HeadingProps) => {
  const HeadingSlot = asChild ? Slot : as

  return (
    <HeadingSlot
      className={clsx(
        "text-neutral",
        {
          "text-sm": size === "sm",
          "text-md": size === "md",
          "text-lg": size === "lg",
          "text-xl": size === "xl",
          "text-2xl": size === "2xl",
        },
        {
          "font-light": weight === "light",
          "font-normal": weight === "normal",
          "font-semibold": weight === "semibold",
          "font-bold": weight === "bold",
        },

        className
      )}
    >
      {children}
    </HeadingSlot>
  )
}
