"use client";

import { Button } from "@kapao-kit/ui";
import { toast, Toaster } from "sonner";

export function ToastExample() {
  return (
    <>
      <Toaster />
      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
            })
          }
        >
          Show Toast
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success("Successfully saved!")}
        >
          Success Toast
        </Button>
        <Button
          variant="destructive"
          onClick={() => toast.error("Something went wrong")}
        >
          Error Toast
        </Button>
      </div>
    </>
  );
}
