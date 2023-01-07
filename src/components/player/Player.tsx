import NextImage, { ImageProps as NextImageProps } from "next/image"
import dynamic from "next/dynamic"

import clsx from "clsx"
import "@vime/core/themes/default.css"

import { Container } from "../core/Container"
import { Text } from "../core/Text"
import { Heading, HeadingProps } from "../core/Heading"

const DynamicVimePlayer = dynamic(() => import("./VimePlayer"), { ssr: false })
const DynamicVimeAudioPlayer = dynamic(() => import("./VimeAudio"), {
  ssr: false,
})

interface BodyProps {
  children: React.ReactNode
  className?: string
}

const Body = ({ children, className }: BodyProps) => {
  return <Container className={`p-7 ${className}`}>{children}</Container>
}

interface TitleProps extends HeadingProps {}

const Title = ({ children, ...props }: TitleProps) => {
  return <Heading {...props}>{children}</Heading>
}

interface ImageProps extends NextImageProps {
  className?: string
  useNextImage?: boolean
}

const Image = ({
  alt,
  src,
  className = "",
  useNextImage = false,
}: Omit<ImageProps, "src"> & { src: string }) => {
  const ImageSlot = useNextImage ? NextImage : "img"

  return (
    <ImageSlot
      alt={alt}
      src={src}
      className={clsx("h-full rounded-md", className)}
    />
  )
}

interface ControlProps {
  localFileName: string
}

const Control = ({ localFileName }: ControlProps) => {
  return <DynamicVimeAudioPlayer localFileName={localFileName} />
}

interface EmbedProps {
  id: string
}

const Embed = ({ id }: EmbedProps) => {
  return <DynamicVimePlayer id={id} />
}

const Player = {
  Body,
  Title,
  Image,
  Controls: Control,
  Embed,
}

export default Player
