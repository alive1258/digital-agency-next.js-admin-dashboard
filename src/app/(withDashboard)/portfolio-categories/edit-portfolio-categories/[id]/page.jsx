import EditPortfolioCategories from "@/components/UI/PortfolioCategories/EditPortfolioCategories";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditPortfolioCategories id={id} />
    </>
  );
};

export default page;
