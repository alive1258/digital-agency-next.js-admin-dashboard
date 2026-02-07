import EditWhoWeAreFeatures from "@/components/UI/WhoWeAreFeatures/EditWhoWeAreFeatures";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditWhoWeAreFeatures id={id} />
    </>
  );
};

export default page;
