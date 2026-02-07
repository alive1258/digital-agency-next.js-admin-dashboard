import EditTeams from "@/components/UI/Teams/EditTeams";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditTeams id={id} />
    </>
  );
};

export default page;
