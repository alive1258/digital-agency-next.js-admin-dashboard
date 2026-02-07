import EditServiceReview from "@/components/UI/HomeSection/ServiceReview/EditServiceReview";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditServiceReview id={id} />
    </>
  );
};

export default page;
