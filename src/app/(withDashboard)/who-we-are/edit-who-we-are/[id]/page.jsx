import EditWhoWeAre from "@/components/UI/WhoWeAre/EditWhoWeAre";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditWhoWeAre id={id} />
    </>
  );
};

export default page;
