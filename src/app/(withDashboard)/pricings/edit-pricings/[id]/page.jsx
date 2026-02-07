import EditPricings from "@/components/UI/Pricings/EditPricings";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditPricings id={id} />
    </>
  );
};

export default page;
