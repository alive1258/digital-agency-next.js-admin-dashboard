import EditBlogs from "@/components/UI/Blog/Blogs/EditBlogs";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditBlogs id={id} />
    </>
  );
};

export default page;
