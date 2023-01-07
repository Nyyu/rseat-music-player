import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

interface TextProps {
  className?: string
  asChild?: boolean
  size?: "sm" | "md" | "lg"
  weight?: "light" | "normal" | "semibold" | "bold"
  children: React.ReactNode
}

export const Text = ({
  size = "md",
  weight = "normal",
  className = "",
  asChild = false,
  children,
}: TextProps) => {
  const TextSlot = asChild ? Slot : "p"

  return (
    <TextSlot
      className={clsx(
        "text-neutral",
        {
          "text-sm": size === "sm",
          "text-md": size === "md",
          "text-lg": size === "lg",
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
    </TextSlot>
  )
}
