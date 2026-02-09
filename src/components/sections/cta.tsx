import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function CTA() {
  return (
    <Section id="cta">
      <div className="border overflow-hidden relative text-center py-16 mx-auto">
        <p className="max-w-3xl text-foreground mb-6 text-balance mx-auto font-medium text-3xl">
          Ready to see what your team can build?
        </p>

        <div className="flex flex-col items-center gap-3">
          <Link
            href="mailto:ycanerden@gmail.com?subject=Habitat%20Enterprise%20-%20Pilot%20Session"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-lg"
            )}
          >
            Book a Pilot Session
          </Link>
          <p className="text-sm text-muted-foreground">
            Or reach out directly at{" "}
            <Link href="mailto:ycanerden@gmail.com" className="text-primary hover:underline">
              ycanerden@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
