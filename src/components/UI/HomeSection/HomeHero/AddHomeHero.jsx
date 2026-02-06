"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useCreateHomeHerosMutation } from "@/redux/api/homeHeroApi";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import Input from "@/components/common/Forms/Input";
import FetchLoading from "@/components/common/Loading/FetchLoading";
import Textarea from "@/components/common/Textarea/Textarea";
import FileInput from "@/components/common/FileInput/FileInput";

const AddHomeHero = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [createHomeHero, { isLoading }] = useCreateHomeHerosMutation();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Required fields
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("company", data.company);
      formData.append("score", data.score);
      formData.append("rating", data.rating);

      // Optional fields
      if (data.videoUrl) formData.append("videoUrl", data.videoUrl);
      if (data.campaigns) formData.append("campaigns", data.campaigns);
      if (data.revenue) formData.append("revenue", data.revenue);
      if (data.image) formData.append("image", data.image);

      const res = await createHomeHero(formData).unwrap();

      if (res?.success) {
        toast.success("Home Hero created successfully!");
        reset();
        router.back();
      } else {
        toast.error(res?.message || "Failed to create Home Hero");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  return (
    <section className="md:px-6 px-4 mt-6 pb-4 rounded-lg">
      <SectionTitle
        big_title="Add Home Hero"
        link_one="/"
        title_one="Home"
        link_two="/home-page/home-hero/all-home-heros"
        title_two="All Home Hero"
        title_three="Add Home Hero"
        link_three="/home-page/home-hero/add-home-hero"
      />

      <div className="add_form_section mt-4">
        <h1 className="add_section_title">Create Home Hero</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Input
              label="Title"
              placeholder="Enter hero title"
              text="title"
              register={register}
              errors={errors}
            />

            <Input
              label="Company"
              placeholder="Enter company name"
              text="company"
              register={register}
              errors={errors}
            />

            <Input
              label="Score"
              placeholder="Enter score (e.g. 98)"
              text="score"
              type="number"
              register={register}
              errors={errors}
            />

            <Input
              label="Rating"
              placeholder="Enter rating (0–5)"
              text="rating"
              type="number"
              step="0.1"
              register={register}
              errors={errors}
            />

            <Input
              label="Video URL"
              placeholder="https://youtube.com/..."
              text="videoUrl"
              required={false}
              register={register}
              errors={errors}
            />

            <Input
              label="Campaigns"
              placeholder="Total campaigns"
              text="campaigns"
              type="number"
              required={false}
              register={register}
              errors={errors}
            />

            <Input
              label="Revenue"
              placeholder="Revenue amount"
              text="revenue"
              type="number"
              required={false}
              register={register}
              errors={errors}
            />

            <div className="lg:col-span-2">
              <Textarea
                label="Description"
                placeholder="Enter hero description"
                text="description"
                register={register}
                errors={errors}
              />
            </div>

            <div className="lg:col-span-2">
              <FileInput
                label="Hero Image"
                text="image"
                required={false}
                register={register}
                setValue={setValue}
                errors={errors}
              />
            </div>
          </div>

          <button disabled={isLoading} className="btn mt-4" type="submit">
            {isLoading ? <FetchLoading /> : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddHomeHero;
