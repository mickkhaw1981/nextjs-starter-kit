"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

const ColorDemo = () => {
  return (
    <div className="container mx-auto px-6 py-10 space-y-8 max-w-6xl">
      <h1 className="text-3xl font-bold">Custom Colors Demo</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Primary Palette</h2>
        <div className="grid grid-cols-5 gap-3">
          <div className="p-4 bg-primary-50 text-primary-900 rounded-md">
            50
          </div>
          <div className="p-4 bg-primary-100 text-primary-900 rounded-md">
            100
          </div>
          <div className="p-4 bg-primary-200 text-primary-900 rounded-md">
            200
          </div>
          <div className="p-4 bg-primary-300 text-primary-900 rounded-md">
            300
          </div>
          <div className="p-4 bg-primary-400 text-primary-900 rounded-md">
            400
          </div>
          <div className="p-4 bg-primary-500 text-white rounded-md">500</div>
          <div className="p-4 bg-primary-600 text-white rounded-md">600</div>
          <div className="p-4 bg-primary-700 text-white rounded-md">700</div>
          <div className="p-4 bg-primary-800 text-white rounded-md">800</div>
          <div className="p-4 bg-primary-900 text-white rounded-md">900</div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Neutral Palette</h2>
        <div className="grid grid-cols-5 gap-3">
          <div className="p-4 bg-neutral-50 text-neutral-900 rounded-md">
            50
          </div>
          <div className="p-4 bg-neutral-100 text-neutral-900 rounded-md">
            100
          </div>
          <div className="p-4 bg-neutral-200 text-neutral-900 rounded-md">
            200
          </div>
          <div className="p-4 bg-neutral-300 text-neutral-900 rounded-md">
            300
          </div>
          <div className="p-4 bg-neutral-400 text-neutral-900 rounded-md">
            400
          </div>
          <div className="p-4 bg-neutral-500 text-white rounded-md">500</div>
          <div className="p-4 bg-neutral-600 text-white rounded-md">600</div>
          <div className="p-4 bg-neutral-700 text-white rounded-md">700</div>
          <div className="p-4 bg-neutral-800 text-white rounded-md">800</div>
          <div className="p-4 bg-neutral-900 text-white rounded-md">900</div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons with Primary Colors</h2>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-primary-500 text-white hover:bg-primary-600">
            Primary 500
          </Button>

          <Button className="bg-primary-700 text-white hover:bg-primary-800">
            Primary 700
          </Button>

          <Button
            variant="outline"
            className="border-primary-300 text-primary-700 hover:bg-primary-50 dark:border-primary-600 dark:text-primary-300 dark:hover:bg-primary-950/50"
          >
            Primary Outline
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons with Neutral Colors</h2>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-neutral-500 text-white hover:bg-neutral-600">
            Neutral 500
          </Button>

          <Button className="bg-neutral-800 text-white hover:bg-neutral-900">
            Neutral 800
          </Button>

          <Button
            variant="outline"
            className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800/50"
          >
            Neutral Outline
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Badges</h2>
        <div className="flex flex-wrap gap-4">
          <Badge className="bg-primary-500 text-white">Primary 500</Badge>
          <Badge className="bg-primary-700 text-white">Primary 700</Badge>
          <Badge className="bg-neutral-500 text-white">Neutral 500</Badge>
          <Badge className="bg-neutral-700 text-white">Neutral 700</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Alerts</h2>
        <div className="space-y-4">
          <Alert className="bg-primary-50 border-primary-200 text-primary-800">
            <AlertTitle>Primary Alert</AlertTitle>
            <AlertDescription>Using primary palette colors.</AlertDescription>
          </Alert>

          <Alert className="bg-neutral-50 border-neutral-200 text-neutral-800">
            <AlertTitle>Neutral Alert</AlertTitle>
            <AlertDescription>Using neutral palette colors.</AlertDescription>
          </Alert>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Toast Notifications</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() =>
              toast("Primary Notification", {
                description: "Using primary color palette",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
                className: "bg-primary-50 border-primary-200 text-primary-800",
              })
            }
          >
            Primary Toast
          </Button>

          <Button
            onClick={() =>
              toast("Neutral Notification", {
                description: "Using neutral color palette",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
                className: "bg-neutral-50 border-neutral-200 text-neutral-800",
              })
            }
          >
            Neutral Toast
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ColorDemo;
