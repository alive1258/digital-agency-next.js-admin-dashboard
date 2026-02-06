"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";

import {
  useGetSingleHomeHeroQuery,
  useUpdateHomeHeroMutation,
} from "@/redux/api/homeHeroApi";

import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import Input from "@/components/common/Forms/Input";
import Textarea from "@/components/common/Textarea/Textarea";
import FileInput from "@/components/common/FileInput/FileInput";
import FetchLoading from "@/components/common/Loading/FetchLoading";
import TableSkeleton from "@/components/common/Loading/TableSkeleton";

const EditHomeHero = ({ id }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const watchImage = watch("image");

  const {
    data,
    isLoading: fetchLoading,
    error,
    refetch,
  } = useGetSingleHomeHeroQuery(id, { skip: !id });

  const [updateHomeHero, { isLoading }] = useUpdateHomeHeroMutation();

  const hero = data?.data;

  const currentImage = hero?.image;

  const previewImage =
    watchImage instanceof File
      ? URL.createObjectURL(watchImage)
      : watchImage?.[0]
        ? URL.createObjectURL(watchImage[0])
        : null;

  const cacheBustedImage = currentImage && `${currentImage}?t=${Date.now()}`;

  /* -------------------- Set default values -------------------- */
  useEffect(() => {
    if (!hero) return;

    setValue("title", hero.title || "");
    setValue("company", hero.company || "");
    setValue("description", hero.description || "");
    setValue("score", hero.score || "");
    setValue("rating", hero.rating || "");
    setValue("videoUrl", hero.videoUrl || "");
    setValue("campaigns", hero.campaigns || "");
    setValue("revenue", hero.revenue || "");
  }, [hero, setValue]);

  /* -------------------- Submit -------------------- */
  const onSubmit = async (formDataValue) => {
    try {
      const formData = new FormData();

      formData.append("title", formDataValue.title);
      formData.append("company", formDataValue.company);
      formData.append("description", formDataValue.description);
      formData.append("score", formDataValue.score);
      formData.append("rating", formDataValue.rating);
      formData.append("videoUrl", formDataValue.videoUrl);
      formData.append("campaigns", formDataValue.campaigns);
      formData.append("revenue", formDataValue.revenue);

      if (formDataValue.image) {
        formData.append("image", formDataValue.image);
      }

      const res = await updateHomeHero({ id, data: formData }).unwrap();

      if (res?.success) {
        toast.success("Home Hero updated successfully!");
        router.back();
        refetch();
      } else {
        toast.error(res?.message || "Update failed");
      }
    } catch (err) {
      toast.error(err?.message || "Something went wrong");
    }
  };

  if (fetchLoading) return <TableSkeleton />;
  if (error) return <div className="text-red-500">Failed to load data</div>;

  return (
    <section className="md:px-6 px-4 mt-6 rounded-lg">
      <SectionTitle
        big_title="Edit Home Hero"
        title_one="Home"
        link_one="/"
        title_two="All Home Hero"
        link_two="/home-page/home-hero/all-home-heros"
        title_three="Edit Home Hero"
        link_three={`/home-page/home-hero/edit-home-hero/${id}`}
      />

      <div className="add_form_section mt-4">
        <h1 className="add_section_title">Edit Home Hero</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Input
              label="Title"
              text="title"
              placeholder="Hero Title"
              register={register}
              errors={errors}
            />

            <Input
              label="Company"
              text="company"
              placeholder="Company Name"
              register={register}
              errors={errors}
            />

            <Input
              label="Score"
              text="score"
              placeholder="Score"
              register={register}
              errors={errors}
            />

            <Input
              label="Rating"
              text="rating"
              placeholder="Rating"
              register={register}
              errors={errors}
            />

            <Input
              label="Campaigns"
              text="campaigns"
              placeholder="Total Campaigns"
              register={register}
              errors={errors}
            />

            <Input
              label="Revenue"
              text="revenue"
              placeholder="Revenue"
              register={register}
              errors={errors}
            />

            <Input
              label="Video URL"
              text="videoUrl"
              placeholder="YouTube Video URL"
              register={register}
              required={false}
              errors={errors}
            />

            <div className="lg:col-span-2">
              <Textarea
                label="Description"
                text="description"
                placeholder="Hero Description"
                register={register}
                errors={errors}
              />
            </div>

            {(previewImage || cacheBustedImage) && (
              <div className="lg:col-span-2">
                <label className="block mb-2 font-medium">
                  {previewImage ? "New Image Preview" : "Current Image"}
                </label>
                <Image
                  src={previewImage || cacheBustedImage}
                  width={300}
                  height={180}
                  className="rounded shadow object-cover"
                  alt="Hero Image"
                />
              </div>
            )}

            <div className="lg:col-span-2">
              <FileInput
                label="Change Image"
                text="image"
                register={register}
                setValue={setValue}
                required={false}
                errors={errors}
              />
            </div>
          </div>

          <button disabled={isLoading} className="btn">
            {isLoading ? <FetchLoading /> : "Update Hero"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditHomeHero;
