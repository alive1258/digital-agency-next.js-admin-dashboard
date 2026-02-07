import EditServiceWorkFlow from "@/components/UI/HomeSection/ServiceWorkFlow/EditServiceWorkFlow";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditServiceWorkFlow id={id} />
    </>
  );
};

export default page;
