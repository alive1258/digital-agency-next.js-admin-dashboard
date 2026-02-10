"use client";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { IoSearch } from "react-icons/io5";
import {
  useDeleteHomeHeroMutation,
  useGetAllHomeHerosQuery,
} from "@/redux/api/homeHeroApi";
import TableSkeleton from "@/components/common/Loading/TableSkeleton";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import EditIcon from "@/components/common/EditIcon/EditIcon";
import DeleteIcon from "@/components/common/DeleteIcon/DeleteIcon";
import AccountPagination from "@/components/common/AccountPagination/AccountPagination";
import NotFound from "@/components/common/NotFound/NotFound";
import Image from "next/image";
import { useDebounce } from "@/hooks/useDebounce";
import { truncateCharacters } from "@/utils/descriptionTextCounter";

const AllHomeHero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchValue, setSearchValue] = useState({});
  const debouncedQuery = useDebounce(searchQuery);

  const query = { ...searchValue };
  if (debouncedQuery) query.search = debouncedQuery;

  const { data, error, isLoading, refetch } = useGetAllHomeHerosQuery(query);
  const [deleteHomeHero] = useDeleteHomeHeroMutation();

  // Filters companies based on the search query
  const filteredData = data?.data;

  const handleDeleteHomeHero = async (homeHero) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: `Are you sure you want to delete the homeHero "${homeHero?.title}"?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const response = await deleteHomeHero(homeHero?.id).unwrap();
        if (response?.success) {
          Swal.fire({
            title: "Deleted!",
            text: `The homeHero "${homeHero?.title}" has been successfully deleted.`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: `${response?.message}`,
            icon: "error",
          });
        }
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: `An error occurred: ${error.data || error.message}`,
        icon: "error",
      });
    }
  };

  // Render loading state
  if (isLoading) {
    return <TableSkeleton />;
  }

  // Render error state if there was an error fetching data
  if (error) {
    return (
      <div className="flex h-[85vh] w-full items-center justify-center">
        <h1>Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <div className="md:px-6  p-4 pb-4 rounded-lg">
      <div className="bg-[#0D0E12] sticky top-18.75 md:top-20.5 z-450 py-2 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 ">
          <div className="w-full">
            <SectionTitle
              big_title={"All Home Hero"}
              link_one={"/"}
              title_one={"Home Hero"}
              title_two={"All Home Hero"}
              link_two={"/home-page/home-hero/all-home-heros"}
            />
          </div>
          {/* Search input with icon */}
          <div className="flex items-center w-full justify-between md:justify-end gap-4">
            <div className="relative w-full max-w-xs">
              <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for..."
                className="text-[14px] bg-[#14151A]  border border-[#26272F] rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
              />
            </div>
            {/* Link to create a new company */}
            <Link href="/home-page/home-hero/add-home-hero">
              <button className="btn w-37.5 md:w-64">Add Home Hero</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full pt-2 mt-6">
        <h1 className="table_header">All Home Heros</h1>
        <div className="overflow-x-auto w-full">
          <div className="table_section">
            <table className="w-full">
              <thead>
                <tr className="table_row">
                  <th className="table_th w-4">#SL</th>
                  <th className="table_th">Image</th>
                  <th className="table_th">Title</th>
                  <th className="table_th">Company</th>
                  <th className="table_th">Score / Rating</th>
                  <th className="table_th">Description</th>
                  <th className="table_th text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData?.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr key={item.id ?? index} className="tbody_tr">
                      <td className="table_th">{index + 1}</td>

                      {/* Photo */}
                      <td className="table_th flex justify-center">
                        {item?.image && (
                          <Image
                            width={60}
                            height={60}
                            src={item.image}
                            alt="hero"
                          />
                        )}
                      </td>

                      {/* Name */}
                      <td className="table_th">
                        {truncateCharacters(item?.title, 30)}
                      </td>

                      {/* Class Name → Company */}
                      <td className="table_th">
                        {truncateCharacters(item?.company, 30)}
                      </td>

                      {/* Course Name → Score / Rating */}
                      <td className="table_th">
                        Score: {item?.score} | ⭐ {item?.rating}
                      </td>

                      {/* Description */}
                      <td className="table_th">
                        {truncateCharacters(item?.description, 30)}
                      </td>

                      {/* Action */}
                      <td className="px-4 text-center">
                        <div className="flex justify-center gap-2">
                          <EditIcon
                            edit_link={`/home-page/home-hero/edit-home-hero/${item?.id}`}
                          />
                          <DeleteIcon
                            handleDelete={handleDeleteHomeHero}
                            item={item}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="text-center py-6 text-red-600 text-xl"
                    >
                      <NotFound />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          {data?.meta?.totalPages > 1 && (
            <AccountPagination
              refetch={refetch}
              total={data?.meta?.total}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
              totalPage={data?.meta?.totalPages}
              limit={data?.meta?.limit}
              page={data?.meta?.page}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AllHomeHero;
