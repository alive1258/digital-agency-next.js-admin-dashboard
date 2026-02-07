import EditWhyChooseUs from "@/components/UI/WhyChooseUs/EditWhyChooseUs";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditWhyChooseUs id={id} />
    </>
  );
};

export default page;
