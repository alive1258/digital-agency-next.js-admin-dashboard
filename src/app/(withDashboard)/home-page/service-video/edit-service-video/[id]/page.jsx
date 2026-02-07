import EditServiceVideo from "@/components/UI/HomeSection/ServiceVideo/EditServiceVideo";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditServiceVideo id={id} />
    </>
  );
};

export default page;
