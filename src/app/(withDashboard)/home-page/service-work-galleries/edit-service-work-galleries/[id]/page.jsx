import EditServiceWorkGalleries from "@/components/UI/HomeSection/ServiceWorkGalleries/EditServiceWorkGalleries";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditServiceWorkGalleries id={id} />
    </>
  );
};

export default page;
