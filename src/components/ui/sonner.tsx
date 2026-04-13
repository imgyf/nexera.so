import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "!bg-[#0a0a0a] !text-white !border !border-white/15 !shadow-lg",
          title: "!text-white",
          description: "!text-white/70",
          actionButton: "!bg-white !text-black",
          cancelButton: "!bg-white/10 !text-white",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
