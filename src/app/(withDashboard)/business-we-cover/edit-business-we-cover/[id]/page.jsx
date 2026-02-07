import EditBusinessWeCover from "@/components/UI/BusinessWeCover/EditBusinessWeCover";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditBusinessWeCover id={id} />
    </>
  );
};

export default page;
