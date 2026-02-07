import EditServiceFaqs from "@/components/UI/HomeSection/ServiceFaqs/EditServiceFaqs";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditServiceFaqs id={id} />
    </>
  );
};

export default page;
