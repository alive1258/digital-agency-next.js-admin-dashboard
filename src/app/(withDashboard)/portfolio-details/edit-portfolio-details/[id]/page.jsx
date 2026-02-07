import EditPortfolioDetails from "@/components/UI/PortfolioDetails/EditPortfolioDetails";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditPortfolioDetails id={id} />
    </>
  );
};

export default page;
