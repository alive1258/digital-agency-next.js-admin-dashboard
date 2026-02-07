import EditPartners from "@/components/UI/Partners/EditPartners";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditPartners id={id} />
    </>
  );
};

export default page;
