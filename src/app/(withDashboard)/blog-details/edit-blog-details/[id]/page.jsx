import EditBlogDetails from "@/components/UI/Blog/BlogDetails/EditBlogDetails";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditBlogDetails id={id} />
    </>
  );
};

export default page;
