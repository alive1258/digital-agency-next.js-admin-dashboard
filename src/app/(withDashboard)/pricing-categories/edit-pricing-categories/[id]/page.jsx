import EditPricingCategories from "@/components/UI/PricingCategories/EditPricingCategories";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditPricingCategories id={id} />
    </>
  );
};

export default page;
