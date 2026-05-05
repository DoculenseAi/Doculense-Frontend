import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function UserAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)

  return (
    <Avatar className="size-8">
      <AvatarFallback className="bg-primary/15 text-xs text-primary">
        {initials}
      </AvatarFallback>
    </Avatar>
  )
}
