'use client';

import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  createColumnHelper,
  SortingState,
  ColumnFiltersState,
  FilterFn,
} from '@tanstack/react-table';
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';

// Generic table data type
interface TableData {
  [key: string]: any;
}

interface TableProps<T extends TableData> {
  data: T[];
  columns: ColumnDef<T>[];
  caption?: string;
  showPagination?: boolean;
  showSorting?: boolean;
  showFiltering?: boolean;
  showColumnFilters?: boolean; // New: Individual column filters
  pageSize?: number;
  className?: string;
}

const Table = <T extends TableData>({
  data,
  columns,
  caption,
  showPagination = false,
  showSorting = true,
  showFiltering = false,
  showColumnFilters = false,
  pageSize = 10,
  className = ''
}: TableProps<T>) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      globalFilter,
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
  });

  return (
    <div className={`my-4 ${className}`}>
      {/* Caption */}
      {caption && (
        <div className="mb-4 text-center">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {caption}
          </h3>
        </div>
      )}

      {/* Global Filter */}
      {showFiltering && (
        <div className="mb-4">
          <input
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search all columns..."
            className="w-full max-w-sm px-3 py-2 max-sm:text-sm sm:text-base border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:ring-2 focus:ring-[#9f55f9] focus:border-transparent"
          />
        </div>
      )}

      {/* Column Filters */}
      {showColumnFilters && (
        <div className="mb-4 flex flex-wrap gap-4">
          {table.getHeaderGroups()[0]?.headers.map((header) => {
            const column = header.column;
            const columnFilterValue = column.getFilterValue();
            
            return column.getCanFilter() ? (
              <div key={header.id} className="flex flex-col">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  {typeof header.column.columnDef.header === 'string' 
                    ? header.column.columnDef.header 
                    : header.id}
                </label>
                <input
                  type="text"
                  value={(columnFilterValue ?? '') as string}
                  onChange={(e) => column.setFilterValue(e.target.value)}
                  placeholder={`Filter ${header.id}...`}
                  className="w-32 px-2 py-1 text-sm border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:ring-1 focus:ring-[#9f55f9] focus:border-transparent"
                />
              </div>
            ) : null;
          })}
        </div>
      )}

      {/* Table Container with horizontal scroll */}
      <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-700 rounded-lg">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
          {/* Table Head */}
          <thead className="bg-zinc-50 dark:bg-zinc-800">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left max-sm:text-sm sm:text-base font-medium text-zinc-900 dark:text-zinc-100 tracking-tight"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={
                          header.column.getCanSort() && showSorting
                            ? 'flex items-center gap-2 cursor-pointer select-none hover:text-[#9f55f9] transition-colors duration-200'
                            : 'flex items-center gap-2'
                        }
                        onClick={
                          header.column.getCanSort() && showSorting
                            ? header.column.getToggleSortingHandler()
                            : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {showSorting && header.column.getCanSort() && (
                          <span className="flex-shrink-0">
                            {header.column.getIsSorted() === 'desc' ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : header.column.getIsSorted() === 'asc' ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronsUpDown className="h-4 w-4 text-zinc-400" />
                            )}
                          </span>
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* Table Body */}
          <tbody className="bg-white dark:bg-zinc-900 divide-y divide-zinc-200 dark:divide-zinc-700">
            {table.getRowModel().rows.map((row, index) => {
              const isCategory = row.original?.isCategory;
              return (
                <tr
                  key={row.id}
                  className={
                    isCategory
                      ? 'bg-purple-50 dark:bg-purple-900/10'
                      : index % 2 === 0
                        ? 'bg-white dark:bg-zinc-900'
                        : 'bg-zinc-50 dark:bg-zinc-800/50'
                  }
                >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-3 max-sm:text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed"
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
              );
            })}
          </tbody>
        </table>

        {/* Empty State */}
        {table.getRowModel().rows.length === 0 && (
          <div className="text-center py-8">
            <p className="text-base text-zinc-500 dark:text-zinc-400">
              No data available
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {showPagination && table.getPageCount() > 1 && (
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </button>
            <button
              className="px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </button>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span>
              Page {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </span>
            <span>•</span>
            <span>
              {table.getFilteredRowModel().rows.length} total rows
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

// Export createColumnHelper for easier column definitions
export { createColumnHelper };

export default Table;