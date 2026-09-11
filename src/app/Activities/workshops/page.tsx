import { redirect } from "next/navigation";

export default function WorkshopsRootPage() {
  redirect("/Activities/workshops/upcoming");
}
