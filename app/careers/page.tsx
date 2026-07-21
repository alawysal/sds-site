import { PageHero } from "@/components/page-hero";
import { OpenRoles } from "@/components/open-roles";

export const metadata = {
  title: "Careers",
  description: "Careers at SAL Data Solutions."
};

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Join a team building serious data capability." description="SDS looks for engineers, analysts, architects, and consultants who care about craft, clarity, and business impact." />
      <OpenRoles />
    </>
  );
}
