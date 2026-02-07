import EditOurWorkProcess from "@/components/UI/HomeSection/OurWorkProcess/EditOurWorkProcess";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditOurWorkProcess id={id} />
    </>
  );
};

export default page;
