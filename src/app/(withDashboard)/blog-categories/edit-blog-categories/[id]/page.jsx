import EditBlogCategories from "@/components/UI/Blog/BlogCategories/EditBlogCategories";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditBlogCategories id={id} />
    </>
  );
};

export default page;
