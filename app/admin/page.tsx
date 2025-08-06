import { redirect } from "next/navigation";

import { getIsAdmin } from "@/lib/admin";

import AppWrapper from "./AppWrapper"; // Import the new Client Component

const AdminPage = async () => {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) redirect("/");

  return (
    <div>
      <AppWrapper />
    </div>
  );
};

export default AdminPage;