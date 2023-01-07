import clsx from "clsx"

interface ContainerProps {
  as?: "div" | "section" | "span"
  children: React.ReactNode
  className?: string
}

export const Container = ({
  className = "",
  children,
  as = "div",
}: ContainerProps) => {
  const ContainerSlot = as
  return (
    <ContainerSlot className={clsx("bg-primary rounded-lg", className)}>
      {children}
    </ContainerSlot>
  )
}
