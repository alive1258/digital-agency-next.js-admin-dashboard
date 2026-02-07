import EditPortfolios from "@/components/UI/Portfolios/EditPortfolios";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditPortfolios id={id} />
    </>
  );
};

export default page;
