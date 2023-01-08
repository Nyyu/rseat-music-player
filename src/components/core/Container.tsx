import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

interface ContainerProps {
  asChild?: boolean
  children: React.ReactNode
  className?: string
}

export const Container = ({
  className = "",
  children,
  asChild = false,
}: ContainerProps) => {
  const ContainerSlot = asChild ? Slot : "div"
  return (
    <ContainerSlot className={clsx("bg-primary rounded-lg", className)}>
      {children}
    </ContainerSlot>
  )
}
