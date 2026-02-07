import EditServiceCategory from "@/components/UI/HomeSection/ServiceCategory/EditServiceCategory";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditServiceCategory id={id} />
    </>
  );
};

export default page;
