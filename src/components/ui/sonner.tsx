import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      style={
        {
          "--normal-bg": "#0a0a0a",
          "--normal-text": "#ffffff",
          "--normal-border": "rgba(255,255,255,0.15)",
          "--success-bg": "#0a0a0a",
          "--success-text": "#ffffff",
          "--success-border": "rgba(255,255,255,0.15)",
          "--error-bg": "#1a0a0a",
          "--error-text": "#ffffff",
          "--error-border": "rgba(255,80,80,0.3)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster, toast }
