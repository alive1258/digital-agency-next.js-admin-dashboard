import EditService from "@/components/UI/HomeSection/Service/EditService";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditService id={id} />
    </>
  );
};

export default page;
