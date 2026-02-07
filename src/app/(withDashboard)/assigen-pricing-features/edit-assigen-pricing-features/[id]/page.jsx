import EditAssigenPricingFeatures from "@/components/UI/AssigenPricingFeatures/EditAssigenPricingFeatures";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditAssigenPricingFeatures id={id} />
    </>
  );
};

export default page;
