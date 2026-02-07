import EditPricingFeatures from "@/components/UI/PricingFeatures/EditPricingFeatures";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditPricingFeatures id={id} />
    </>
  );
};

export default page;
