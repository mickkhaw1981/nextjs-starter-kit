"use client";

import { Loader2, LucideIcon } from "lucide-react";
import type React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Define the props interface
export interface PrimaryButtonProps {
  // Core Props
  title: string;
  onPress: () => void;

  // Styling Props
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  className?: string;

  // Icon Props
  IconLeft?: LucideIcon;
  IconRight?: LucideIcon;

  // State Props
  isLoading?: boolean;

  // Additional button props
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  bgVariant = "primary",
  textVariant = "default",
  className = "",
  IconLeft,
  IconRight,
  isLoading = false,
  type = "button",
  disabled = false,
  ...props
}) => {
  // Map bgVariant to shadcn/ui button variants
  const getButtonVariant = () => {
    switch (bgVariant) {
      case "primary":
        return "default";
      case "secondary":
        return "secondary";
      case "danger":
        return "destructive";
      case "outline":
        return "outline";
      case "success":
        return "outline"; // We'll customize this with additional classes
      default:
        return "default";
    }
  };

  // Get text color classes based on textVariant
  const getTextColorClass = () => {
    switch (textVariant) {
      case "primary":
        return "text-neutral-900 dark:text-neutral-50";
      case "secondary":
        return "text-neutral-100 dark:text-neutral-800";
      case "danger":
        return "text-red-500 dark:text-red-900";
      case "success":
        return "text-green-500";
      default:
        return "";
    }
  };

  // Additional classes for success variant
  const getAdditionalClasses = () => {
    if (bgVariant === "success") {
      return "border-green-500 bg-green-500 text-white hover:bg-green-600 hover:border-green-600";
    }
    return "";
  };

  return (
    <Button
      type={type}
      variant={getButtonVariant()}
      onClick={onPress}
      disabled={disabled || isLoading}
      className={cn(getTextColorClass(), getAdditionalClasses(), className)}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 animate-spin" />}
      {IconLeft && !isLoading && <IconLeft />}
      {title}
      {IconRight && !isLoading && <IconRight />}
    </Button>
  );
};
