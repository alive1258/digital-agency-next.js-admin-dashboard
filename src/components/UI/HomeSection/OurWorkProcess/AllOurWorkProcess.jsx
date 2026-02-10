"use client";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";

import {
  useDeleteOurWorkProcessMutation,
  useGetAllOurWorkProcessQuery,
} from "@/redux/api/ourWorkProcessApi";

import TableSkeleton from "@/components/common/Loading/TableSkeleton";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";
import EditIcon from "@/components/common/EditIcon/EditIcon";
import DeleteIcon from "@/components/common/DeleteIcon/DeleteIcon";
import AccountPagination from "@/components/common/AccountPagination/AccountPagination";
import NotFound from "@/components/common/NotFound/NotFound";
import { useDebounce } from "@/hooks/useDebounce";
import { truncateCharacters } from "@/utils/descriptionTextCounter";

const AllOurWorkProcess = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchValue, setSearchValue] = useState({});
  const debouncedQuery = useDebounce(searchQuery);

  const query = { ...searchValue };
  if (debouncedQuery) query.search = debouncedQuery;

  const { data, error, isLoading, refetch } =
    useGetAllOurWorkProcessQuery(query);

  const [deleteOurWorkProcess] = useDeleteOurWorkProcessMutation();

  const handleDelete = async (item) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: `Delete "${item?.title}"?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await deleteOurWorkProcess(item?.id).unwrap();
        if (res?.success) {
          Swal.fire("Deleted!", "Item deleted successfully.", "success");
        }
      }
    } catch (err) {
      Swal.fire("Error!", err?.message || "Something went wrong", "error");
    }
  };

  if (isLoading) return <TableSkeleton />;

  if (error) {
    return (
      <div className="flex h-[85vh] items-center justify-center">
        <h1>Error: {error?.message}</h1>
      </div>
    );
  }

  return (
    <div className="md:px-6 p-4 pb-4 rounded-lg">
      {/* Header */}
      <div className="bg-[#0D0E12] sticky top-18.75 md:top-20.5 z-450 py-2">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <SectionTitle
            big_title="All Our Work Process"
            title_one="Our Work Process"
            title_two="All"
            link_one="/"
            link_two="/our-work-process/all"
          />

          {/* Search + Add */}
          <div className="flex gap-4">
            <div className="relative w-full max-w-xs">
              <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-[#14151A] border border-[#26272F] rounded-md py-2 pl-10 pr-4 w-full"
              />
            </div>

            <Link href="/home-page/our-work-process/add-our-work-process">
              <button className="btn w-40">Add Process</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6">
        <h1 className="table_header">All Our Work Process</h1>

        <div className="table_section overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="table_row">
                <th className="table_th">#SL</th>
                <th className="table_th">Image</th>
                <th className="table_th">Title</th>
                <th className="table_th">Description</th>
                <th className="table_th">Color Code</th>
                <th className="table_th text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {data?.data?.length > 0 ? (
                data.data.map((item, index) => (
                  <tr key={item.id} className="tbody_tr">
                    <td className="table_th">{index + 1}</td>

                    <td className="table_th flex justify-center">
                      {item?.image && (
                        <Image
                          src={item.image}
                          width={50}
                          height={50}
                          alt="process"
                        />
                      )}
                    </td>

                    <td className="table_th">
                      {truncateCharacters(item?.title, 30)}
                    </td>

                    <td className="table_th">
                      {truncateCharacters(item?.description, 35)}
                    </td>

                    <td className="table_th">
                      <span
                        className="px-3 py-1 rounded"
                        style={{ background: item?.color_code }}
                      >
                        {item?.color_code}
                      </span>
                    </td>

                    <td className="px-4 text-center">
                      <div className="flex justify-center gap-2">
                        <EditIcon
                          edit_link={`/our-work-process/edit/${item?.id}`}
                        />
                        <DeleteIcon handleDelete={handleDelete} item={item} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-6">
                    <NotFound />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {data?.meta?.totalPages > 1 && (
          <AccountPagination
            refetch={refetch}
            total={data?.meta?.total}
            totalPage={data?.meta?.totalPages}
            limit={data?.meta?.limit}
            page={data?.meta?.page}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        )}
      </div>
    </div>
  );
};

export default AllOurWorkProcess;
