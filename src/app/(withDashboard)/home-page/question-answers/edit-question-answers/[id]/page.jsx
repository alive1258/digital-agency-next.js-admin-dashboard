import EditQuestionAnswers from "@/components/UI/HomeSection/QuestionAnswers/EditQuestionAnswers";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <EditQuestionAnswers id={id} />
    </>
  );
};

export default page;
