"use client";

import { Home, ArrowRight, Mail, Settings, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

import { PrimaryButton } from "@/components/button/CustomButton";

export default function ButtonDemo() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8 p-4">
      <h1 className="mb-6 text-2xl font-bold">Custom Button Examples</h1>

      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
        {/* Basic Button */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-sm font-medium">Basic Button</h2>
          <PrimaryButton
            title="Click Me"
            onPress={() =>
              toast("Button clicked!", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          />
        </div>

        {/* Secondary Button */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-sm font-medium">Secondary Button</h2>
          <PrimaryButton
            title="Secondary"
            bgVariant="secondary"
            onPress={() => alert("Secondary button clicked!")}
          />
        </div>

        {/* Danger Button */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-sm font-medium">Danger Button</h2>
          <PrimaryButton
            title="Delete"
            bgVariant="danger"
            onPress={() => alert("Danger button clicked!")}
            IconLeft={AlertTriangle}
          />
        </div>

        {/* Outline Button */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-sm font-medium">Outline Button</h2>
          <PrimaryButton
            title="Settings"
            bgVariant="outline"
            onPress={() => alert("Outline button clicked!")}
            IconLeft={Settings}
          />
        </div>

        {/* Success Button */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-sm font-medium">Success Button</h2>
          <PrimaryButton
            title="Confirm"
            bgVariant="success"
            onPress={() => alert("Success button clicked!")}
          />
        </div>

        {/* Loading Button */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-sm font-medium">Loading Button</h2>
          <PrimaryButton
            title="Loading..."
            isLoading={true}
            onPress={() => {}}
          />
        </div>

        {/* Button with Left Icon */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-sm font-medium">Button with Left Icon</h2>
          <PrimaryButton
            title="Home"
            onPress={() => alert("Home button clicked!")}
            IconLeft={Home}
          />
        </div>

        {/* Button with Right Icon */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-sm font-medium">Button with Right Icon</h2>
          <PrimaryButton
            title="Next"
            onPress={() => alert("Next button clicked!")}
            IconRight={ArrowRight}
          />
        </div>

        {/* Button with Both Icons */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-sm font-medium">Button with Both Icons</h2>
          <PrimaryButton
            title="Contact"
            onPress={() => alert("Contact button clicked!")}
            IconLeft={Mail}
            IconRight={ArrowRight}
            className="bg-indigo-600 hover:bg-indigo-700"
          />
        </div>

        {/* Disabled Button */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-sm font-medium">Disabled Button</h2>
          <PrimaryButton
            title="Disabled"
            onPress={() => alert("This should not trigger")}
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
}
