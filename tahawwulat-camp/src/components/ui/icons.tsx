"use client";

import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
  size?: number;
}

// Mosque / Faith Icon
export function MosqueIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={cn("text-current", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3C12 3 8 6 8 9C8 10.5 9 12 12 12C15 12 16 10.5 16 9C16 6 12 3 12 3Z" />
      <path d="M12 12V15" />
      <path d="M5 21V15C5 15 5 12 8 12" />
      <path d="M19 21V15C19 15 19 12 16 12" />
      <path d="M3 21H21" />
      <path d="M8 21V18C8 17 9 16 10 16H14C15 16 16 17 16 18V21" />
      <circle cx="12" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

// Brain / Psychology Icon
export function BrainIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={cn("text-current", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5C12 3.89543 11.1046 3 10 3C8.89543 3 8 3.89543 8 5" />
      <path d="M12 5C12 3.89543 12.8954 3 14 3C15.1046 3 16 3.89543 16 5" />
      <path d="M8 5C6.89543 5 6 5.89543 6 7C6 8 6.5 8.5 7 9" />
      <path d="M16 5C17.1046 5 18 5.89543 18 7C18 8 17.5 8.5 17 9" />
      <path d="M7 9C5.89543 9 5 9.89543 5 11C5 12.1046 5.89543 13 7 13" />
      <path d="M17 9C18.1046 9 19 9.89543 19 11C19 12.1046 18.1046 13 17 13" />
      <path d="M7 13C6 13.5 5 14.5 5 16C5 17.5 6 19 8 19" />
      <path d="M17 13C18 13.5 19 14.5 19 16C19 17.5 18 19 16 19" />
      <path d="M8 19C8 20.1046 9.5 21 12 21C14.5 21 16 20.1046 16 19" />
      <path d="M12 5V21" />
    </svg>
  );
}

// Mountain / Outdoor Icon
export function MountainIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={cn("text-current", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3L12 10L16 3" />
      <path d="M2 21L8 10L11 15L14 10L16 14L22 21" />
      <path d="M2 21H22" />
      <circle cx="18" cy="5" r="2" />
    </svg>
  );
}

// Book / Quran Icon
export function BookOpenIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={cn("text-current", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" />
      <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" />
      <path d="M6 7H8" />
      <path d="M6 11H8" />
      <path d="M16 7H18" />
      <path d="M16 11H18" />
    </svg>
  );
}

// Handshake / Brotherhood Icon
export function HandshakeIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={cn("text-current", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 17L7 21L4 18L8 14" />
      <path d="M13 17L17 21L20 18L16 14" />
      <path d="M12 12L7 7L4 10L9 15" />
      <path d="M12 12L17 7L20 10L15 15" />
      <path d="M9 15L12 12L15 15" />
      <path d="M12 12V8" />
      <circle cx="12" cy="5" r="2" />
    </svg>
  );
}

// Moon / Night Prayer Icon
export function MoonStarsIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={cn("text-current", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      <path d="M17 4L17.5 6L19.5 6.5L17.5 7L17 9L16.5 7L14.5 6.5L16.5 6L17 4Z" fill="currentColor" />
      <path d="M21 10L21.25 11L22.25 11.25L21.25 11.5L21 12.5L20.75 11.5L19.75 11.25L20.75 11L21 10Z" fill="currentColor" />
    </svg>
  );
}

// Praying Hands Icon
export function PrayingHandsIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={cn("text-current", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3V8" />
      <path d="M8 8L12 12L16 8" />
      <path d="M7 12C6 13 5 15 5 17C5 19 6 21 8 21" />
      <path d="M17 12C18 13 19 15 19 17C19 19 18 21 16 21" />
      <path d="M8 21H16" />
      <path d="M9 12L12 15L15 12" />
      <path d="M10 17H14" />
    </svg>
  );
}

// Graduation / Knowledge Icon
export function GraduationIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={cn("text-current", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10L12 5L2 10L12 15L22 10Z" />
      <path d="M6 12V17C6 17 8 20 12 20C16 20 18 17 18 17V12" />
      <path d="M22 10V16" />
    </svg>
  );
}

// Strength / Mental Power Icon
export function ShieldIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={cn("text-current", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
      <path d="M9 12L11 14L15 10" />
    </svg>
  );
}

// Heart / Emotion Icon
export function HeartIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={cn("text-current", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61C20.3292 4.09924 19.7228 3.69397 19.0554 3.41708C18.3879 3.14019 17.6725 2.99756 16.95 2.99756C16.2275 2.99756 15.5121 3.14019 14.8446 3.41708C14.1772 3.69397 13.5708 4.09924 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99804 7.05 2.99804C5.59096 2.99804 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54804 7.04097 1.54804 8.5C1.54804 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.3508 11.8792 21.756 11.2728 22.0329 10.6054C22.3098 9.93789 22.4524 9.22248 22.4524 8.5C22.4524 7.77752 22.3098 7.0621 22.0329 6.39464C21.756 5.72718 21.3508 5.12075 20.84 4.61Z" />
    </svg>
  );
}

// Star / Excellence Icon
export function StarIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={cn("text-current", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// Users / Community Icon
export function UsersIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={cn("text-current", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" />
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" />
    </svg>
  );
}

// Target / Goal Icon
export function TargetIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={cn("text-current", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2V6" />
      <path d="M12 18V22" />
      <path d="M2 12H6" />
      <path d="M18 12H22" />
    </svg>
  );
}

// Running / Physical Icon
export function RunningIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={cn("text-current", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="14" cy="4" r="2" />
      <path d="M4 17L7 14L10 16L14 11" />
      <path d="M10 16L8 21" />
      <path d="M14 11L18 7" />
      <path d="M14 11L16 17L20 19" />
      <path d="M7 14L4 10" />
    </svg>
  );
}

// Sparkle / Decorative Star
export function SparkleIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      className={cn("text-current", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
    </svg>
  );
}

// Icon Map for dynamic rendering
export type IconName = 
  | "mosque"
  | "brain"
  | "mountain"
  | "book"
  | "handshake"
  | "moon"
  | "praying"
  | "graduation"
  | "shield"
  | "heart"
  | "star"
  | "users"
  | "target"
  | "running"
  | "sparkle";

const iconComponents: Record<IconName, React.ComponentType<IconProps>> = {
  mosque: MosqueIcon,
  brain: BrainIcon,
  mountain: MountainIcon,
  book: BookOpenIcon,
  handshake: HandshakeIcon,
  moon: MoonStarsIcon,
  praying: PrayingHandsIcon,
  graduation: GraduationIcon,
  shield: ShieldIcon,
  heart: HeartIcon,
  star: StarIcon,
  users: UsersIcon,
  target: TargetIcon,
  running: RunningIcon,
  sparkle: SparkleIcon,
};

interface DynamicIconProps extends IconProps {
  name: IconName;
}

export function Icon({ name, className, size = 24 }: DynamicIconProps) {
  const IconComponent = iconComponents[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
}
