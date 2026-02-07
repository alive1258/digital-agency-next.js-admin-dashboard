"use client";

import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import TableSkeleton from "@/components/common/Loading/TableSkeleton";
import EditIcon from "@/components/common/EditIcon/EditIcon";
import { useGetAllServiceVideosQuery } from "@/redux/api/serviceVideosApi";

const AllServiceVideo = () => {
  const { data, error, isLoading } = useGetAllServiceVideosQuery();

  if (isLoading) return <TableSkeleton />;

  if (error) {
    return (
      <div className="flex h-[60vh] w-full items-center justify-center">
        <h1>Error: {error?.message || "Failed to load service videos"}</h1>
      </div>
    );
  }

  const videos = data?.data?.data || [];

  return (
    <section className="md:px-6 px-4 mt-6 rounded-lg">
      <div className="flex items-center justify-between space-x-4">
        <SectionTitle
          big_title={"All Service Video"}
          link_one={"/"}
          title_one={"Home"}
          link_two={"/home-page/service-video/all-service-video"}
          title_two={"All Service Video"}
          title_three={"Add Service Video"}
          link_three={"/home-page/service-video/add-service-video"}
        />
      </div>

      <div className="mx-auto w-full pt-4">
        <div className="overflow-x-auto w-full">
          <h1 className="table_header">All Service Video</h1>
          <div className="table_section">
            <table className="w-full">
              <thead>
                <tr className="table_row">
                  <th className="table_th">ID</th>
                  <th className="table_th">Title</th>
                  <th className="table_th text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {videos?.length > 0 ? (
                  videos.map((item, index) => (
                    <tr key={item?.id} className="tbody_tr">
                      <td className="table_th">{index + 1}</td>
                      <td className="table_th">
                        <p>{item?.title || item?.name || "Untitled"}</p>
                      </td>
                      <td className="my-2 px-4 text-center ">
                        <div className="flex items-center justify-center w-full gap-4">
                          <EditIcon
                            edit_link={`/home-page/service-video/edit-service-video/${item?.id}`}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="text-center py-6 text-red-600 text-2xl font-bold">
                      Not Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServiceVideo;
